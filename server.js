const path = require('path');
const express = require('express');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'data', 'kino.db');
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_ADMIN_CHAT_ID = process.env.TELEGRAM_ADMIN_CHAT_ID || '';
const app = express();

let db;
let telegramBot = null;

const MAX_RECEIPT_SIZE_BYTES = 3 * 1024 * 1024;

function toNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

async function initDb() {
  db = await open({
    filename: DB_PATH,
    driver: sqlite3.Database
  });

  await db.exec('PRAGMA journal_mode = WAL;');
  await db.exec('PRAGMA busy_timeout = 5000;');

  await db.exec(`
    CREATE TABLE IF NOT EXISTS storage (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
}

async function getStorageValue(key) {
  const row = await db.get('SELECT value FROM storage WHERE key = ?', key);
  if (!row) return null;

  try {
    return JSON.parse(row.value);
  } catch {
    return null;
  }
}

async function setStorageValue(key, value) {
  const serialized = JSON.stringify(value);
  await db.run(
    `
      INSERT INTO storage (key, value, updated_at)
      VALUES (?, ?, datetime('now'))
      ON CONFLICT(key) DO UPDATE SET
        value = excluded.value,
        updated_at = datetime('now')
    `,
    key,
    serialized
  );
}

async function getArrayStorage(key) {
  const value = await getStorageValue(key);
  return Array.isArray(value) ? value : [];
}

async function saveArrayStorage(key, value) {
  await setStorageValue(key, Array.isArray(value) ? value : []);
}

function createPaymentId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

async function approvePaymentById(paymentId) {
  const payments = await getArrayStorage('kinotj_payments');
  const paymentIndex = payments.findIndex((p) => String(p.id) === String(paymentId));

  if (paymentIndex === -1) {
    return { ok: false, reason: 'not-found' };
  }

  const payment = payments[paymentIndex];
  if (payment.status === 'approved') {
    return { ok: true, alreadyApproved: true, payment };
  }

  payment.status = 'approved';
  payment.approvedAt = new Date().toISOString();
  payments[paymentIndex] = payment;
  await saveArrayStorage('kinotj_payments', payments);

  const users = await getArrayStorage('kinotj_users');
  const userIndex = users.findIndex((u) => toNumber(u.id) === toNumber(payment.userId));
  if (userIndex !== -1) {
    const user = users[userIndex];
    user.purchasedMovies = Array.isArray(user.purchasedMovies) ? user.purchasedMovies : [];

    const movieId = toNumber(payment.movieId, payment.movieId);
    if (!user.purchasedMovies.includes(movieId)) {
      user.purchasedMovies.push(movieId);
    }

    users[userIndex] = user;
    await saveArrayStorage('kinotj_users', users);
  }

  return { ok: true, payment };
}

async function rejectPaymentById(paymentId) {
  const payments = await getArrayStorage('kinotj_payments');
  const paymentIndex = payments.findIndex((p) => String(p.id) === String(paymentId));

  if (paymentIndex === -1) {
    return { ok: false, reason: 'not-found' };
  }

  const payment = payments[paymentIndex];
  if (payment.status === 'rejected') {
    return { ok: true, alreadyRejected: true, payment };
  }

  payment.status = 'rejected';
  payment.rejectedAt = new Date().toISOString();
  payments[paymentIndex] = payment;
  await saveArrayStorage('kinotj_payments', payments);

  return { ok: true, payment };
}

function buildPaymentMessage(payment) {
  return [
    '💳 Новая заявка на оплату',
    '',
    `ID: ${payment.id}`,
    `Пользователь: ${payment.userName || 'Не указан'} (${payment.userPhone || 'нет телефона'})`,
    `Фильм: ${payment.movieTitle || 'Неизвестно'}`,
    `Сумма: ${payment.amount} сомони`,
    `Метод: ${payment.method || 'не указан'}`,
    `Чек: ${payment.receipt ? 'прикреплён' : 'не прикреплён'}`,
    `Время: ${new Date(payment.date).toLocaleString('ru-RU')}`
  ].join('\n');
}

function normalizeReceipt(receipt) {
  if (!receipt || typeof receipt !== 'object') return null;

  const dataUrl = typeof receipt.dataUrl === 'string' ? receipt.dataUrl : '';
  const match = dataUrl.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
  if (!match) return null;

  const mimeType = match[1];
  const base64Data = match[2];
  const size = Buffer.byteLength(base64Data, 'base64');

  if (!Number.isFinite(size) || size <= 0 || size > MAX_RECEIPT_SIZE_BYTES) {
    return null;
  }

  return {
    name: typeof receipt.name === 'string' ? receipt.name.slice(0, 120) : 'receipt-image',
    type: mimeType,
    size,
    dataUrl: `data:${mimeType};base64,${base64Data}`
  };
}

async function sendPaymentToTelegram(payment) {
  if (!telegramBot || !TELEGRAM_ADMIN_CHAT_ID) {
    return { ok: false, skipped: true, reason: 'telegram-not-configured' };
  }

  const keyboard = {
    inline_keyboard: [
      [
        { text: '✅ Одобрить', callback_data: `approve:${payment.id}` },
        { text: '❌ Отклонить', callback_data: `reject:${payment.id}` }
      ]
    ]
  };

  if (payment.receipt && typeof payment.receipt.dataUrl === 'string') {
    const rawBase64 = payment.receipt.dataUrl.split(',')[1] || '';
    const receiptBuffer = Buffer.from(rawBase64, 'base64');

    await telegramBot.sendDocument(TELEGRAM_ADMIN_CHAT_ID, receiptBuffer, {
      caption: buildPaymentMessage(payment),
      reply_markup: keyboard
    }, {
      filename: payment.receipt.name || 'receipt.jpg',
      contentType: payment.receipt.type || 'application/octet-stream'
    });
  } else {
    await telegramBot.sendMessage(TELEGRAM_ADMIN_CHAT_ID, buildPaymentMessage(payment), {
      reply_markup: keyboard
    });
  }

  return { ok: true };
}

function initTelegramBot() {
  if (!TELEGRAM_BOT_TOKEN) {
    console.log('Telegram bot disabled: TELEGRAM_BOT_TOKEN is not set.');
    return;
  }

  telegramBot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

  telegramBot.on('polling_error', (error) => {
    console.error('Telegram polling error:', error.message);
  });

  telegramBot.on('callback_query', async (query) => {
    try {
      const data = query.data || '';
      const [action, paymentId] = data.split(':');

      if (!paymentId || (action !== 'approve' && action !== 'reject')) {
        await telegramBot.answerCallbackQuery(query.id, { text: 'Неверная команда' });
        return;
      }

      if (action === 'approve') {
        const result = await approvePaymentById(paymentId);
        if (!result.ok) {
          await telegramBot.answerCallbackQuery(query.id, { text: 'Заявка не найдена' });
          return;
        }

        await telegramBot.answerCallbackQuery(query.id, { text: 'Платёж одобрен ✅' });
        await telegramBot.sendMessage(query.message.chat.id, `✅ Доступ выдан. Заявка ${paymentId} одобрена.`);
        return;
      }

      const result = await rejectPaymentById(paymentId);
      if (!result.ok) {
        await telegramBot.answerCallbackQuery(query.id, { text: 'Заявка не найдена' });
        return;
      }

      await telegramBot.answerCallbackQuery(query.id, { text: 'Платёж отклонён ❌' });
      await telegramBot.sendMessage(query.message.chat.id, `❌ Заявка ${paymentId} отклонена.`);
    } catch (error) {
      console.error('Telegram callback processing failed:', error);
      if (query && query.id) {
        await telegramBot.answerCallbackQuery(query.id, { text: 'Ошибка обработки' });
      }
    }
  });

  console.log('Telegram bot polling started.');
}

app.use(express.json({ limit: '8mb' }));
app.use(express.static(__dirname));

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    database: 'sqlite',
    telegram: Boolean(TELEGRAM_BOT_TOKEN && TELEGRAM_ADMIN_CHAT_ID)
  });
});

app.put('/api/user/profile', async (req, res) => {
  try {
    const { userId, name, phone, avatar } = req.body;
    
    if (!userId) {
      return res.status(400).json({ ok: false, error: 'userId required' });
    }

    const users = await getArrayStorage('kinotj_users');
    const userIndex = users.findIndex(u => toNumber(u.id) === toNumber(userId));

    if (userIndex === -1) {
      return res.status(404).json({ ok: false, error: 'User not found' });
    }

    // Update user fields
    if (name) users[userIndex].name = name;
    if (phone) users[userIndex].phone = phone;
    if (avatar) users[userIndex].avatar = avatar; // base64 or empty string

    await saveArrayStorage('kinotj_users', users);
    res.json({ ok: true, user: users[userIndex] });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

app.post('/api/payments/request', async (req, res) => {
  try {
    const {
      userId,
      userName,
      userPhone,
      movieId,
      movieTitle,
      amount,
      method,
      receipt
    } = req.body || {};

    if (!userId || !movieId || !movieTitle) {
      return res.status(400).json({ ok: false, error: 'Invalid payment payload' });
    }

    const payments = await getArrayStorage('kinotj_payments');
    const pendingExists = payments.some((payment) =>
      toNumber(payment.userId) === toNumber(userId) &&
      toNumber(payment.movieId) === toNumber(movieId) &&
      payment.status === 'pending'
    );

    if (pendingExists) {
      return res.status(409).json({ ok: false, error: 'Payment already pending' });
    }

    const payment = {
      id: createPaymentId(),
      userId: toNumber(userId, userId),
      userName: userName || 'Пользователь',
      userPhone: userPhone || '',
      movieId: toNumber(movieId, movieId),
      movieTitle,
      amount: toNumber(amount, 0),
      method: method || 'manual',
      date: new Date().toISOString(),
      status: 'pending',
      receipt: normalizeReceipt(receipt)
    };

    payments.push(payment);
    await saveArrayStorage('kinotj_payments', payments);

    let telegramResult = { ok: false, skipped: true };
    try {
      telegramResult = await sendPaymentToTelegram(payment);
    } catch (error) {
      console.error('Failed to send payment to Telegram:', error.message);
      telegramResult = { ok: false, skipped: false, error: error.message };
    }

    res.json({ ok: true, payment, telegram: telegramResult });
  } catch (error) {
    res.status(500).json({ ok: false, error: 'Failed to create payment request' });
  }
});

app.get('/api/payments/access/:userId', async (req, res) => {
  try {
    const userId = toNumber(req.params.userId, req.params.userId);
    const payments = await getArrayStorage('kinotj_payments');
    const approvedMovieIds = payments
      .filter((payment) => toNumber(payment.userId, payment.userId) === userId && payment.status === 'approved')
      .map((payment) => toNumber(payment.movieId, payment.movieId));

    const uniqueApproved = [...new Set(approvedMovieIds)];
    res.json({ ok: true, userId, approvedMovieIds: uniqueApproved });
  } catch (error) {
    res.status(500).json({ ok: false, error: 'Failed to load access status' });
  }
});

app.get('/api/storage/bootstrap', async (req, res) => {
  try {
    const rows = await db.all('SELECT key, value FROM storage');
    const data = {};

    for (const row of rows) {
      try {
        data[row.key] = JSON.parse(row.value);
      } catch {
        data[row.key] = null;
      }
    }

    res.json({ ok: true, data });
  } catch (error) {
    res.status(500).json({ ok: false, error: 'Bootstrap read failed' });
  }
});

app.get('/api/storage/:key', async (req, res) => {
  try {
    const value = await getStorageValue(req.params.key);
    if (value === null) {
      return res.status(404).json({ ok: false, error: 'Not found' });
    }

    res.json({ ok: true, key: req.params.key, value });
  } catch (error) {
    res.status(500).json({ ok: false, error: 'Read failed' });
  }
});

app.put('/api/storage/:key', async (req, res) => {
  try {
    await setStorageValue(req.params.key, req.body.value);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: 'Write failed' });
  }
});

app.post('/api/storage/batch', async (req, res) => {
  try {
    const entries = req.body.entries || {};
    const keys = Object.keys(entries);

    await db.exec('BEGIN');
    try {
      for (const key of keys) {
        await setStorageValue(key, entries[key]);
      }
      await db.exec('COMMIT');
    } catch (innerError) {
      await db.exec('ROLLBACK');
      throw innerError;
    }

    res.json({ ok: true, saved: keys.length });
  } catch (error) {
    res.status(500).json({ ok: false, error: 'Batch write failed' });
  }
});

app.delete('/api/storage/:key', async (req, res) => {
  try {
    await db.run('DELETE FROM storage WHERE key = ?', req.params.key);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: 'Delete failed' });
  }
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }

  if (req.path.endsWith('.html') || req.path === '/') {
    return next();
  }

  res.sendFile(path.join(__dirname, 'index.html'));
});

initDb()
  .then(() => {
    initTelegramBot();
    app.listen(PORT, () => {
      console.log(`Kino Tj server running on http://localhost:${PORT}`);
      console.log(`SQLite DB: ${DB_PATH}`);
    });
  })
  .catch((error) => {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  });
