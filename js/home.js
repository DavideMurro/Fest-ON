var clickLightModeTimeout;
var clickLightModeAudio = new Audio('assets/audio/click.mp3');

function toggleLightMode() {
    document.body.classList.toggle('light-mode');
    
    clickLightModeAudio.pause();
    clickLightModeAudio.currentTime = 0;
    clickLightModeAudio.play();

    clearTimeout(clickLightModeTimeout);
    document.getElementById('click-container').classList.remove('shown');
    document.getElementById('click-container').classList.add('shown');
    clickLightModeTimeout = setTimeout(function() {
        document.getElementById('click-container').classList.remove('shown');
    }, 200);
}
