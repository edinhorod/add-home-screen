self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/add-home-screen/',
       '/add-home-screen/index.html',
       '/add-home-screen/index.js',
       '/add-home-screen/style.css',
       '/add-home-screen/images/fox1.jpg',
       '/add-home-screen/images/fox2.jpg',
       '/add-home-screen/images/fox3.jpg',
       '/add-home-screen/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
