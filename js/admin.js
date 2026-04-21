// ========================================
// ADMIN PANEL - KINO TJ
// ========================================

// Данные администратора
const ADMIN_CREDENTIALS = {
    phone: '992500500200',
    password: '123456'
};

// Дефолтные фильмы (используются если нет данных в localStorage)
const defaultMovies = [
    {
        id: 1,
        title: "Интерстеллар",
        year: 2014,
        genre: "Фантастика",
        rating: 8.6,
        duration: 169,
        price: 1,
        description: "Когда засуха приводит человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину в путешествие.",
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
        description: "Кобб - талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадёт ценные секреты из глубин подсознания во время сна.",
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
        description: "Жизнь Томаса Андерсона разделена на две части: днём он - самый обычный офисный работник, а ночью превращается в хакера по имени Нео.",
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
        description: "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме, он сталкивается с жестокостью тюремной жизни.",
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
        description: "Готэм, начало 1980-х годов. Комик Артур Флек живет с больной матерью, которая с детства учит его «приносить в мир смех».",
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
        description: "На далекой планете Пандора находится редкий минерал, необходимый людям. Для добычи нужно наладить контакт с местными жителями - народом На'ви.",
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
        description: "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники молодого жителя предместья Дрисса.",
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
        video: "https://www.youtube.com/watch?v=jawVxq1Iyl0",
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

// Глобальные переменные
let movies = [];
let isAdminLoggedIn = false;
let deleteTarget = null;
let deleteType = null;

// ========================================
// ИНИЦИАЛИЗАЦИЯ
// ========================================

document.addEventListener('DOMContentLoaded', async () => {
    if (window.kinotjDbSyncReady) {
        try {
            await window.kinotjDbSyncReady;
        } catch (error) {
            console.warn('DB sync bootstrap failed, using localStorage fallback.');
        }
    }

    initMovies();
    checkAdminAuth();
    initEventListeners();
});

// Инициализация фильмов из localStorage или дефолтных
function initMovies() {
    const savedMovies = localStorage.getItem('kinotj_movies');
    if (savedMovies) {
        movies = JSON.parse(savedMovies);
    } else {
        movies = [...defaultMovies];
        saveMovies();
    }
}

// Сохранение фильмов в localStorage
function saveMovies() {
    localStorage.setItem('kinotj_movies', JSON.stringify(movies));
}

function checkAdminAuth() {
    const adminSession = localStorage.getItem('kinotj_admin_session');
    if (adminSession) {
        isAdminLoggedIn = true;
        showAdminPanel();
    }
}

function initEventListeners() {
    // Login form
    document.getElementById('adminLoginForm').addEventListener('submit', handleAdminLogin);
    document.getElementById('toggleAdminPassword').addEventListener('click', () => {
        const input = document.getElementById('adminPassword');
        input.type = input.type === 'password' ? 'text' : 'password';
    });
    
    // Phone formatting for admin login
    document.getElementById('adminUsername').addEventListener('input', (e) => {
        e.target.value = formatPhoneInput(e.target.value);
    });

    // Navigation
    document.querySelectorAll('.nav-item[data-section]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            switchSection(item.dataset.section);
        });
    });

    // Logout
    document.getElementById('adminLogout').addEventListener('click', handleAdminLogout);

    // Burger menu
    document.getElementById('burgerBtn').addEventListener('click', toggleSidebar);

    // Add user button
    document.getElementById('addUserBtn').addEventListener('click', openAddUserModal);

    // Search
    document.getElementById('userSearch').addEventListener('input', filterUsers);
    document.getElementById('movieSearch').addEventListener('input', filterMovies);

    // Modals
    initModalEvents();

    // Forms
    document.getElementById('editUserForm').addEventListener('submit', handleEditUser);
    document.getElementById('addUserForm').addEventListener('submit', handleAddUser);
    document.getElementById('editMovieForm').addEventListener('submit', handleEditMovie);
    document.getElementById('addMovieForm').addEventListener('submit', handleAddMovie);

    // Delete confirm
    document.getElementById('confirmDelete').addEventListener('click', confirmDeleteAction);
    document.getElementById('cancelDelete').addEventListener('click', closeDeleteModal);
    
    // Add movie button
    document.getElementById('addMovieBtn').addEventListener('click', openAddMovieModal);
}

// ========================================
// АВТОРИЗАЦИЯ АДМИНА
// ========================================

function handleAdminLogin(e) {
    e.preventDefault();
    
    const phone = document.getElementById('adminUsername').value.replace(/\D/g, '');
    const password = document.getElementById('adminPassword').value;
    
    // Добавляем 992 если нет
    const fullPhone = phone.startsWith('992') ? phone : '992' + phone;
    
    if (fullPhone === ADMIN_CREDENTIALS.phone && password === ADMIN_CREDENTIALS.password) {
        localStorage.setItem('kinotj_admin_session', 'true');
        isAdminLoggedIn = true;
        showAdminPanel();
        showNotification('Добро пожаловать, Администратор!', 'success');
    } else {
        document.getElementById('loginError').textContent = 'Неверный номер телефона или пароль';
    }
}

function handleAdminLogout() {
    localStorage.removeItem('kinotj_admin_session');
    isAdminLoggedIn = false;
    document.getElementById('adminPanel').classList.add('hidden');
    document.getElementById('adminLogin').classList.remove('hidden');
    showNotification('Вы вышли из админ-панели', 'info');
}

function showAdminPanel() {
    document.getElementById('adminLogin').classList.add('hidden');
    document.getElementById('adminPanel').classList.remove('hidden');
    loadDashboard();
    loadUsers();
    loadMovies();
    loadPayments();
}

// ========================================
// НАВИГАЦИЯ
// ========================================

function switchSection(section) {
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`[data-section="${section}"]`).classList.add('active');

    // Update sections
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.getElementById(`${section}Section`).classList.add('active');

    // Update title
    const titles = {
        dashboard: 'Дашборд',
        users: 'Пользователи',
        movies: 'Фильмы',
        payments: 'Платежи'
    };
    document.getElementById('pageTitle').textContent = titles[section];

    // Close sidebar on mobile
    document.querySelector('.sidebar').classList.remove('active');
}

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}

// ========================================
// ДАШБОРД
// ========================================

function loadDashboard() {
    const users = getUsers();
    const payments = getPayments();
    
    // Stats
    document.getElementById('totalUsers').textContent = users.length;
    document.getElementById('totalMovies').textContent = movies.length;
    
    const approvedPayments = payments.filter(payment => payment.status === 'approved');
    const totalPurchases = approvedPayments.length;
    const totalRevenue = approvedPayments.reduce((sum, payment) => sum + (payment.amount || 0), 0);

    document.getElementById('totalPayments').textContent = totalPurchases;
    document.getElementById('totalRevenue').textContent = totalRevenue + ' сомони';

    // Recent users
    const recentUsersEl = document.getElementById('recentUsers');
    const recentUsers = users.slice(-5).reverse();
    
    if (recentUsers.length === 0) {
        recentUsersEl.innerHTML = '<p class="empty-text">Нет пользователей</p>';
    } else {
        recentUsersEl.innerHTML = recentUsers.map(user => `
            <div class="recent-item">
                <div class="recent-item-info">
                    <div class="recent-item-avatar">👤</div>
                    <div>
                        <div class="recent-item-name">${user.name}</div>
                        <div class="recent-item-detail">${formatPhoneDisplay(user.phone)}</div>
                    </div>
                </div>
                <span class="recent-item-badge">${user.purchasedMovies?.length || 0} фильмов</span>
            </div>
        `).join('');
    }

    // Popular movies
    const popularMoviesEl = document.getElementById('popularMovies');
    const movieStats = {};
    
    users.forEach(user => {
        (user.purchasedMovies || []).forEach(movieId => {
            movieStats[movieId] = (movieStats[movieId] || 0) + 1;
        });
    });

    const sortedMovies = Object.entries(movieStats)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    if (sortedMovies.length === 0) {
        popularMoviesEl.innerHTML = '<p class="empty-text">Нет покупок</p>';
    } else {
        popularMoviesEl.innerHTML = sortedMovies.map(([movieId, count]) => {
            const movie = movies.find(m => m.id == movieId);
            if (!movie) return '';
            return `
                <div class="recent-item">
                    <div class="recent-item-info">
                        <div class="recent-item-avatar">🎬</div>
                        <div>
                            <div class="recent-item-name">${movie.title}</div>
                            <div class="recent-item-detail">${movie.year} • ${movie.genre}</div>
                        </div>
                    </div>
                    <span class="recent-item-badge">${count} покупок</span>
                </div>
            `;
        }).join('');
    }
}

// ========================================
// ПОЛЬЗОВАТЕЛИ
// ========================================

function getUsers() {
    return JSON.parse(localStorage.getItem('kinotj_users') || '[]');
}

function saveUsers(users) {
    localStorage.setItem('kinotj_users', JSON.stringify(users));
}

function loadUsers() {
    const users = getUsers();
    const tbody = document.getElementById('usersTableBody');
    const noUsersMsg = document.getElementById('noUsersMessage');

    if (users.length === 0) {
        tbody.innerHTML = '';
        noUsersMsg.classList.remove('hidden');
        document.querySelector('.table-container').classList.add('hidden');
        return;
    }

    noUsersMsg.classList.add('hidden');
    document.querySelector('.table-container').classList.remove('hidden');

    tbody.innerHTML = users.map(user => `
        <tr data-user-id="${user.id}">
            <td>#${user.id}</td>
            <td>${user.name}</td>
            <td>${formatPhoneDisplay(user.phone)}</td>
            <td>${formatDate(user.registeredAt)}</td>
            <td>
                <button class="action-btn view" onclick="viewUserMovies(${user.id})">
                    ${user.purchasedMovies?.length || 0} фильмов
                </button>
            </td>
            <td>
                <button class="action-btn edit" onclick="openEditUserModal(${user.id})">✏️</button>
                <button class="action-btn delete" onclick="openDeleteUserModal(${user.id})">🗑️</button>
            </td>
        </tr>
    `).join('');
}

function filterUsers() {
    const query = document.getElementById('userSearch').value.toLowerCase();
    const users = getUsers();
    const filtered = users.filter(user => 
        user.name.toLowerCase().includes(query) || 
        user.phone.includes(query)
    );

    const tbody = document.getElementById('usersTableBody');
    
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="empty-message">Пользователи не найдены</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map(user => `
        <tr data-user-id="${user.id}">
            <td>#${user.id}</td>
            <td>${user.name}</td>
            <td>${formatPhoneDisplay(user.phone)}</td>
            <td>${formatDate(user.registeredAt)}</td>
            <td>
                <button class="action-btn view" onclick="viewUserMovies(${user.id})">
                    ${user.purchasedMovies?.length || 0} фильмов
                </button>
            </td>
            <td>
                <button class="action-btn edit" onclick="openEditUserModal(${user.id})">✏️</button>
                <button class="action-btn delete" onclick="openDeleteUserModal(${user.id})">🗑️</button>
            </td>
        </tr>
    `).join('');
}

// Edit User
function openEditUserModal(userId) {
    const users = getUsers();
    const user = users.find(u => u.id === userId);
    
    if (!user) return;

    document.getElementById('editUserId').value = user.id;
    document.getElementById('editUserName').value = user.name;
    document.getElementById('editUserPhone').value = formatPhoneDisplay(user.phone);
    document.getElementById('editUserPassword').value = '';
    document.getElementById('editUserTitle').textContent = 'Редактировать: ' + user.name;

    document.getElementById('editUserModal').classList.add('active');
}

function handleEditUser(e) {
    e.preventDefault();

    const userId = parseInt(document.getElementById('editUserId').value);
    const name = document.getElementById('editUserName').value.trim();
    const phone = document.getElementById('editUserPhone').value.replace(/\D/g, '');
    const password = document.getElementById('editUserPassword').value;

    if (!name || name.length < 2) {
        showNotification('Имя должно содержать минимум 2 символа', 'error');
        return;
    }

    if (!validatePhone(phone)) {
        showNotification('Введите корректный номер телефона', 'error');
        return;
    }

    const users = getUsers();
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) return;

    // Check if phone is already used by another user
    const phoneExists = users.some(u => u.phone === phone && u.id !== userId);
    if (phoneExists) {
        showNotification('Этот номер телефона уже используется', 'error');
        return;
    }

    users[userIndex].name = name;
    users[userIndex].phone = phone;
    
    if (password && password.length >= 6) {
        users[userIndex].password = password;
    }

    saveUsers(users);
    closeEditUserModal();
    loadUsers();
    loadDashboard();
    showNotification('Пользователь успешно обновлён', 'success');
}

function closeEditUserModal() {
    document.getElementById('editUserModal').classList.remove('active');
}

// Add User
function openAddUserModal() {
    document.getElementById('newUserName').value = '';
    document.getElementById('newUserPhone').value = '';
    document.getElementById('newUserPassword').value = '';
    document.getElementById('addUserModal').classList.add('active');
}

function handleAddUser(e) {
    e.preventDefault();

    const name = document.getElementById('newUserName').value.trim();
    const phone = document.getElementById('newUserPhone').value.replace(/\D/g, '');
    const password = document.getElementById('newUserPassword').value;

    if (!name || name.length < 2) {
        showNotification('Имя должно содержать минимум 2 символа', 'error');
        return;
    }

    if (!validatePhone(phone)) {
        showNotification('Введите корректный номер телефона', 'error');
        return;
    }

    if (!password || password.length < 6) {
        showNotification('Пароль должен содержать минимум 6 символов', 'error');
        return;
    }

    const users = getUsers();

    // Check if phone exists
    if (users.some(u => u.phone === phone)) {
        showNotification('Этот номер телефона уже зарегистрирован', 'error');
        return;
    }

    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        name,
        phone,
        password,
        purchasedMovies: [],
        registeredAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);
    closeAddUserModal();
    loadUsers();
    loadDashboard();
    showNotification('Пользователь успешно добавлен', 'success');
}

function closeAddUserModal() {
    document.getElementById('addUserModal').classList.remove('active');
}

// Delete User
function openDeleteUserModal(userId) {
    deleteTarget = userId;
    deleteType = 'user';
    
    const users = getUsers();
    const user = users.find(u => u.id === userId);
    
    document.getElementById('deleteConfirmText').textContent = 
        `Вы уверены, что хотите удалить пользователя "${user?.name}"?`;
    document.getElementById('deleteConfirmModal').classList.add('active');
}

function confirmDeleteAction() {
    if (deleteType === 'user') {
        deleteUser(deleteTarget);
    } else if (deleteType === 'movie') {
        deleteMovie(deleteTarget);
    }
    closeDeleteModal();
}

function deleteUser(userId) {
    let users = getUsers();
    users = users.filter(u => u.id !== userId);
    saveUsers(users);
    loadUsers();
    loadDashboard();
    showNotification('Пользователь удалён', 'success');
}

function closeDeleteModal() {
    document.getElementById('deleteConfirmModal').classList.remove('active');
    deleteTarget = null;
    deleteType = null;
}

// View User Movies
function viewUserMovies(userId) {
    const users = getUsers();
    const user = users.find(u => u.id === userId);
    
    if (!user) return;

    document.getElementById('userMoviesTitle').textContent = `Фильмы пользователя: ${user.name}`;
    
    const list = document.getElementById('userMoviesList');
    const purchasedMovies = movies.filter(m => user.purchasedMovies?.includes(m.id));

    if (purchasedMovies.length === 0) {
        list.innerHTML = '<p class="empty-text" style="text-align: center; color: rgba(255,255,255,0.5); padding: 30px;">Нет купленных фильмов</p>';
    } else {
        list.innerHTML = purchasedMovies.map(movie => `
            <div class="user-movie-item">
                <img src="${movie.poster}" alt="${movie.title}" class="user-movie-poster">
                <div class="user-movie-info">
                    <div class="user-movie-title">${movie.title}</div>
                    <div class="user-movie-genre">${movie.year} • ${movie.genre}</div>
                </div>
            </div>
        `).join('');
    }

    document.getElementById('userMoviesModal').classList.add('active');
}

function closeUserMoviesModal() {
    document.getElementById('userMoviesModal').classList.remove('active');
}

// ========================================
// ФИЛЬМЫ
// ========================================

function loadMovies() {
    const grid = document.getElementById('moviesAdminGrid');
    const users = getUsers();

    // Calculate purchases per movie
    const moviePurchases = {};
    users.forEach(user => {
        (user.purchasedMovies || []).forEach(movieId => {
            moviePurchases[movieId] = (moviePurchases[movieId] || 0) + 1;
        });
    });

    grid.innerHTML = movies.map(movie => `
        <div class="movie-admin-card" data-movie-id="${movie.id}">
            <img src="${movie.poster}" alt="${movie.title}" class="movie-admin-poster" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27200%27 height=%27300%27%3E%3Crect fill=%27%231a1a2e%27 width=%27200%27 height=%27300%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 text-anchor=%27middle%27 fill=%27%23fff%27 font-size=%2716%27%3EНет фото%3C/text%3E%3C/svg%3E'">
            <div class="movie-admin-info">
                <div class="movie-admin-title">${movie.title}</div>
                <div class="movie-admin-year">${movie.year} • ${movie.genre}</div>
                <div class="movie-admin-stats">
                    <span>⭐ ${movie.rating}</span>
                    <span>💰 ${moviePurchases[movie.id] || 0} покупок</span>
                </div>
                <div class="movie-admin-actions">
                    <button class="action-btn edit" onclick="openEditMovieModal(${movie.id})">✏️ Изменить</button>
                    <button class="action-btn delete" onclick="openDeleteMovieModal(${movie.id})">🗑️</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Открыть модалку редактирования фильма
function openEditMovieModal(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;

    document.getElementById('editMovieId').value = movie.id;
    document.getElementById('editMovieName').value = movie.title;
    document.getElementById('editMovieYear').value = movie.year;
    document.getElementById('editMovieGenre').value = movie.genre;
    document.getElementById('editMovieRating').value = movie.rating;
    document.getElementById('editMovieDuration').value = movie.duration;
    document.getElementById('editMoviePrice').value = movie.price;
    document.getElementById('editMovieDescription').value = movie.description;
    document.getElementById('editMoviePoster').value = movie.poster || '';
    document.getElementById('editMovieVideo').value = movie.video || '';
    
    // Категории
    document.getElementById('editCategoryPopular').checked = movie.category.includes('popular');
    document.getElementById('editCategoryNew').checked = movie.category.includes('new');
    document.getElementById('editCategoryRecommended').checked = movie.category.includes('recommended');
    
    document.getElementById('editMovieTitle').textContent = 'Редактировать: ' + movie.title;
    document.getElementById('editMovieModal').classList.add('active');
}

function closeEditMovieModal() {
    document.getElementById('editMovieModal').classList.remove('active');
}

// Обработка редактирования фильма
function handleEditMovie(e) {
    e.preventDefault();
    
    const movieId = parseInt(document.getElementById('editMovieId').value);
    const movieIndex = movies.findIndex(m => m.id === movieId);
    
    if (movieIndex === -1) return;

    // Собираем категории
    const categories = [];
    if (document.getElementById('editCategoryPopular').checked) categories.push('popular');
    if (document.getElementById('editCategoryNew').checked) categories.push('new');
    if (document.getElementById('editCategoryRecommended').checked) categories.push('recommended');

    movies[movieIndex] = {
        ...movies[movieIndex],
        title: document.getElementById('editMovieName').value.trim(),
        year: parseInt(document.getElementById('editMovieYear').value),
        genre: document.getElementById('editMovieGenre').value.trim(),
        rating: parseFloat(document.getElementById('editMovieRating').value),
        duration: parseInt(document.getElementById('editMovieDuration').value),
        price: parseFloat(document.getElementById('editMoviePrice').value),
        description: document.getElementById('editMovieDescription').value.trim(),
        poster: document.getElementById('editMoviePoster').value.trim(),
        video: document.getElementById('editMovieVideo').value.trim(),
        category: categories
    };

    saveMovies();
    closeEditMovieModal();
    loadMovies();
    loadDashboard();
    showNotification('Фильм успешно обновлён', 'success');
}

// Открыть модалку добавления фильма
function openAddMovieModal() {
    // Очищаем форму
    document.getElementById('newMovieName').value = '';
    document.getElementById('newMovieYear').value = new Date().getFullYear();
    document.getElementById('newMovieGenre').value = '';
    document.getElementById('newMovieRating').value = '7.0';
    document.getElementById('newMovieDuration').value = '120';
    document.getElementById('newMoviePrice').value = '1';
    document.getElementById('newMovieDescription').value = '';
    document.getElementById('newMoviePoster').value = '';
    document.getElementById('newMovieVideo').value = '';
    document.getElementById('newCategoryPopular').checked = false;
    document.getElementById('newCategoryNew').checked = true;
    document.getElementById('newCategoryRecommended').checked = false;
    
    document.getElementById('addMovieModal').classList.add('active');
}

function closeAddMovieModal() {
    document.getElementById('addMovieModal').classList.remove('active');
}

// Обработка добавления фильма
function handleAddMovie(e) {
    e.preventDefault();

    const title = document.getElementById('newMovieName').value.trim();
    if (!title) {
        showNotification('Введите название фильма', 'error');
        return;
    }

    // Собираем категории
    const categories = [];
    if (document.getElementById('newCategoryPopular').checked) categories.push('popular');
    if (document.getElementById('newCategoryNew').checked) categories.push('new');
    if (document.getElementById('newCategoryRecommended').checked) categories.push('recommended');

    const newMovie = {
        id: movies.length > 0 ? Math.max(...movies.map(m => m.id)) + 1 : 1,
        title: title,
        year: parseInt(document.getElementById('newMovieYear').value),
        genre: document.getElementById('newMovieGenre').value.trim() || 'Не указан',
        rating: parseFloat(document.getElementById('newMovieRating').value) || 7.0,
        duration: parseInt(document.getElementById('newMovieDuration').value) || 120,
        price: parseFloat(document.getElementById('newMoviePrice').value) || 1,
        description: document.getElementById('newMovieDescription').value.trim() || 'Описание отсутствует',
        poster: document.getElementById('newMoviePoster').value.trim() || '',
        video: document.getElementById('newMovieVideo').value.trim() || '',
        category: categories.length > 0 ? categories : ['new']
    };

    movies.push(newMovie);
    saveMovies();
    closeAddMovieModal();
    loadMovies();
    loadDashboard();
    showNotification('Фильм "' + title + '" успешно добавлен', 'success');
}

// Удаление фильма
function openDeleteMovieModal(movieId) {
    deleteTarget = movieId;
    deleteType = 'movie';
    
    const movie = movies.find(m => m.id === movieId);
    document.getElementById('deleteConfirmText').textContent = 
        `Вы уверены, что хотите удалить фильм "${movie?.title}"?`;
    document.getElementById('deleteConfirmModal').classList.add('active');
}

function deleteMovie(movieId) {
    movies = movies.filter(m => m.id !== movieId);
    saveMovies();
    loadMovies();
    loadDashboard();
    showNotification('Фильм удалён', 'success');
}

function filterMovies() {
    const query = document.getElementById('movieSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.movie-admin-card');

    cards.forEach(card => {
        const title = card.querySelector('.movie-admin-title').textContent.toLowerCase();
        const genre = card.querySelector('.movie-admin-year').textContent.toLowerCase();
        
        if (title.includes(query) || genre.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ========================================
// ПЛАТЕЖИ
// ========================================

function getPayments() {
    return JSON.parse(localStorage.getItem('kinotj_payments') || '[]');
}

function loadPayments() {
    const tbody = document.getElementById('paymentsTableBody');
    const noPaymentsMsg = document.getElementById('noPaymentsMessage');

    const payments = getPayments();

    if (payments.length === 0) {
        tbody.innerHTML = '';
        noPaymentsMsg.classList.remove('hidden');
        document.getElementById('paymentsSection').querySelector('.table-container').classList.add('hidden');
        return;
    }

    noPaymentsMsg.classList.add('hidden');
    document.getElementById('paymentsSection').querySelector('.table-container').classList.remove('hidden');

    tbody.innerHTML = payments.slice().reverse().map(payment => `
        <tr>
            <td>#${payment.id}</td>
            <td>${payment.userName}</td>
            <td>${payment.movieTitle}</td>
            <td>${payment.amount} сомони</td>
            <td>${formatDate(payment.date)}</td>
            <td>
                ${payment.receipt && payment.receipt.dataUrl
                    ? `<button class="action-btn view" onclick="openReceipt('${String(payment.id)}')">Смотреть чек</button>`
                    : '<span class="muted">Нет</span>'}
            </td>
            <td>
                <span class="status-badge ${payment.status === 'approved' ? 'status-approved' : payment.status === 'rejected' ? 'status-danger' : 'status-pending'}">
                    ${payment.status === 'approved' ? 'Подтверждено' : payment.status === 'rejected' ? 'Отклонено' : 'На проверке'}
                </span>
            </td>
            <td>
                ${payment.status === 'pending'
                    ? `<button class="btn btn-primary btn-small" onclick="approvePayment('${payment.id}')">Подтвердить</button>`
                    : '<span class="muted">—</span>'}
            </td>
        </tr>
    `).join('');
}

function openReceipt(paymentId) {
    const payment = getPayments().find(p => String(p.id) === String(paymentId));
    if (!payment || !payment.receipt || !payment.receipt.dataUrl) {
        showNotification('Чек не найден', 'error');
        return;
    }

    const receiptWindow = window.open('', '_blank');
    if (!receiptWindow) {
        showNotification('Разрешите всплывающие окна для просмотра чека', 'info');
        return;
    }

    receiptWindow.document.write(`
        <html>
            <head><title>Чек #${payment.id}</title></head>
            <body style="margin:0; background:#111; display:flex; align-items:center; justify-content:center; min-height:100vh;">
                <img src="${payment.receipt.dataUrl}" alt="Чек" style="max-width:100%; max-height:100vh; object-fit:contain;" />
            </body>
        </html>
    `);
}

function approvePayment(paymentId) {
    const payments = getPayments();
    const paymentIndex = payments.findIndex(p => String(p.id) === String(paymentId));
    if (paymentIndex === -1) return;

    const payment = payments[paymentIndex];
    if (payment.status === 'approved') return;

    payment.status = 'approved';
    payments[paymentIndex] = payment;
    localStorage.setItem('kinotj_payments', JSON.stringify(payments));

    const users = getUsers();
    const userIndex = users.findIndex(u => u.id === payment.userId);
    if (userIndex !== -1) {
        const user = users[userIndex];
        user.purchasedMovies = user.purchasedMovies || [];
        if (!user.purchasedMovies.includes(payment.movieId)) {
            user.purchasedMovies.push(payment.movieId);
        }
        users[userIndex] = user;
        saveUsers(users);

        const currentUser = JSON.parse(localStorage.getItem('kinotj_current_user') || 'null');
        if (currentUser && currentUser.id === user.id) {
            localStorage.setItem('kinotj_current_user', JSON.stringify(user));
        }
    }

    loadPayments();
    loadUsers();
    loadDashboard();
}

// ========================================
// МОДАЛЬНЫЕ ОКНА
// ========================================

function initModalEvents() {
    // Edit User Modal
    document.getElementById('editUserOverlay').addEventListener('click', closeEditUserModal);
    document.getElementById('editUserClose').addEventListener('click', closeEditUserModal);
    document.getElementById('cancelEditUser').addEventListener('click', closeEditUserModal);

    // Add User Modal
    document.getElementById('addUserOverlay').addEventListener('click', closeAddUserModal);
    document.getElementById('addUserClose').addEventListener('click', closeAddUserModal);
    document.getElementById('cancelAddUser').addEventListener('click', closeAddUserModal);

    // Delete Confirm Modal
    document.getElementById('deleteConfirmOverlay').addEventListener('click', closeDeleteModal);

    // User Movies Modal
    document.getElementById('userMoviesOverlay').addEventListener('click', closeUserMoviesModal);
    document.getElementById('userMoviesClose').addEventListener('click', closeUserMoviesModal);
    
    // Edit Movie Modal
    document.getElementById('editMovieOverlay').addEventListener('click', closeEditMovieModal);
    document.getElementById('editMovieClose').addEventListener('click', closeEditMovieModal);
    document.getElementById('cancelEditMovie').addEventListener('click', closeEditMovieModal);
    
    // Add Movie Modal
    document.getElementById('addMovieOverlay').addEventListener('click', closeAddMovieModal);
    document.getElementById('addMovieClose').addEventListener('click', closeAddMovieModal);
    document.getElementById('cancelAddMovie').addEventListener('click', closeAddMovieModal);

    // Phone input formatting
    ['editUserPhone', 'newUserPhone'].forEach(id => {
        document.getElementById(id).addEventListener('input', (e) => {
            e.target.value = formatPhoneInput(e.target.value);
        });
    });
}

// ========================================
// УТИЛИТЫ
// ========================================

function formatPhoneDisplay(phone) {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 12) {
        return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
    }
    return phone;
}

function formatPhoneInput(value) {
    let cleaned = value.replace(/\D/g, '');
    
    if (!cleaned.startsWith('992')) {
        if (cleaned.startsWith('9') && cleaned.length === 9) {
            cleaned = '992' + cleaned;
        } else if (!cleaned.startsWith('992')) {
            cleaned = '992' + cleaned;
        }
    }
    
    cleaned = cleaned.slice(0, 12);
    
    let formatted = '+' + cleaned.slice(0, 3);
    if (cleaned.length > 3) formatted += ' ' + cleaned.slice(3, 5);
    if (cleaned.length > 5) formatted += ' ' + cleaned.slice(5, 8);
    if (cleaned.length > 8) formatted += ' ' + cleaned.slice(8, 12);
    
    return formatted;
}

function validatePhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 12 && cleaned.startsWith('992');
}

function formatDate(dateString) {
    if (!dateString) return 'Н/Д';
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    const icon = document.getElementById('notificationIcon');
    const msg = document.getElementById('notificationMessage');

    notification.className = 'notification ' + type;
    icon.textContent = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    msg.textContent = message;

    notification.classList.add('active');

    setTimeout(() => {
        notification.classList.remove('active');
    }, 3000);
}
