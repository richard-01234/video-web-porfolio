
document.addEventListener('play',function(e) {
    var videos= document.getElementsByTagName('video');
    for( var i = 0, len = videos.length; i < len; i++){
        if( videos[i] !=e.target){
            videos[i].pause();
        }
    }
}, true)


$(document).ready(function(){

    $('.header').height($(Window).height());


})


const hoverVideo = document.querySelector('video');

hoverVideo.addEventListener('mouseenter',() => {
    hoverVideo.play();
});

hoverVideo.addEventListener('mouseleave',() => {
    hoverVideo.pause();
    hoverVideo.currentTime = 0;
});
