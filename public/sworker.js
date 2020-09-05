self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
            "css/game.css",
            "css/styles.css",
            "css/bootstrap-social.css",
            "images/giphy.gif",
            "images/logo72.png",
            "images/logo512.png",
            "images/mute.png",
            "images/volume.png",
            "images/original-0.mp4",
            "sounds/bgsound.mp3",
            "sounds/fail.mp3",
            "sounds/win.mp3",
            "views/partials/header.ejs",
            "views/partials/footer.ejs",
            "views/game.ejs",
            "views/highscore.ejs",
            "views/home.ejs",
            "views/score.ejs",
            "views/submitFailure.ejs"]);
    })
    );
});

self.addEventListener("fetch", e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    );
});