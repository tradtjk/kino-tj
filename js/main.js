// ========================================
// ДАННЫЕ ФИЛЬМОВ
// ========================================

const defaultMovies = [
    {
        id: 1,
        title: "Интерстеллар",
        year: 2014,
        genre: "Фантастика",
        rating: 8.6,
        duration: 169,
        price: 1,
        description: "Когда засуха приводит человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека.",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        video: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
        category: ["popular", "recommended"]
    },
    {
        id: 2,
        title: "Начало",
        year: 2010,
        genre: "Триллер",
        rating: 8.8,
        duration: 148,
        price: 1,
        description: "Кобб - талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадёт ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим.",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        video: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        category: ["popular", "new"]
    },
    {
        id: 3,
        title: "Матрица",
        year: 1999,
        genre: "Фантастика",
        rating: 8.7,
        duration: 136,
        price: 1,
        description: "Жизнь Томаса Андерсона разделена на две части: днём он - самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео.",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        video: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
        category: ["popular", "recommended"]
    },
    {
        id: 4,
        title: "Темный рыцарь",
        year: 2008,
        genre: "Боевик",
        rating: 9.0,
        duration: 152,
        price: 1,
        description: "Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы от преступности.",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        video: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        category: ["popular"]
    },
    {
        id: 5,
        title: "Форрест Гамп",
        year: 1994,
        genre: "Драма",
        rating: 8.8,
        duration: 142,
        price: 1,
        description: "От лица главного героя Форреста Гампа, слабоумного безобидного человека с благородным и открытым сердцем, рассказывается история его необыкновенной жизни.",
        poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        video: "https://www.youtube.com/watch?v=bLvqoHBptjg",
        category: ["recommended"]
    },
    {
        id: 6,
        title: "Побег из Шоушенка",
        year: 1994,
        genre: "Драма",
        rating: 9.3,
        duration: 142,
        price: 1,
        description: "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью тюремной жизни.",
        poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        video: "https://www.youtube.com/watch?v=6hB3S9bIaco",
        category: ["popular", "recommended"]
    },
    {
        id: 7,
        title: "Джокер",
        year: 2019,
        genre: "Триллер",
        rating: 8.4,
        duration: 122,
        price: 1,
        description: "Готэм, начало 1980-х годов. Комик Артур Флек живет с больной матерью, которая с детства учит его «приносить в мир смех». Пытаясь честно заработать днем, Артур подрабатывает уличным клоуном.",
        poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        video: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
        category: ["new", "recommended"]
    },
    {
        id: 8,
        title: "Аватар",
        year: 2009,
        genre: "Фантастика",
        rating: 7.8,
        duration: 162,
        price: 1,
        description: "На далекой планете Пандора находится редкий минерал, необходимый людям. Для того чтобы его добывать, нужно наладить контакт с местными жителями - народом На'ви.",
        poster: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
        video: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
        category: ["new", "popular"]
    },
    {
        id: 9,
        title: "Зеленая миля",
        year: 1999,
        genre: "Драма",
        rating: 8.6,
        duration: 189,
        price: 1,
        description: "Пол Эджкомб - начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни.",
        poster: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg",
        video: "https://www.youtube.com/watch?v=Ki4haFrqSrw",
        category: ["recommended"]
    },
    {
        id: 10,
        title: "1+1",
        year: 2011,
        genre: "Комедия",
        rating: 8.5,
        duration: 112,
        price: 1,
        description: "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, - молодого жителя предместья Дрисса.",
        poster: "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_.jpg",
        video: "https://www.youtube.com/watch?v=34WIbmXkewU",
        category: ["new", "recommended"]
    },
    {
        id: 11,
        title: "Леон",
        year: 1994,
        genre: "Боевик",
        rating: 8.5,
        duration: 110,
        price: 1,
        description: "Профессиональный убийца Леон неожиданно берет под опеку 12-летнюю девочку Матильду - единственную уцелевшую после убийства ее семьи.",
        poster: "https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_.jpg",
        video: "https://www.youtube.com/watch?v=DcsirofJrlM",
        category: ["popular"]
    },
    {
        id: 12,
        title: "Гладиатор",
        year: 2000,
        genre: "Боевик",
        rating: 8.5,
        duration: 155,
        price: 1,
        description: "Максимус - могущественный римский полководец, любимец императора Марка Аврелия. На смертном одре император просит Максимуса стать его преемником.",
        poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        video: "https://www.youtube.com/watch?v=owK1qxDselE",
        category: ["new"]
    }
];

// Рабочий массив фильмов (загружается из localStorage или дефолтный)
let movies = [];

// ========================================
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// ========================================

let currentMovie = null;
let currentVideoSrc = '';
let selectedPaymentMethod = null;
let currentUser = null;
let successAction = 'watch';
let paymentStep = 'choose';
let uploadedReceipt = null;

async function syncUserAccessFromServer() {
    if (!currentUser || !currentUser.id) return;

    try {
        const response = await fetch(`/api/payments/access/${currentUser.id}`);
        if (!response.ok) return;

        const payload = await response.json();
        if (!payload.ok || !Array.isArray(payload.approvedMovieIds)) return;

        currentUser.purchasedMovies = Array.isArray(currentUser.purchasedMovies)
            ? currentUser.purchasedMovies
            : [];

        payload.approvedMovieIds.forEach(movieId => {
            if (!currentUser.purchasedMovies.includes(movieId)) {
                currentUser.purchasedMovies.push(movieId);
            }
        });

        updateUserData(currentUser);
        refreshMovieSections();
    } catch (error) {
        console.warn('Failed to sync user access from server.');
    }
}

// ========================================
// ИНИЦИАЛИЗАЦИЯ ФИЛЬМОВ
// ========================================

function initMovies() {
    const savedMovies = localStorage.getItem('kinotj_movies');
    if (savedMovies) {
        movies = JSON.parse(savedMovies);
    } else {
        movies = [...defaultMovies];
        localStorage.setItem('kinotj_movies', JSON.stringify(movies));
    }
}

// ========================================
// СИСТЕМА ПОЛЬЗОВАТЕЛЕЙ
// ========================================

// Инициализация пользователей из localStorage
function initUserSystem() {
    // Проверяем есть ли сохраненная сессия
    const savedUser = localStorage.getItem('kinotj_current_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIForLoggedInUser();
    }
}

// Получить всех пользователей
function getUsers() {
    const users = localStorage.getItem('kinotj_users');
    return users ? JSON.parse(users) : [];
}

// Сохранить пользователей
function saveUsers(users) {
    localStorage.setItem('kinotj_users', JSON.stringify(users));
}

// Регистрация нового пользователя
function registerUser(name, phone, password) {
    const users = getUsers();
    
    // Проверяем существует ли пользователь
    const existingUser = users.find(u => u.phone === phone);
    if (existingUser) {
        return { success: false, error: 'Пользователь с таким номером уже существует' };
    }
    
    // Создаем нового пользователя
    const newUser = {
        id: Date.now(),
        name: name,
        phone: phone,
        password: password, // В реальном приложении нужно хэшировать!
        avatar: '', // Avatar will be added when user uploads one
        purchasedMovies: [],
        registeredAt: new Date().toISOString()
    };
    
    users.push(newUser);
    saveUsers(users);
    
    // Автоматически входим
    currentUser = newUser;
    localStorage.setItem('kinotj_current_user', JSON.stringify(newUser));
    
    return { success: true, user: newUser };
}

// Вход пользователя
function loginUser(phone, password) {
    const users = getUsers();
    
    const user = users.find(u => u.phone === phone && u.password === password);
    
    if (!user) {
        return { success: false, error: 'Неверный номер или пароль' };
    }
    
    currentUser = user;
    localStorage.setItem('kinotj_current_user', JSON.stringify(user));
    
    return { success: true, user: user };
}

// Выход пользователя
function logoutUser() {
    currentUser = null;
    localStorage.removeItem('kinotj_current_user');
    updateUIForLoggedOutUser();
}

// Обновить данные пользователя (например, после покупки)
function updateUserData(updatedUser) {
    const users = getUsers();
    const index = users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
        users[index] = updatedUser;
        saveUsers(users);
        localStorage.setItem('kinotj_current_user', JSON.stringify(updatedUser));
        currentUser = updatedUser;
    }
}

// Добавить фильм к купленным
function addPurchasedMovie(movieId) {
    if (!currentUser) return false;
    
    if (!currentUser.purchasedMovies.includes(movieId)) {
        currentUser.purchasedMovies.push(movieId);
        updateUserData(currentUser);
    }
    return true;
}

function normalizeId(value) {
    return String(value);
}

// Проверить куплен ли фильм
function isMoviePurchased(movieId) {
    if (!currentUser) return false;

    const payments = getPayments();
    const hasPayments = payments.some(p =>
        normalizeId(p.userId) === normalizeId(currentUser.id) &&
        normalizeId(p.movieId) === normalizeId(movieId)
    );
    const hasApprovedPayment = payments.some(p =>
        normalizeId(p.userId) === normalizeId(currentUser.id) &&
        normalizeId(p.movieId) === normalizeId(movieId) &&
        p.status === 'approved'
    );

    if (hasPayments) {
        return hasApprovedPayment;
    }

    return (currentUser.purchasedMovies || []).some(id => normalizeId(id) === normalizeId(movieId));
}

// ========================================
// ПЛАТЕЖИ (ЗАЯВКИ)
// ========================================

function getPayments() {
    return JSON.parse(localStorage.getItem('kinotj_payments') || '[]');
}

function savePayments(payments) {
    localStorage.setItem('kinotj_payments', JSON.stringify(payments));
}

function getLatestPayment(userId, movieId) {
    const payments = getPayments().filter(p =>
        normalizeId(p.userId) === normalizeId(userId) &&
        normalizeId(p.movieId) === normalizeId(movieId)
    );
    if (payments.length === 0) return null;
    return payments.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
}

function getCurrentMoviePaymentStatus(userId, movieId) {
    const latestPayment = getLatestPayment(userId, movieId);
    return latestPayment ? latestPayment.status : null;
}

function createPaymentRequest(movie) {
    const payments = getPayments();
    const payment = {
        id: Date.now(),
        userId: currentUser.id,
        userName: currentUser.name,
        movieId: movie.id,
        movieTitle: movie.title,
        amount: movie.price,
        method: selectedPaymentMethod,
        date: new Date().toISOString(),
        status: 'pending',
        receipt: uploadedReceipt
    };

    payments.push(payment);
    savePayments(payments);
    return payment;
}

function resetReceiptState() {
    uploadedReceipt = null;
    const receiptInput = document.getElementById('receiptInput');
    const receiptPreview = document.getElementById('receiptPreview');

    if (receiptInput) {
        receiptInput.value = '';
    }

    if (receiptPreview) {
        receiptPreview.src = '';
        receiptPreview.classList.add('hidden');
    }
}

function handleReceiptInputChange(event) {
    const file = event.target.files && event.target.files[0];
    const receiptPreview = document.getElementById('receiptPreview');

    if (!file) {
        resetReceiptState();
        return;
    }

    if (!file.type.startsWith('image/')) {
        showNotification('Загрузите изображение чека (JPG, PNG, WEBP)', 'error');
        resetReceiptState();
        return;
    }

    if (file.size > 3 * 1024 * 1024) {
        showNotification('Размер чека должен быть до 3 МБ', 'error');
        resetReceiptState();
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        const dataUrl = reader.result;
        uploadedReceipt = {
            name: file.name,
            type: file.type,
            size: file.size,
            dataUrl
        };

        if (receiptPreview) {
            receiptPreview.src = dataUrl;
            receiptPreview.classList.remove('hidden');
        }
    };
    reader.readAsDataURL(file);
}

async function createPaymentRequestOnServer(movie) {
    if (!currentUser || !movie) {
        return { ok: false, error: 'invalid-state' };
    }

    const payload = {
        userId: currentUser.id,
        userName: currentUser.name,
        userPhone: currentUser.phone,
        movieId: movie.id,
        movieTitle: movie.title,
        amount: movie.price,
        method: selectedPaymentMethod || 'manual',
        receipt: uploadedReceipt
    };

    try {
        const response = await fetch('/api/payments/request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        if (!response.ok || !data.ok) {
            return { ok: false, error: data.error || 'request-failed' };
        }

        const localPayments = getPayments();
        const exists = localPayments.some(p => String(p.id) === String(data.payment.id));
        if (!exists) {
            localPayments.push(data.payment);
            savePayments(localPayments);
        }

        return data;
    } catch (error) {
        return { ok: false, error: 'network-error' };
    }
}

// Обновить UI для залогиненного пользователя
function updateUIForLoggedInUser() {
    const authBtn = document.getElementById('authBtn');
    const authBtnText = authBtn.querySelector('.auth-btn-text');
    
    authBtn.classList.add('logged-in');
    authBtnText.textContent = currentUser.name.charAt(0).toUpperCase();
    
    // Обновляем dropdown
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userPhone').textContent = formatPhoneDisplay(currentUser.phone);
    
    const avatarElement = document.getElementById('userAvatar');
    if (currentUser.avatar) {
        avatarElement.style.backgroundImage = `url('${currentUser.avatar}')`;
        avatarElement.style.backgroundSize = 'cover';
        avatarElement.style.backgroundPosition = 'center';
        avatarElement.textContent = '';
    } else {
        avatarElement.style.backgroundImage = 'none';
        avatarElement.textContent = currentUser.name.charAt(0).toUpperCase();
    }
    refreshMovieSections();
}

// Обновить UI для вышедшего пользователя
function updateUIForLoggedOutUser() {
    const authBtn = document.getElementById('authBtn');
    const authBtnText = authBtn.querySelector('.auth-btn-text');
    
    authBtn.classList.remove('logged-in');
    authBtnText.textContent = 'Войти';
    
    // Скрываем dropdown
    document.getElementById('userDropdown').classList.remove('active');
    refreshMovieSections();
}

// Форматирование номера телефона для отображения
function formatPhoneDisplay(phone) {
    // phone format: XXXXXXXXX -> +992 XX XXX XXXX
    const cleaned = phone.replace(/\D/g, '');
    return `+992 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5)}`;
}

// Форматирование ввода номера телефона
function formatPhoneInput(value) {
    const cleaned = value.replace(/\D/g, '');
    let formatted = '';
    
    if (cleaned.length > 0) {
        formatted = cleaned.slice(0, 2);
    }
    if (cleaned.length > 2) {
        formatted += ' ' + cleaned.slice(2, 5);
    }
    if (cleaned.length > 5) {
        formatted += ' ' + cleaned.slice(5, 9);
    }
    
    return formatted;
}

// Валидация номера телефона
function validatePhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 9;
}

// Валидация пароля
function validatePassword(password) {
    return password.length >= 6;
}

// ========================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ========================================

document.addEventListener('DOMContentLoaded', async () => {
    if (window.kinotjDbSyncReady) {
        try {
            await window.kinotjDbSyncReady;
        } catch (error) {
            console.warn('DB sync bootstrap failed, using localStorage fallback.');
        }
    }

    initApp();

    setInterval(() => {
        syncUserAccessFromServer();
    }, 8000);
});

function initApp() {
    // Инициализация фильмов из localStorage
    initMovies();
    
    // Инициализация системы пользователей
    initUserSystem();
    syncUserAccessFromServer();
    
    // Загрузка Hero-секции
    loadHeroSection();
    
    // Загрузка категорий фильмов
    loadMoviesByCategory('popular', 'popularMovies');
    loadMoviesByCategory('new', 'newMovies');
    loadMoviesByCategory('recommended', 'recommendedMovies');
    
    // Инициализация обработчиков событий
    initEventListeners();
    
    // Инициализация обработчиков авторизации
    initAuthEventListeners();
    
    // Анимация появления элементов при прокрутке
    observeElements();
}

// ========================================
// ЗАГРУЗКА HERO-СЕКЦИИ
// ========================================

function loadHeroSection() {
    // Выбираем случайный фильм для Hero
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    currentMovie = randomMovie;
    
    document.getElementById('heroTitle').textContent = randomMovie.title;
    document.getElementById('heroDescription').textContent = randomMovie.description;
    document.getElementById('heroYear').textContent = randomMovie.year;
    document.getElementById('heroGenre').textContent = randomMovie.genre;
    document.getElementById('heroRating').textContent = `⭐ ${randomMovie.rating}`;
    
    // Устанавливаем фон
    const heroBackground = document.querySelector('.hero-background');
    heroBackground.style.backgroundImage = `
        linear-gradient(90deg, rgba(15, 15, 15, 0.9) 0%, rgba(15, 15, 15, 0.3) 50%, rgba(15, 15, 15, 0.9) 100%),
        url('${randomMovie.poster}')
    `;
}

// ========================================
// ЗАГРУЗКА ФИЛЬМОВ ПО КАТЕГОРИЯМ
// ========================================

function loadMoviesByCategory(category, containerId) {
    const container = document.getElementById(containerId);
    const filteredMovies = movies.filter(movie => movie.category.includes(category));
    
    container.innerHTML = '';
    
    filteredMovies.forEach((movie, index) => {
        const movieCard = createMovieCard(movie, index);
        container.appendChild(movieCard);
    });
}

function refreshMovieSections() {
    loadMoviesByCategory('popular', 'popularMovies');
    loadMoviesByCategory('new', 'newMovies');
    loadMoviesByCategory('recommended', 'recommendedMovies');
}

function getMoviePaymentBadge(movie) {
    if (!currentUser) {
        return { text: 'Купить', className: 'buy' };
    }

    const paymentStatus = getCurrentMoviePaymentStatus(currentUser.id, movie.id);
    if (paymentStatus === 'pending') {
        return { text: 'На проверке', className: 'pending' };
    }

    if (paymentStatus === 'approved' || isMoviePurchased(movie.id)) {
        return { text: 'Доступ', className: 'access' };
    }

    return { text: 'Купить', className: 'buy' };
}

// ========================================
// СОЗДАНИЕ КАРТОЧКИ ФИЛЬМА
// ========================================

function createMovieCard(movie, index) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Создаем заглушку на случай ошибки загрузки изображения
    const fallbackPoster = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='450'%3E%3Crect fill='%231a1a2e' width='300' height='450'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' fill='%23ffffff' font-size='18' font-family='Arial'%3E${encodeURIComponent(movie.title)}%3C/text%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' fill='%23ff3d00' font-size='14' font-family='Arial'%3E${movie.year}%3C/text%3E%3C/svg%3E`;
    const paymentBadge = getMoviePaymentBadge(movie);
    
    card.innerHTML = `
        <div class="movie-poster-wrapper">
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" loading="lazy" onerror="this.src='${fallbackPoster}'">
            <div class="movie-overlay">
                <span class="play-icon">▶</span>
            </div>
            <div class="movie-rating-badge">⭐ ${movie.rating}</div>
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span class="movie-year">${movie.year}</span>
                <span class="movie-genre">${movie.genre}</span>
            </div>
            <div class="movie-price-row">
                <div class="movie-price">${movie.price} сомони</div>
                <span class="movie-payment-badge movie-payment-badge--${paymentBadge.className}">${paymentBadge.text}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openMovieModal(movie));
    
    return card;
}

// ========================================
// МОДАЛЬНОЕ ОКНО ФИЛЬМА
// ========================================

function openMovieModal(movie) {
    currentMovie = movie;
    
    const modal = document.getElementById('movieModal');
    
    document.getElementById('modalPoster').src = movie.poster;
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalYear').textContent = movie.year;
    document.getElementById('modalGenre').textContent = movie.genre;
    document.getElementById('modalDuration').textContent = `${movie.duration} мин`;
    document.getElementById('modalRating').textContent = `⭐ ${movie.rating}`;
    document.getElementById('modalDescription').textContent = movie.description;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMovieModal() {
    const modal = document.getElementById('movieModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// ВИДЕО ПЛЕЕР
// ========================================

// Проверка является ли ссылка YouTube
function isYouTubeUrl(url) {
    return url && (url.includes('youtube.com') || url.includes('youtu.be'));
}

// Получить YouTube Video ID из ссылки
function getYouTubeVideoId(url) {
    if (!url) return null;
    
    // youtube.com/watch?v=VIDEO_ID
    let match = url.match(/[?&]v=([^&]+)/);
    if (match) return match[1];
    
    // youtu.be/VIDEO_ID
    match = url.match(/youtu\.be\/([^?&]+)/);
    if (match) return match[1];
    
    // youtube.com/embed/VIDEO_ID
    match = url.match(/embed\/([^?&]+)/);
    if (match) return match[1];
    
    return null;
}

// Получить ссылку для просмотра YouTube
function getYouTubeWatchUrl(url) {
    const videoId = getYouTubeVideoId(url);
    if (videoId) {
        return `https://www.youtube.com/watch?v=${videoId}`;
    }
    return url;
}

function openVideoPlayer(videoSrc) {
    currentVideoSrc = videoSrc;
    
    // Для YouTube - открываем в новой вкладке (надёжнее, работает для всех видео)
    if (isYouTubeUrl(videoSrc)) {
        const watchUrl = getYouTubeWatchUrl(videoSrc);
        window.open(watchUrl, '_blank');
        return;
    }
    
    // Для локального видео - показываем плеер
    const playerModal = document.getElementById('playerModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoWrapper = document.querySelector('.video-wrapper');
    const videoSource = document.getElementById('videoSource');
    
    // Показываем HTML5 плеер
    videoPlayer.style.display = 'block';
    
    // Скрываем YouTube iframe если есть
    const youtubeIframe = document.getElementById('youtubePlayer');
    if (youtubeIframe) {
        youtubeIframe.style.display = 'none';
        youtubeIframe.src = '';
    }
    
    // Показываем контролы
    document.getElementById('videoControls').style.display = 'flex';
    
    videoSource.src = videoSrc;
    videoPlayer.load();
    
    playerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Автоматически запускаем видео
    videoPlayer.play();
    
    // Показываем контролы при движении мыши
    let hideControlsTimeout;
    
    videoWrapper.addEventListener('mousemove', () => {
        document.getElementById('videoControls').classList.add('show');
        clearTimeout(hideControlsTimeout);
        hideControlsTimeout = setTimeout(() => {
            if (!videoPlayer.paused) {
                document.getElementById('videoControls').classList.remove('show');
            }
        }, 3000);
    });
}

function closeVideoPlayer() {
    const playerModal = document.getElementById('playerModal');
    const videoPlayer = document.getElementById('videoPlayer');
    
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    
    // Останавливаем YouTube если есть
    const youtubeIframe = document.getElementById('youtubePlayer');
    if (youtubeIframe) {
        youtubeIframe.src = '';
    }
    
    playerModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// ПЛАТЕЖНАЯ СИСТЕМА
// ========================================

function openPaymentModal(movie) {
    // Проверяем авторизован ли пользователь
    if (!currentUser) {
        openAuthModal();
        return;
    }
    
    // Проверяем куплен ли уже фильм
    if (isMoviePurchased(movie.id)) {
        openVideoPlayer(movie.video);
        return;
    }

    const paymentStatus = getCurrentMoviePaymentStatus(currentUser.id, movie.id);
    if (paymentStatus === 'approved') {
        openVideoPlayer(movie.video);
        return;
    }
    if (paymentStatus === 'pending') {
        showNotification('Платёж на проверке. Доступ появится после подтверждения.', 'info');
        return;
    }
    
    currentMovie = movie;
    
    const paymentModal = document.getElementById('paymentModal');
    document.getElementById('paymentMovieName').textContent = movie.title;

    document.querySelectorAll('.payment-method').forEach(btn => btn.classList.remove('active'));
    selectedPaymentMethod = null;
    resetReceiptState();
    paymentStep = 'choose';
    updatePaymentButtonState();
    updatePaymentDetailsVisibility(false);
    
    paymentModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePaymentModal() {
    const paymentModal = document.getElementById('paymentModal');
    paymentModal.classList.remove('active');
    resetReceiptState();
    document.body.style.overflow = '';
}

async function processPayment() {
    const payBtn = document.getElementById('payBtn');
    if (paymentStep === 'choose') {
        updatePaymentDetailsVisibility(true);
        paymentStep = 'confirm';
        updatePaymentButtonState();
        return;
    }

    payBtn.innerHTML = '<span class="pay-icon">⏳</span> Обработка...';
    payBtn.disabled = true;

    if (!currentUser || !currentMovie) {
        payBtn.innerHTML = '<span class="pay-icon">✅</span> Я оплатил';
        payBtn.disabled = false;
        return;
    }

    if (!uploadedReceipt || !uploadedReceipt.dataUrl) {
        payBtn.innerHTML = '<span class="pay-icon">✅</span> Я оплатил';
        payBtn.disabled = false;
        showNotification('Сначала загрузите чек оплаты.', 'error');
        return;
    }

    const paymentStatus = getCurrentMoviePaymentStatus(currentUser.id, currentMovie.id);
    if (paymentStatus === 'pending') {
        payBtn.innerHTML = '<span class="pay-icon">✅</span> Я оплатил';
        payBtn.disabled = false;
        showNotification('Платёж уже на проверке.', 'info');
        return;
    }
    
    const result = await createPaymentRequestOnServer(currentMovie);

    if (!result.ok) {
        createPaymentRequest(currentMovie);
        showNotification('Сервер недоступен. Заявка сохранена локально.', 'info');
    }

    closePaymentModal();
    showSuccessModal({
        title: 'Оплата на проверке',
        text: 'Заявка отправлена в Telegram. Доступ появится после одобрения.',
        buttonText: 'Понятно',
        action: 'close'
    });
    refreshMovieSections();
    paymentStep = 'choose';
    updatePaymentButtonState();
    payBtn.disabled = false;
}

function showSuccessModal(options = {}) {
    const successModal = document.getElementById('successModal');
    const successTitle = document.getElementById('successTitle');
    const successText = document.getElementById('successText');
    const successBtn = document.getElementById('startWatchingBtn');

    const {
        title = 'Оплата успешна!',
        text = 'Приятного просмотра',
        buttonText = 'Смотреть фильм',
        action = 'watch'
    } = options;

    successAction = action;
    successTitle.textContent = title;
    successText.textContent = text;
    successBtn.textContent = buttonText;

    successModal.classList.add('active');
}

function closeSuccessModal() {
    const successModal = document.getElementById('successModal');
    successModal.classList.remove('active');
    document.body.style.overflow = '';
}

function startWatchingAfterPayment() {
    if (successAction === 'watch') {
        closeSuccessModal();
        if (currentMovie) {
            openVideoPlayer(currentMovie.video);
        }
        return;
    }

    closeSuccessModal();
    showNotification('Оплата на проверке. Доступ появится после подтверждения.', 'info');
}

// Выбор метода оплаты
function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.payment-method').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-method="${method}"]`).classList.add('active');
    paymentStep = 'choose';
    updatePaymentDetailsVisibility(false);
    updatePaymentButtonState();
}

function updatePaymentDetailsVisibility(show) {
    const details = document.getElementById('paymentDetails');
    if (!details) return;
    if (show) {
        details.classList.remove('hidden');
    } else {
        details.classList.add('hidden');
    }
}

function updatePaymentButtonState() {
    const payBtn = document.getElementById('payBtn');
    if (!payBtn) return;

    if (!selectedPaymentMethod) {
        payBtn.disabled = true;
        payBtn.innerHTML = '<span class="pay-icon">🧾</span> Выберите способ оплаты';
        return;
    }

    payBtn.disabled = false;

    if (paymentStep === 'confirm') {
        payBtn.innerHTML = '<span class="pay-icon">✅</span> Я оплатил';
    } else {
        payBtn.innerHTML = '<span class="pay-icon">💳</span> Оплатить';
    }
}

// Управление воспроизведением
function togglePlayPause() {
    const videoPlayer = document.getElementById('videoPlayer');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    
    if (videoPlayer.paused) {
        videoPlayer.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        videoPlayer.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
}

// Обновление прогресса
function updateProgress() {
    const videoPlayer = document.getElementById('videoPlayer');
    const progressFilled = document.getElementById('progressFilled');
    const timeDisplay = document.getElementById('timeDisplay');
    
    const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    progressFilled.style.width = `${percent}%`;
    
    const currentMinutes = Math.floor(videoPlayer.currentTime / 60);
    const currentSeconds = Math.floor(videoPlayer.currentTime % 60);
    const durationMinutes = Math.floor(videoPlayer.duration / 60);
    const durationSeconds = Math.floor(videoPlayer.duration % 60);
    
    timeDisplay.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')} / ${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
}

// Перемотка видео
function seekVideo(e) {
    const progressBar = document.getElementById('progressBar');
    const videoPlayer = document.getElementById('videoPlayer');
    
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    videoPlayer.currentTime = percent * videoPlayer.duration;
}

// Управление громкостью
function updateVolume() {
    const videoPlayer = document.getElementById('videoPlayer');
    const volumeSlider = document.getElementById('volumeSlider');
    
    videoPlayer.volume = volumeSlider.value / 100;
}

function toggleMute() {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.muted = !videoPlayer.muted;
}

// Полноэкранный режим
function toggleFullscreen() {
    const videoWrapper = document.querySelector('.video-wrapper');
    
    if (!document.fullscreenElement) {
        videoWrapper.requestFullscreen().catch(err => {
            console.log(`Ошибка при попытке включить полноэкранный режим: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// ========================================
// ПОИСК
// ========================================

function openSearch() {
    const searchPanel = document.getElementById('searchPanel');
    const searchInput = document.getElementById('searchInput');
    
    searchPanel.classList.add('active');
    searchInput.focus();
}

function closeSearch() {
    const searchPanel = document.getElementById('searchPanel');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    searchPanel.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
}

function performSearch(query) {
    const searchResults = document.getElementById('searchResults');
    
    if (query.trim() === '') {
        searchResults.innerHTML = '';
        return;
    }
    
    const results = movies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.toLowerCase().includes(query.toLowerCase()) ||
        movie.description.toLowerCase().includes(query.toLowerCase())
    );
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 20px;">Ничего не найдено</p>';
        return;
    }
    
    searchResults.innerHTML = '';
    
    results.forEach(movie => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        
        resultItem.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="search-result-poster">
            <div class="search-result-info">
                <h3>${movie.title}</h3>
                <p>${movie.year} • ${movie.genre} • ⭐ ${movie.rating}</p>
            </div>
        `;
        
        resultItem.addEventListener('click', () => {
            closeSearch();
            openMovieModal(movie);
        });
        
        searchResults.appendChild(resultItem);
    });
}

// ========================================
// НАВИГАЦИЯ
// ========================================

function handleNavigation(page) {
    // Получаем контейнеры секций
    const popularSection = document.getElementById('popularMovies').parentElement;
    const newSection = document.getElementById('newMovies').parentElement;
    const recommendedSection = document.getElementById('recommendedMovies').parentElement;
    
    // Логика для разных страниц
    switch(page) {
        case 'main':
            // Главная - показываем все секции
            popularSection.style.display = 'block';
            newSection.style.display = 'block';
            recommendedSection.style.display = 'block';
            
            // Загружаем все категории
            loadMoviesByCategory('popular', 'popularMovies');
            loadMoviesByCategory('new', 'newMovies');
            loadMoviesByCategory('recommended', 'recommendedMovies');
            
            // Меняем заголовки обратно
            popularSection.querySelector('.section-title').textContent = 'Популярные';
            newSection.querySelector('.section-title').textContent = 'Новинки';
            recommendedSection.querySelector('.section-title').textContent = 'Рекомендуем';
            break;
            
        case 'cinema':
            // Онлайн-кинотеатр - показываем все фильмы с тремя секциями
            popularSection.style.display = 'block';
            newSection.style.display = 'block';
            recommendedSection.style.display = 'block';
            
            popularSection.querySelector('.section-title').textContent = 'Популярные фильмы';
            newSection.querySelector('.section-title').textContent = 'Новые выпуски';
            recommendedSection.querySelector('.section-title').textContent = 'Рекомендованные';
            
            loadMoviesByCategory('popular', 'popularMovies');
            loadMoviesByCategory('new', 'newMovies');
            loadMoviesByCategory('recommended', 'recommendedMovies');
            break;
            
        case 'movies':
            // Фильмы - показываем все фильмы в одной секции
            popularSection.style.display = 'block';
            newSection.style.display = 'none';
            recommendedSection.style.display = 'none';
            
            popularSection.querySelector('.section-title').textContent = 'Все фильмы';
            loadAllMovies('popularMovies');
            break;
            
        case 'series':
            // Сериалы
            popularSection.style.display = 'block';
            newSection.style.display = 'none';
            recommendedSection.style.display = 'none';
            
            popularSection.querySelector('.section-title').textContent = 'Сериалы';
            showSeriesPlaceholder('popularMovies');
            break;
            
        case 'channels':
            // Телеканалы
            popularSection.style.display = 'block';
            newSection.style.display = 'none';
            recommendedSection.style.display = 'none';
            
            popularSection.querySelector('.section-title').textContent = 'Телеканалы';
            showChannelsPlaceholder('popularMovies');
            break;
            
        case 'sports':
            // Спорт
            popularSection.style.display = 'block';
            newSection.style.display = 'none';
            recommendedSection.style.display = 'none';
            
            popularSection.querySelector('.section-title').textContent = 'Спорт';
            showSportsPlaceholder('popularMovies');
            break;
            
        case 'tickets':
            // Билеты в кино
            popularSection.style.display = 'block';
            newSection.style.display = 'none';
            recommendedSection.style.display = 'none';
            
            popularSection.querySelector('.section-title').textContent = 'Билеты в кино';
            showTicketsPlaceholder('popularMovies');
            break;
            
        case 'media':
            // Медиа
            popularSection.style.display = 'block';
            newSection.style.display = 'none';
            recommendedSection.style.display = 'none';
            
            popularSection.querySelector('.section-title').textContent = 'Медиа';
            showMediaPlaceholder('popularMovies');
            break;
            
        case 'new':
            // Новинки - показываем только новые фильмы
            popularSection.style.display = 'block';
            newSection.style.display = 'none';
            recommendedSection.style.display = 'none';
            
            popularSection.querySelector('.section-title').textContent = 'Новинки 2024';
            loadMoviesByCategory('new', 'popularMovies');
            break;
    }
    
    // Прокручиваем к контенту
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Навигация по боковой панели
function handleSidebarNavigation(category, event) {
    event.preventDefault();
    
    // Обновляем активный элемент боковой панели
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.sidebar-item').classList.add('active');
    
    // Закрываем мобильную боковую панель
    const sidebar = document.getElementById('sidebar');
    const sidebarWrapper = document.querySelector('.sidebar-wrapper');
    if (window.innerWidth <= 1024) {
        sidebar.style.transform = 'translateX(-100%)';
        sidebarWrapper.classList.remove('active');
    }
    
    // Вызываем обычную навигацию
    handleNavigation(category);
}

// Открыть боковую панель
function loadAllMovies(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    movies.forEach((movie, index) => {
        const movieCard = createMovieCard(movie, index);
        container.appendChild(movieCard);
    });
}

// Заглушка для сериалов
function showSeriesPlaceholder(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
            <div style="font-size: 80px; margin-bottom: 20px;">📺</div>
            <h3 style="font-size: 28px; margin-bottom: 15px; color: #fff;">Раздел в разработке</h3>
            <p style="color: #b3b3b3; font-size: 18px; max-width: 500px; margin: 0 auto;">
                Скоро здесь появятся лучшие сериалы! Пока вы можете посмотреть наши фильмы.
            </p>
            <button onclick="handleNavigation('movies')" class="btn btn-primary" style="margin-top: 30px;">
                Смотреть фильмы
            </button>
        </div>
    `;
}

// Заглушка для телеканалов
function showChannelsPlaceholder(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
            <div style="font-size: 80px; margin-bottom: 20px;">📻</div>
            <h3 style="font-size: 28px; margin-bottom: 15px; color: #fff;">Телеканалы</h3>
            <p style="color: #b3b3b3; font-size: 18px; max-width: 500px; margin: 0 auto;">
                Прямые трансляции популярных телеканалов скоро будут доступны на нашей платформе.
            </p>
            <button onclick="handleNavigation('main')" class="btn btn-primary" style="margin-top: 30px;">
                Вернуться на главную
            </button>
        </div>
    `;
}

// Заглушка для спорта
function showSportsPlaceholder(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
            <div style="font-size: 80px; margin-bottom: 20px;">⚽</div>
            <h3 style="font-size: 28px; margin-bottom: 15px; color: #fff;">Спортивные трансляции</h3>
            <p style="color: #b3b3b3; font-size: 18px; max-width: 500px; margin: 0 auto;">
                Следите за главными спортивными событиями в режиме реального времени. Раздел находится в разработке.
            </p>
            <button onclick="handleNavigation('main')" class="btn btn-primary" style="margin-top: 30px;">
                Вернуться на главную
            </button>
        </div>
    `;
}

// Заглушка для билетов в кино
function showTicketsPlaceholder(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
            <div style="font-size: 80px; margin-bottom: 20px;">🎫</div>
            <h3 style="font-size: 28px; margin-bottom: 15px; color: #fff;">Билеты в кино</h3>
            <p style="color: #b3b3b3; font-size: 18px; max-width: 500px; margin: 0 auto;">
                Покупайте билеты в кинотеатры вашего города прямо в приложении. Скоро эта функция будет доступна.
            </p>
            <button onclick="handleNavigation('main')" class="btn btn-primary" style="margin-top: 30px;">
                Вернуться на главную
            </button>
        </div>
    `;
}

// Заглушка для медиа
function showMediaPlaceholder(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
            <div style="font-size: 80px; margin-bottom: 20px;">📱</div>
            <h3 style="font-size: 28px; margin-bottom: 15px; color: #fff;">Медиа контент</h3>
            <p style="color: #b3b3b3; font-size: 18px; max-width: 500px; margin: 0 auto;">
                Интересные статьи, новости и видео о кинематографе. Раздел в разработке.
            </p>
            <button onclick="handleNavigation('main')" class="btn btn-primary" style="margin-top: 30px;">
                Вернуться на главную
            </button>
        </div>
    `;
}

// ========================================
// ОБРАБОТЧИКИ СОБЫТИЙ
// ========================================

function initEventListeners() {
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Hero кнопки - теперь открывают окно оплаты
    document.getElementById('heroWatchBtn').addEventListener('click', () => {
        if (currentMovie) {
            openPaymentModal(currentMovie);
        }
    });
    
    document.getElementById('heroInfoBtn').addEventListener('click', () => {
        if (currentMovie) {
            openMovieModal(currentMovie);
        }
    });
    
    // Поиск
    document.getElementById('searchClose').addEventListener('click', closeSearch);
    document.getElementById('searchInput').addEventListener('input', (e) => {
        performSearch(e.target.value);
        const searchPanel = document.getElementById('searchPanel');
        if (e.target.value.trim()) {
            searchPanel.classList.add('active');
        } else {
            searchPanel.classList.remove('active');
        }
    });
    
    // Burger menu - toggle sidebar
    document.getElementById('burgerMenu').addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        const burgerMenu = document.getElementById('burgerMenu');
        
        sidebar.style.transform = sidebar.style.transform === 'translateX(-100%)' ? 'translateX(0)' : 'translateX(-100%)';
        sidebarOverlay.classList.toggle('active');
        sidebarOverlay.style.display = sidebarOverlay.classList.contains('active') ? 'block' : 'none';
        burgerMenu.classList.toggle('active');
    });
    
    // Sidebar close button
    document.getElementById('sidebarClose').addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        const burgerMenu = document.getElementById('burgerMenu');
        
        sidebar.style.transform = 'translateX(-100%)';
        sidebarOverlay.classList.remove('active');
        sidebarOverlay.style.display = 'none';
        burgerMenu.classList.remove('active');
    });
    
    // Sidebar overlay click to close
    document.getElementById('sidebarOverlay').addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        const burgerMenu = document.getElementById('burgerMenu');
        
        sidebar.style.transform = 'translateX(-100%)';
        sidebarOverlay.classList.remove('active');
        sidebarOverlay.style.display = 'none';
        burgerMenu.classList.remove('active');
    });
    
    // Modal закрытие
    document.getElementById('modalClose').addEventListener('click', closeMovieModal);
    document.getElementById('modalOverlay').addEventListener('click', closeMovieModal);
    
    // Modal кнопки - теперь открывают окно оплаты
    document.getElementById('modalWatchBtn').addEventListener('click', () => {
        if (currentMovie) {
            closeMovieModal();
            openPaymentModal(currentMovie);
        }
    });
    
    document.getElementById('modalTrailerBtn').addEventListener('click', () => {
        if (currentMovie) {
            closeMovieModal();
            openPaymentModal(currentMovie);
        }
    });
    
    // Player controls
    document.getElementById('playerClose').addEventListener('click', closeVideoPlayer);
    document.getElementById('playerOverlay').addEventListener('click', closeVideoPlayer);
    document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);
    document.getElementById('progressBar').addEventListener('click', seekVideo);
    document.getElementById('volumeSlider').addEventListener('input', updateVolume);
    document.getElementById('volumeBtn').addEventListener('click', toggleMute);
    document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);
    
    // Video events
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.addEventListener('timeupdate', updateProgress);
    videoPlayer.addEventListener('click', togglePlayPause);
    
    // Payment Modal events
    document.getElementById('paymentClose').addEventListener('click', closePaymentModal);
    document.getElementById('paymentOverlay').addEventListener('click', closePaymentModal);
    document.getElementById('payBtn').addEventListener('click', processPayment);
    const receiptInput = document.getElementById('receiptInput');
    if (receiptInput) {
        receiptInput.addEventListener('change', handleReceiptInputChange);
    }
    
    // Payment methods
    document.querySelectorAll('.payment-method').forEach(btn => {
        btn.addEventListener('click', () => {
            selectPaymentMethod(btn.getAttribute('data-method'));
        });
    });
    
    // Success Modal events
    document.getElementById('startWatchingBtn').addEventListener('click', startWatchingAfterPayment);
    document.getElementById('successOverlay').addEventListener('click', closeSuccessModal);
    
    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('successModal').classList.contains('active')) {
                closeSuccessModal();
            } else if (document.getElementById('paymentModal').classList.contains('active')) {
                closePaymentModal();
            } else if (document.getElementById('playerModal').classList.contains('active')) {
                closeVideoPlayer();
            } else if (document.getElementById('movieModal').classList.contains('active')) {
                closeMovieModal();
            } else if (document.getElementById('searchPanel').classList.contains('active')) {
                closeSearch();
            }
        }
        
        // Управление плеером с клавиатуры
        if (document.getElementById('playerModal').classList.contains('active')) {
            if (e.key === ' ') {
                e.preventDefault();
                togglePlayPause();
            }
        }
    });
}

// ========================================
// АНИМАЦИЯ ПОЯВЛЕНИЯ ЭЛЕМЕНТОВ
// ========================================

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Наблюдаем за секциями
    document.querySelectorAll('.movies-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ========================================
// УТИЛИТЫ
// ========================================

// Функция для добавления новых фильмов динамически
function addMovie(movie) {
    movies.push(movie);
    // Перезагружаем категории
    loadMoviesByCategory('popular', 'popularMovies');
    loadMoviesByCategory('new', 'newMovies');
    loadMoviesByCategory('recommended', 'recommendedMovies');
}

// Экспорт для возможного использования
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { movies, addMovie };
}

// ========================================
// АВТОРИЗАЦИЯ - МОДАЛЬНЫЕ ОКНА
// ========================================

function openAuthModal() {
    const authModal = document.getElementById('authModal');
    authModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Показываем форму входа по умолчанию
    showLoginForm();
}

function closeAuthModal() {
    const authModal = document.getElementById('authModal');
    authModal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Очищаем формы
    clearAuthForms();
}

function showLoginForm() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    
    document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector('[data-tab="login"]').classList.add('active');
}

function showRegisterForm() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
    
    document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector('[data-tab="register"]').classList.add('active');
}

function clearAuthForms() {
    // Очищаем поля входа
    document.getElementById('loginPhone').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginPhoneError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';
    
    // Очищаем поля регистрации
    document.getElementById('registerName').value = '';
    document.getElementById('registerPhone').value = '';
    document.getElementById('registerPassword').value = '';
    document.getElementById('registerPasswordConfirm').value = '';
    document.getElementById('registerNameError').textContent = '';
    document.getElementById('registerPhoneError').textContent = '';
    document.getElementById('registerPasswordError').textContent = '';
    document.getElementById('registerPasswordConfirmError').textContent = '';
}

// Обработка входа
function handleLogin() {
    const phone = document.getElementById('loginPhone').value.replace(/\D/g, '');
    const password = document.getElementById('loginPassword').value;
    
    let isValid = true;
    
    // Валидация телефона
    if (!validatePhone(phone)) {
        document.getElementById('loginPhoneError').textContent = 'Введите корректный номер телефона';
        isValid = false;
    } else {
        document.getElementById('loginPhoneError').textContent = '';
    }
    
    // Валидация пароля
    if (!password) {
        document.getElementById('loginPasswordError').textContent = 'Введите пароль';
        isValid = false;
    } else {
        document.getElementById('loginPasswordError').textContent = '';
    }
    
    if (!isValid) return;
    
    // Попытка входа
    const result = loginUser(phone, password);
    
    if (result.success) {
        updateUIForLoggedInUser();
        closeAuthModal();
        showNotification('Добро пожаловать, ' + result.user.name + '!', 'success');
    } else {
        document.getElementById('loginPasswordError').textContent = result.error;
    }
}

// Обработка регистрации
function handleRegister() {
    const name = document.getElementById('registerName').value.trim();
    const phone = document.getElementById('registerPhone').value.replace(/\D/g, '');
    const password = document.getElementById('registerPassword').value;
    const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
    
    let isValid = true;
    
    // Валидация имени
    if (!name || name.length < 2) {
        document.getElementById('registerNameError').textContent = 'Введите имя (минимум 2 символа)';
        isValid = false;
    } else {
        document.getElementById('registerNameError').textContent = '';
    }
    
    // Валидация телефона
    if (!validatePhone(phone)) {
        document.getElementById('registerPhoneError').textContent = 'Введите корректный номер телефона';
        isValid = false;
    } else {
        document.getElementById('registerPhoneError').textContent = '';
    }
    
    // Валидация пароля
    if (!validatePassword(password)) {
        document.getElementById('registerPasswordError').textContent = 'Пароль должен содержать минимум 6 символов';
        isValid = false;
    } else {
        document.getElementById('registerPasswordError').textContent = '';
    }
    
    // Валидация подтверждения пароля
    if (password !== passwordConfirm) {
        document.getElementById('registerPasswordConfirmError').textContent = 'Пароли не совпадают';
        isValid = false;
    } else {
        document.getElementById('registerPasswordConfirmError').textContent = '';
    }
    
    if (!isValid) return;
    
    // Попытка регистрации
    const result = registerUser(name, phone, password);
    
    if (result.success) {
        updateUIForLoggedInUser();
        closeAuthModal();
        showNotification('Регистрация успешна! Добро пожаловать, ' + result.user.name + '!', 'success');
    } else {
        document.getElementById('registerPhoneError').textContent = result.error;
    }
}

// Показать уведомление
function showNotification(message, type = 'info') {
    // Удаляем старое уведомление если есть
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
        <span class="notification-message">${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Анимация появления
    setTimeout(() => notification.classList.add('active'), 10);
    
    // Автоматическое скрытие
    setTimeout(() => {
        notification.classList.remove('active');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Мои фильмы
function openMyMoviesModal() {
    if (!currentUser) {
        openAuthModal();
        return;
    }
    
    const modal = document.getElementById('myMoviesModal');
    const grid = document.getElementById('myMoviesGrid');
    const empty = document.getElementById('myMoviesEmpty');
    
    grid.innerHTML = '';
    
    const purchasedMovies = movies.filter(m => currentUser.purchasedMovies.includes(m.id));
    
    if (purchasedMovies.length === 0) {
        empty.classList.add('active');
        grid.style.display = 'none';
    } else {
        empty.classList.remove('active');
        grid.style.display = 'grid';
        
        purchasedMovies.forEach((movie, index) => {
            const card = createMovieCard(movie, index);
            grid.appendChild(card);
        });
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMyMoviesModal() {
    const modal = document.getElementById('myMoviesModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// НАСТРОЙКИ ПРОФИЛЯ
// ========================================

function openSettingsModal() {
    if (!currentUser) {
        openAuthModal();
        return;
    }
    
    const modal = document.getElementById('settingsModal');
    const nameInput = document.getElementById('settingsName');
    const phoneInput = document.getElementById('settingsPhone');
    const avatarImg = document.getElementById('settingsAvatar');
    
    // Заполняем форму текущими данными
    nameInput.value = currentUser.name || '';
    phoneInput.value = currentUser.phone || '';
    
    // Показываем аватар
    if (currentUser.avatar) {
        avatarImg.src = currentUser.avatar;
    } else {
        avatarImg.src = generateAvatarDataUrl(currentUser.name.charAt(0).toUpperCase());
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSettingsModal() {
    const modal = document.getElementById('settingsModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Загрузка аватара
function handleAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Проверяем тип файла
    if (!file.type.startsWith('image/')) {
        showNotification('Пожалуйста, загрузите изображение', 'error');
        return;
    }
    
    // Проверяем размер (максимум 1MB)
    if (file.size > 1024 * 1024) {
        showNotification('Размер изображения не должен превышать 1 МБ', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const dataUrl = e.target.result;
        document.getElementById('settingsAvatar').src = dataUrl;
        document.getElementById('settingsAvatar')._uploadedData = dataUrl;
    };
    reader.readAsDataURL(file);
}

// Обработка формы настроек
async function handleSettingsSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('settingsName');
    const phoneInput = document.getElementById('settingsPhone');
    const avatarImg = document.getElementById('settingsAvatar');
    
    const name = nameInput.value.trim();
    const phone = phoneInput.value.replace(/\D/g, '');
    const avatar = avatarImg._uploadedData || (currentUser.avatar || '');
    
    // Валидация
    if (!name || name.length < 2) {
        showNotification('Введите имя (минимум 2 символа)', 'error');
        return;
    }
    
    if (!validatePhone(phone)) {
        showNotification('Введите корректный номер телефона', 'error');
        return;
    }
    
    // Отправляем обновления на сервер
    const result = await updateUserProfileOnServer(name, phone, avatar);
    
    if (result.ok) {
        showNotification('Профиль успешно обновлен!', 'success');
        closeSettingsModal();
    } else {
        showNotification('Ошибка при обновлении профиля: ' + (result.error || 'Unknown error'), 'error');
    }
}

// Генерируем аватар с первой буквой имени
function generateAvatarDataUrl(letter) {
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    
    const ctx = canvas.getContext('2d');
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
    const bgColor = colors[Math.floor(Math.random() * colors.length)];
    
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 100, 100);
    
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 50px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(letter, 50, 50);
    
    return canvas.toDataURL();
}

// Toggle password visibility
function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

// ========================================
// ОБРАБОТЧИКИ АВТОРИЗАЦИИ
// ========================================

function initAuthEventListeners() {
    // Auth button click
    document.getElementById('authBtn').addEventListener('click', () => {
        if (currentUser) {
            // Toggle dropdown
            const dropdown = document.getElementById('userDropdown');
            dropdown.classList.toggle('active');
        } else {
            openAuthModal();
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const userMenu = document.getElementById('userMenu');
        const dropdown = document.getElementById('userDropdown');
        if (!userMenu.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
    
    // Auth modal close
    document.getElementById('authClose').addEventListener('click', closeAuthModal);
    document.getElementById('authOverlay').addEventListener('click', closeAuthModal);
    
    // Auth tabs
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.dataset.tab === 'login') {
                showLoginForm();
            } else {
                showRegisterForm();
            }
        });
    });
    
    // Switch forms
    document.getElementById('switchToRegister').addEventListener('click', (e) => {
        e.preventDefault();
        showRegisterForm();
    });
    
    document.getElementById('switchToLogin').addEventListener('click', (e) => {
        e.preventDefault();
        showLoginForm();
    });
    
    // Login button
    document.getElementById('loginBtn').addEventListener('click', handleLogin);
    
    // Register button
    document.getElementById('registerBtn').addEventListener('click', handleRegister);
    
    // Phone input formatting
    ['loginPhone', 'registerPhone'].forEach(id => {
        document.getElementById(id).addEventListener('input', (e) => {
            e.target.value = formatPhoneInput(e.target.value);
        });
    });
    
    // Toggle password visibility
    document.getElementById('toggleLoginPassword').addEventListener('click', () => {
        togglePasswordVisibility('loginPassword');
    });
    document.getElementById('toggleRegisterPassword').addEventListener('click', () => {
        togglePasswordVisibility('registerPassword');
    });
    document.getElementById('toggleRegisterPasswordConfirm').addEventListener('click', () => {
        togglePasswordVisibility('registerPasswordConfirm');
    });
    
    // Enter key for login
    document.getElementById('loginPassword').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
    
    // Enter key for register
    document.getElementById('registerPasswordConfirm').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleRegister();
    });
    
    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', () => {
        logoutUser();
        document.getElementById('userDropdown').classList.remove('active');
        showNotification('Вы вышли из аккаунта', 'info');
    });
    
    // My movies button
    document.getElementById('myMoviesBtn').addEventListener('click', () => {
        document.getElementById('userDropdown').classList.remove('active');
        openMyMoviesModal();
    });
    
    // My movies modal close
    document.getElementById('myMoviesClose').addEventListener('click', closeMyMoviesModal);
    document.getElementById('myMoviesOverlay').addEventListener('click', closeMyMoviesModal);
    
    // Settings button
    document.getElementById('settingsBtn').addEventListener('click', () => {
        document.getElementById('userDropdown').classList.remove('active');
        openSettingsModal();
    });
    
    // Settings Modal events
    document.getElementById('settingsClose').addEventListener('click', closeSettingsModal);
    document.getElementById('settingsOverlay').addEventListener('click', closeSettingsModal);
    document.getElementById('settingsCancelBtn').addEventListener('click', closeSettingsModal);
    document.getElementById('settingsForm').addEventListener('submit', handleSettingsSubmit);
    document.getElementById('avatarUploadBtn').addEventListener('click', () => {
        document.getElementById('avatarInput').click();
    });
    document.getElementById('avatarInput').addEventListener('change', handleAvatarUpload);
}
