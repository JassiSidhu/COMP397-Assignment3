/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/diver.ts" />
/// <reference path="objects/shell.ts" />
/// <reference path="objects/shark.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
var assets;
var manifest = [
    { id: "ocean", src: "assets/images/water.jpg" },
    { id: "diver", src: "assets/images/diver.png" },
    { id: "shell", src: "assets/images/shell1.png" },
    { id: "shark", src: "assets/images/shark.png" },
    { id: "power", src: "assets/audio/Powerup.wav" },
    { id: "eat", src: "assets/audio/thunder.ogg" },
    { id: "breath", src: "assets/audio/breathing.mp3" }
];
// Game Variables
var ocean;
var diver;
var shell;
var sharks = [];
// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}
// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop);
    // calling main game function
    main();
}
// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '330px';
    stats.domElement.style.top = '10px';
    document.body.appendChild(stats.domElement);
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    ocean.update();
    diver.update();
    shell.update();
    for (var shark = 0; shark < 3; shark++) {
        sharks[shark].update();
    }
    stage.update();
    stats.end(); // end measuring
}
// Our Main Game Function
function main() {
    //add ocean object to stage
    ocean = new objects.Ocean(assets.getResult("ocean"));
    stage.addChild(ocean);
    //add shell object to stage
    shell = new objects.Shell(assets.getResult("shell"));
    stage.addChild(shell);
    // add diver object to stage
    diver = new objects.Diver(assets.getResult("diver"));
    stage.addChild(diver);
    // add 3 shark objects to stage
    for (var shark = 0; shark < 3; shark++) {
        sharks[shark] = new objects.Shark(assets.getResult("shark"));
        stage.addChild(sharks[shark]);
    }
    console.log("Game running");
}
//# sourceMappingURL=game.js.map