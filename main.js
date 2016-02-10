function init()
{
    var mainvideo=document.getElementById("main_video");
    var maincanvas=document.getElementById("main_canvas");
    var Width=mainvideo.videoWidth;
    var Height=mainvideo.videoHeight;
    maincanvas.width=Width;
    maincanvas.height=Height-40;
    console.log(Width);
    console.log(Height);
}
function playORpause()
{
    var mainvideo=document.getElementById("main_video");
    if(mainvideo.paused===false)
        mainvideo.pause();
    else
        mainvideo.play();
}