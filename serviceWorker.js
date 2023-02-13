const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
    "/pwa_monedas",
    "/pwa_monedas/images/",
    "/pwa_monedas/index.html",
    "/pwa_monedas/js/app.js",
    "/pwa_monedas/manifest.json",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})
self.addEventListener("fetch", fetchEvent =>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})