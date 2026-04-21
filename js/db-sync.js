(function () {
    const KEYS = [
        'kinotj_movies',
        'kinotj_users',
        'kinotj_payments',
        'kinotj_current_user',
        'kinotj_admin_session'
    ];

    const API_BASE = '/api/storage';
    let syncQueue = new Map();
    let flushTimer = null;

    const safeJsonParse = (value) => {
        if (typeof value !== 'string') return null;
        try {
            return JSON.parse(value);
        } catch {
            return null;
        }
    };

    const request = async (url, options = {}) => {
        const response = await fetch(url, {
            headers: { 'Content-Type': 'application/json' },
            ...options
        });

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        return response.json();
    };

    const flushQueue = async () => {
        const entries = Object.fromEntries(syncQueue.entries());
        syncQueue = new Map();
        flushTimer = null;

        if (Object.keys(entries).length === 0) {
            return;
        }

        try {
            await request(`${API_BASE}/batch`, {
                method: 'POST',
                body: JSON.stringify({ entries })
            });
        } catch (error) {
            for (const [key, value] of Object.entries(entries)) {
                syncQueue.set(key, value);
            }

            if (!flushTimer) {
                flushTimer = setTimeout(flushQueue, 1500);
            }
        }
    };

    const enqueueSync = (key, value) => {
        if (!KEYS.includes(key)) return;

        syncQueue.set(key, value);

        if (!flushTimer) {
            flushTimer = setTimeout(flushQueue, 250);
        }
    };

    const patchLocalStorage = () => {
        const originalSetItem = localStorage.setItem.bind(localStorage);
        const originalRemoveItem = localStorage.removeItem.bind(localStorage);

        localStorage.setItem = (key, value) => {
            originalSetItem(key, value);
            enqueueSync(key, safeJsonParse(value));
        };

        localStorage.removeItem = (key) => {
            originalRemoveItem(key);
            if (KEYS.includes(key)) {
                enqueueSync(key, null);
            }
        };
    };

    const hydrateFromDb = async () => {
        try {
            const result = await request(`${API_BASE}/bootstrap`);
            if (!result.ok || !result.data) return;

            for (const key of KEYS) {
                if (!(key in result.data)) continue;

                const value = result.data[key];
                if (value === null || typeof value === 'undefined') {
                    continue;
                }

                localStorage.setItem(key, JSON.stringify(value));
            }
        } catch (error) {
            // fallback to localStorage only
        }
    };

    window.kinotjDbSyncReady = (async () => {
        patchLocalStorage();
        await hydrateFromDb();
    })();
})();
