/**
 * 🌿 棲心樹洞 Stillhollow - Service Worker
 * Version: 4.0.0 (Production Release)
 * Strategy: Cache First with Network Fallback (Offline-First)
 */

const CACHE_NAME = 'stillhollow-v4.0.0';

// 離線核心靜態資源清單
const STATIC_ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './Stillhollowicon-192.png',
    './Stillhollowicon-512.png'
];

// 1. 安裝階段 (Install)：預先快取核心資源
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                // 強制跳過等待，使新版本立即進入 activate 階段
                return self.skipWaiting();
            })
    );
});

// 2. 啟用階段 (Activate)：清理舊快取並接管所有客戶端
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((name) => {
                        if (name !== CACHE_NAME) {
                            return caches.delete(name);
                        }
                    })
                );
            })
            .then(() => {
                return self.clients.claim();
            })
            .then(() => {
                // 向所有開啟的分頁廣播更新就緒訊息 (通知 app.js 彈出重載提示)
                return self.clients.matchAll({ type: 'window' }).then((clients) => {
                    clients.forEach((client) => {
                        client.postMessage({ type: 'SW_UPDATED', version: CACHE_NAME });
                    });
                });
            })
    );
});

// 3. 請求攔截階段 (Fetch)：離線優先 (Cache First, Network Fallback)
self.addEventListener('fetch', (event) => {
    // 僅處理 GET 請求，其餘略過
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                // 快取未命中時嘗試走網絡
                return fetch(event.request)
                    .then((networkResponse) => {
                        // 僅快取有效且同源的成功回應
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseToCache);
                        });

                        return networkResponse;
                    })
                    .catch(() => {
                        // 離線且無快取時回退至主頁 (SPA 容錯)
                        if (event.request.mode === 'navigate') {
                            return caches.match('./index.html');
                        }
                    });
            })
    );
});
