var cacheName = 'v2';
var cacheFiles = [
    './',
    './index.html',
    './script/app.js',
    './stylesheet/style.css',
    './stylesheet/fonts/Shine Bright - Demo.ttf',
    './stylesheet/fonts/MADE Evolve Sans Regular (PERSONAL USE).otf',
    './stylesheet/fonts/MADE Evolve Sans Medium (PERSONAL USE).otf',
    './stylesheet/images/daily-icon.png',
    './stylesheet/images/home-icon.png',
    './stylesheet/images/pinkbaguio.png',
    './stylesheet/images/pinkpuno.png',
    './stylesheet/images/schedule-icon.png'
];

self.addEventListener('install', function (e) {
    console.log("[ServiceWorker] Installed");

    e.waitUntil(

        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching cacheFiles');
            return cache.addAll(cacheFiles);
        })
    )
});

self.addEventListener('activate', function (e) {
    console.log("[ServiceWorker] Activated");

    e.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(cacheNames.map(function(thisCacheName) {
                
                if (thisCacheName !== cacheName) {
                    console.log("[ServiceWorker] Removing Cached Files from", thisCacheName);
                    return caches.delete(thisCacheName);
                }
            }))
        })
    )
})

self.addEventListener('fetch', function (e) {
    console.log("[ServiceWorker] Fetching", e.request.url);
});;