let currentTab = 'movies';
let cachedData = {};

const tabButtons = () => document.querySelectorAll('[data-tab]');

function normalizeRows(rows, tab) {
    if (!Array.isArray(rows)) return [];

    if (tab === 'movies') {
        return rows.map(movie => ({
            id: movie.id,
            title: movie.title,
            year: movie.year,
            genre: movie.genre,
            rating: movie.rating,
            price: movie.price,
            category: Array.isArray(movie.category) ? movie.category.join(', ') : ''
        }));
    }

    if (tab === 'users') {
        return rows.map(user => ({
            id: user.id,
            name: user.name,
            phone: user.phone,
            purchases: Array.isArray(user.purchasedMovies) ? user.purchasedMovies.length : 0,
            registeredAt: user.registeredAt
        }));
    }

    if (tab === 'payments') {
        return rows.map(payment => ({
            id: payment.id,
            userName: payment.userName,
            movieTitle: payment.movieTitle,
            amount: payment.amount,
            status: payment.status,
            date: payment.date
        }));
    }

    return rows;
}

function renderTable(rows) {
    const tableHead = document.getElementById('tableHead');
    const tableBody = document.getElementById('tableBody');

    if (!rows.length) {
        tableHead.innerHTML = '';
        tableBody.innerHTML = '<tr><td>Нет данных</td></tr>';
        return;
    }

    const columns = Object.keys(rows[0]);

    tableHead.innerHTML = `<tr>${columns.map(c => `<th>${c}</th>`).join('')}</tr>`;
    tableBody.innerHTML = rows.map(row => {
        const values = columns.map(col => row[col] ?? '');
        return `<tr>${values.map(v => `<td>${String(v)}</td>`).join('')}</tr>`;
    }).join('');
}

function setActiveTab(tab) {
    currentTab = tab;
    tabButtons().forEach(btn => {
        btn.classList.remove('btn-primary', 'btn-secondary');
        btn.classList.add(btn.dataset.tab === tab ? 'btn-primary' : 'btn-secondary');
    });

    const jsonBlock = document.getElementById('jsonBlock');
    const tableContainer = document.getElementById('tableContainer');

    if (tab === 'json') {
        tableContainer.classList.add('hidden');
        jsonBlock.classList.remove('hidden');
        jsonBlock.textContent = JSON.stringify(cachedData, null, 2);
        return;
    }

    jsonBlock.classList.add('hidden');
    tableContainer.classList.remove('hidden');

    const source = tab === 'movies'
        ? cachedData.kinotj_movies
        : tab === 'users'
            ? cachedData.kinotj_users
            : cachedData.kinotj_payments;

    renderTable(normalizeRows(source || [], tab));
}

async function loadDbData() {
    const dbMeta = document.getElementById('dbMeta');
    dbMeta.textContent = 'Обновление...';

    try {
        const response = await fetch('/api/storage/bootstrap');
        if (!response.ok) throw new Error('api_error');

        const payload = await response.json();
        cachedData = payload.data || {};

        const moviesCount = Array.isArray(cachedData.kinotj_movies) ? cachedData.kinotj_movies.length : 0;
        const usersCount = Array.isArray(cachedData.kinotj_users) ? cachedData.kinotj_users.length : 0;
        const paymentsCount = Array.isArray(cachedData.kinotj_payments) ? cachedData.kinotj_payments.length : 0;

        dbMeta.textContent = `Фильмы: ${moviesCount} • Пользователи: ${usersCount} • Платежи: ${paymentsCount}`;
        setActiveTab(currentTab);
    } catch (error) {
        dbMeta.textContent = 'Ошибка подключения к БД';
        document.getElementById('tableHead').innerHTML = '';
        document.getElementById('tableBody').innerHTML = '<tr><td>Не удалось загрузить данные. Проверьте сервер.</td></tr>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    tabButtons().forEach(button => {
        button.addEventListener('click', () => setActiveTab(button.dataset.tab));
    });

    document.getElementById('refreshBtn').addEventListener('click', loadDbData);

    loadDbData();
});
