// // var Container = PIXI.Container,
// // autoDetectRenderer = PIXI.autoDetectRenderer,
// // loader = PIXI.loader,
// // resources = PIXI.loader.resources,
// // Sprite = PIXI.Sprite;
// // var y = window.innerHeight, x = window.innerWidth;


// // var stage = new Container(),
// // renderer = autoDetectRenderer(window.innerWidth, window.innerHeight, {antialias: false, transparent: true, resolution: 1});
// // document.body.appendChild(renderer.view);

// // renderer.view.style.position = "absolute"
// // renderer.view.style.display = "block";
// // renderer.autoResize = true;
// // // renderer.view.style.border = "10px dashed black"

// // // loader.add("shaqImage", "2-01 (2).png").load(setup);
// // loader.add("shaqImage", "2-01 (2).png").load(setup);

// // var shaq, run = [], shaqTexture;

// // function setup() {
// //     shaqTexture = loader.resources["shaqImage"].texture;
// //     //run.push (new PIXI.Rectangle(0,0,90,175),new PIXI.Rectangle(90,0,90,175),new PIXI.Rectangle(190,0,90,175),new PIXI.Rectangle(290,0,90,175), new PIXI.Rectangle(190,0,90,175));
// //     //marioTexture.frame = run[0];
// //     shaq = new Sprite(shaqTexture);
// //     shaq.position.set(window.innerWidth/2, window.innerHeight/1.4);
// //     shaq.scale.set(0.39, 0.39);
// //     shaq.anchor.set(0.5, 0.5);
// //     stage.addChild(shaq);
// //     renderer.render(stage);
// //     renderer
// // }

// // window.addEventListener("resize", function(){
// //     renderer.resize(window.innerWidth, window.innerHeight);
// // });

// var af = 0, df = 4, maxFrame = 5;

// function gameLoop() {
//     var f = requestAnimationFrame(gameLoop);
//     if (af >= maxFrame)
//     {
//       af = 0;
//     } else {
//       af += 1/df;
//     }
//     marioTexture.frame = run[Math.floor(af)];
//     mario.position.set(window.innerWidth/2, window.innerHeight/2);
//     renderer.render(stage);
//   }
  
// //   Start the game loop
//   gameLoop();

var app = new PIXI.Application(window.innerWidth, window.innerHeight, {transparent: true });
document.body.appendChild(app.view);
var dancer, run = [], dancerTexture;
var heightDivider = 1.4; 
var loader = PIXI.loader,
Sprite = PIXI.Sprite;;

loader.add("dancerImage", "mario-jump.png").load(setup);

function setup(){
    if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        heightDivider = 1.2;
    }
    else if(/iPad/i.test(navigator.userAgent)){
        heightDivider = 1.29;
    }

    dancerTexture = loader.resources["dancerImage"].texture;

    var x = 0;
    for(var i = 0; i < 4; i++){
        run.push(new PIXI.Rectangle(x, 0, 90, 175));
        x += 90;
    }
    // run.push (new PIXI.Rectangle(0,0,90,175),new PIXI.Rectangle(90,0,90,175),new PIXI.Rectangle(190,0,90,175),new PIXI.Rectangle(290,0,90,175), new PIXI.Rectangle(190,0,90,175));
    
    dancerTexture.frame = run[0];
    dancer = new Sprite(dancerTexture);   
    dancer.position.set(window.innerWidth/2, window.innerHeight/1.4);
    dancer.scale.set(1, 1);
    dancer.anchor.set(0.5, 0.5);
    app.stage.addChild(dancer);

}
var af = 0, df = 1.7, maxFrame = 5;
function gameLoop() {
    var f = requestAnimationFrame(gameLoop);
    if (af >= maxFrame)
    {
      af = 0;
    } else {
      af += 1/df;
    }
    dancerTexture.frame = run[Math.floor(af)];
    dancer.position.set(window.innerWidth/2, window.innerHeight/2);
    app.stage.addChild(dancer);
  }
  
//   Start the game loop
  gameLoop();

// var af = 0, df = 1.7, maxFrame = 15;

// function gameLoop() {
//     var f = requestAnimationFrame(gameLoop);
//     if (af >= maxFrame)
//     {
//         af = 0;
//     } 
//     else {
//         af += 1/df;
//     }
//     dancerTexture.frame = run[Math.floor(af)];
//     dancer.position.set(window.innerWidth/2, window.innerHeight/heightDivider);
//     app.stage.addChild(dancer);
// }

// gameLoop();


// var Container = PIXI.Container,
// autoDetectRenderer = PIXI.autoDetectRenderer,
// loader = PIXI.loader,
// resources = PIXI.loader.resources,
// Sprite = PIXI.Sprite;
// var y = window.innerHeight, x = window.innerWidth;

// var stage = new Container(),
// renderer = autoDetectRenderer(window.innerWidth, window.innerHeight, {antialias: false, transparent: true, resolution: 1});
// document.body.appendChild(renderer.view);

// renderer.view.style.position = "absolute"
// renderer.view.style.display = "block";
// renderer.autoResize = true;
// // renderer.view.style.border = "10px dashed black"

// // loader.add("shaqImage", "2-01 (2).png").load(setup);
// loader.add("shaqImage", "shaqq.png").load(setup);

// var shaq, run = [], shaqTexture;

// var heightDivider = 1.4; 

// function setup() {
//     if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//         heightDivider = 1.2;
//     }
//     else if(/iPad/i.test(navigator.userAgent)){
//         heightDivider = 1.29;
//     }

//     shaqTexture = loader.resources["shaqImage"].texture;
//     // run.push (new PIXI.Rectangle(0,0,90,500),new PIXI.Rectangle(90,0,90,500),new PIXI.Rectangle(190,0,90,175),new PIXI.Rectangle(290,0,90,175), new PIXI.Rectangle(190,0,90,175));
//   // run.push (new PIXI.Rectangle(0,0,788,501), new PIXI.Rectangle(788,0,788,501)); 
//   var x = 0;
//   for(var i = 0; i < 15; i++){
//     run.push(new PIXI.Rectangle(x, 0, 788, 501));
//     x += 788;
//   }
//   shaqTexture.frame = run[0];
//   shaq = new Sprite(shaqTexture);
//   shaq.position.set(window.innerWidth/2, window.innerHeight/heightDivider);
//   // shaq.scale.set(0.39, 0.39);
//   shaq.scale.set(1.6, 1.6);
//   shaq.anchor.set(0.5, 0.5);
//   stage.addChild(shaq);
//   renderer.render(stage);
// }

// window.addEventListener("resize", function(){
//     // renderer.resize(window.innerWidth, window.innerHeight);

// //     var isMobile = {
// //       Android: function() {
// //           return navigator.userAgent.match(/Android/i);
// //       },
// //       BlackBerry: function() {
// //           return navigator.userAgent.match(/BlackBerry/i);
// //       },
// //       iOS_iPad: function() {
// //           return navigator.userAgent.match(/iPad/i);
// //       },
// //       iOS_iPhone_iPod: function() {
// //           return navigator.userAgent.match(/iPhone|iPod/i);
// //       },
// //       Opera: function() {
// //           return navigator.userAgent.match(/Opera Mini/i);
// //       },
// //       Windows: function() {
// //           return navigator.userAgent.match(/IEMobile/i);
// //       },
// //       any: function() {
// //           return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS_iPad() || isMobile.iOS_iPhone_iPod || isMobile.Opera() || isMobile.Windows());
// //       }
// //     };

// //   if(isMobile.iOS_iPad()) {
// //     // alert('Mobile');
// //     shaq.position.set(window.innerWidth/2, window.innerHeight/heightDivider); 1.19
// //   }
// //   else if(isMobile.any()){
// //     shaq.position.set(window.innerWidth/2, window.innerHeight/heightDivider); 1.2
// //   }
// //   else{
// //     shaq.position.set(window.innerWidth/2, window.innerHeight/heightDivider);
// //   }

//     shaq.position.set(window.innerWidth/2, window.innerHeight/heightDivider);

//     if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//         return;
//     }

//     renderer.resize(window.innerWidth, window.innerHeight);

// });

// var af = 0, df = 1.7, maxFrame = 15;

// function gameLoop() {
//     var f = requestAnimationFrame(gameLoop);
//     if (af >= maxFrame)
//     {
//       af = 0;
//     } 
//     else {
//       af += 1/df;
//     }
//     shaqTexture.frame = run[Math.floor(af)];
//     shaq.position.set(window.innerWidth/2, window.innerHeight/heightDivider);
//     renderer.render(stage);
//   }
  
//  // Start the game loop
//   gameLoop();
  
// var app = new PIXI.Application(window.innerWidth, window.innerHeight, { transparent: true });
// document.body.appendChild(app.view);

// // create a new Sprite from an image path
// var bunny = PIXI.Sprite.fromImage('1-01.png')

// bunny.scale.set(0.1, 0.1);
// // center the sprite's anchor point
// bunny.anchor.set(0.5);


// // move the sprite to the center of the screen
// bunny.x = app.renderer.width / 2;
// bunny.y = app.renderer.height / 2;

// app.stage.addChild(bunny);

// // Listen for animate update
// app.ticker.add(function(delta) {
//     // just for fun, let's rotate mr rabbit a little
//     // delta is 1 if running at 100% performance
//     // creates frame-independent tranformation
//     bunny.rotation += 0.1 * delta;
// });