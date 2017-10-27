// var myContext = new (window.AudioContext || window.webkitAudioContext)();
var music;
var finishedLoadingAudio = false;
// function loadAudio(){
    //Load the sounds
    sounds.load([
    "sounds/pong.mp3"
    ]);

    //Assign the callback function that should run
    //when the sounds have loaded
    sounds.whenLoaded = setup;
// }

function setup() {
    music  = sounds["sounds/pong.mp3"];
    music.loop = true;
    music.play();
    finishedLoadingAudio = true;

    var VARONE = { myvalue: true };

    // if(VAR.myvalue){
    //     document.getElementById('overlay-main').style.display = 'none';
    // }
    // setTimeout(hideLoadingScreen, 1000);
}

function hideLoadingScreen(){
    document.getElementById('overlay-main').style.display = 'none';
}

function mute() {
    document.getElementById('sound-on').style.display = 'none';
    document.getElementById('sound-off').style.display = 'block';
  }

function unmute() {
    document.getElementById('sound-off').style.display = 'none';
    document.getElementById('sound-on').style.display = 'block';
}

window.addEventListener('touchstart', function() {
        // create empty buffer
        // var buffer = myContext.createBuffer(1, 1, 22050);
        // var source = myContext.createBufferSource();
        // source.buffer = buffer;
    
        // // connect to output (your speakers)
        // source.connect(myContext.destination);
    
        // play the file
        // source.start(0);
        music.play();
    
}, false);