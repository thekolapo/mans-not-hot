var myContext = new (window.AudioContext || window.webkitAudioContext)();
var music;
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
    // music.play();
}

window.addEventListener('touchstart', function() {
        // create empty buffer
        var buffer = myContext.createBuffer(1, 1, 22050);
        var source = myContext.createBufferSource();
        source.buffer = buffer;
    
        // connect to output (your speakers)
        source.connect(myContext.destination);
    
        // play the file
        source.start(0);
        console.log(000000);
        music.play();
    
    }, false);