const CACHE_NAME = 'stillhollow-v4';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './Stillhollowicon-192.png',
    './Stillhollowicon-512.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return Promise.allSettled(
                ASSETS.map((url) => cache.add(url).catch(() => console.warn(`Cache miss: ${url}`)))
            );
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys.map((k) => k !== CACHE_NAME && caches.delete(k))
        )).then(() => {
            self.clients.claim();
            return self.clients.matchAll().then((clients) => {
                clients.forEach((client) => client.postMessage({ type: 'SW_UPDATED' }));
            });
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cached) => cached || fetch(e.request).catch(() => caches.match('./index.html')))
    );
});
