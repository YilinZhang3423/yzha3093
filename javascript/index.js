let thesrc = "https://open.spotify.com/embed/playlist/6mRYwA32FHVrHHy6lW1bAu?utm_source=generator";
var playlistbutt1 = document.getElementById("butt1");
var playlistbutt2 = document.getElementById("butt2");
var playlistbutt3 = document.getElementById("butt3");
var playlistbutt4 = document.getElementById("butt4");
var playlistbutt5 = document.getElementById("butt5");

// When the window loads, showing the certain playlist chosen from last time
window.addEventListener('load', (event) => {
    const navsrc = localStorage.getItem('thesrc');
    var theplaylist = document.getElementById("upnavplaylist");
    theplaylist.src = navsrc;
});

function changeplaylist1() {

    // Change the playlist on the up-nav
    var theplaylist = document.getElementById("upnavplaylist");
    thesrc="https://open.spotify.com/embed/playlist/6mRYwA32FHVrHHy6lW1bAu?utm_source=generator";
    theplaylist.src = thesrc;   
    
    // local storage of the source of this certain iframe, set the key as thesrc
    localStorage.setItem('thesrc', thesrc);

    // When button 1 is pressed, let button 1 disappear on the screen to show the first playlist was chosen
    playlistbutt1.style.display = "none";
    // In the meantime, showing the button 2345 for users to choose
    playlistbutt2.style.display = "block";
    playlistbutt3.style.display = "block";
    playlistbutt4.style.display = "block";
    playlistbutt5.style.display = "block";



}


function changeplaylist2() {

    var theplaylist = document.getElementById("upnavplaylist");
    thesrc = "https://open.spotify.com/embed/playlist/37i9dQZF1DWSSrwtip3vZP?utm_source=generator";
    theplaylist.src = thesrc;

    localStorage.setItem('thesrc', thesrc);

    playlistbutt2.style.display = "none";

    playlistbutt1.style.display = "block";
    playlistbutt3.style.display = "block";
    playlistbutt4.style.display = "block";
    playlistbutt5.style.display = "block";
 
}

function changeplaylist3() {

    var theplaylist = document.getElementById("upnavplaylist");
    thesrc = "https://open.spotify.com/embed/playlist/37i9dQZF1DX4PP3DA4J0N8?utm_source=generator";
    theplaylist.src = thesrc;

    localStorage.setItem('thesrc', thesrc);

    playlistbutt3.style.display = "none";

    playlistbutt2.style.display = "block";
    playlistbutt1.style.display = "block";
    playlistbutt4.style.display = "block";
    playlistbutt5.style.display = "block";
 
}

function changeplaylist4() {

    var theplaylist = document.getElementById("upnavplaylist");
    thesrc = "https://open.spotify.com/embed/playlist/37i9dQZF1DX7KNKjOK0o75?utm_source=generator";
    theplaylist.src = thesrc;

    playlistbutt4.style.display = "none";

    localStorage.setItem('thesrc', thesrc);

    playlistbutt2.style.display = "block";
    playlistbutt3.style.display = "block";
    playlistbutt1.style.display = "block";
    playlistbutt5.style.display = "block";
   
}
function changeplaylist5() {

    var theplaylist = document.getElementById("upnavplaylist");
    thesrc = "https://open.spotify.com/embed/playlist/37i9dQZF1DWZVAVMhIe3pV?utm_source=generator";
    theplaylist.src = thesrc;

    localStorage.setItem('thesrc', thesrc);

    playlistbutt5.style.display = "none";

    playlistbutt2.style.display = "block";
    playlistbutt3.style.display = "block";
    playlistbutt4.style.display = "block";
    playlistbutt1.style.display = "block";
    
}


