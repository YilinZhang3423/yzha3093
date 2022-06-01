document.getElementById('re').onclick = function() {

    var iframe = document.createElement('iframe');
    iframe.src = 'https://open.spotify.com/embed/playlist/6mRYwA32FHVrHHy6lW1bAu?utm_source=generator';
    iframe.allowfullscreen="" 
    iframe.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    document.nav.appendChild(iframe);

    var getframe = document.getElementById("test");
    getframe.innerHTML = '';
 
 };
