//found this loading bar//
let width = 0;
        let bar = document.getElementById("myBar");
        let loading = setInterval(fillBar, 50); // fills in about 5 seconds

        function fillBar() {
            if (width >= 100) {
                clearInterval(loading);
                document.getElementById("openWebsiteBtn").style.display = "block"; // show button
            } else {
                width++;
                bar.style.width = width + '%';
            }
        }
//end of loading bar//

function freezeVideo() {
    const video = document.getElementById('background-video');
    video.pause(); // stop the video
    video.currentTime = video.duration;}