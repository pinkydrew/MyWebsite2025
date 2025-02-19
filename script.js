function openVideo(videoFile) {
    const modal = document.getElementById("videoModal");
    const videoPlayer = document.getElementById("videoPlayer");
    const videoSource = document.getElementById("videoSource");

    videoSource.src = videoFile;
    videoPlayer.load();
    modal.style.display = "flex";
    videoPlayer.play();
}

function closeVideo() {
    const modal = document.getElementById("videoModal");
    const videoPlayer = document.getElementById("videoPlayer");

    modal.style.display = "none";
    videoPlayer.pause();
}
