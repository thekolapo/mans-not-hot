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
    var music = sounds["sounds/pong.mp3"];
    music.loop = true;
    music.play();
}