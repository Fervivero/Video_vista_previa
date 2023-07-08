function reproducirVideo(element) {
    var video = element.querySelector("video");
    video.play();
    console.log(video.play);
}

function pausarVideo(element) {
    var video = element.querySelector("video");
    video.pause();
}