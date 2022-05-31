

window.onload=function(){
//     Click the button(prev/next) to change to different embeded music playlists(iframe)//

//Get two buttons//  
var prev = document.getElementById('p');
var next = document.getElementById('n');

//Get iframe//
var iframe=document.getElementsByTagName('iframe')[0];

prev.onclick = function(){
    //
}

next.onclick = function(){
    iframe.remove();
}
 
}