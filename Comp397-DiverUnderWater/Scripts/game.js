/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="../managers/assets.ts" />
/// <reference path="../utility/utility.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/diver.ts" />
/// <reference path="objects/shell.ts" />
/// <reference path="objects/shark.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../states/start.ts" />
/// <reference path="../states/play.ts" />
/// <reference path="../states/gameover.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
// Game Variables
var ocean;
var diver;
var shell;
var sharks = [];
var scoreboard;
//state variables
var currentState;
//Game Managers
var assets;
var collision;
//Three game states
var playState;
var startState;
var gameOverState;
var start;
var gameOver;
//buttons
var tryButton;
var playButton;
// Preloader Function
function preload() {
    assets = new managers.Asset();
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
    stats.domElement.style.left = '6500px';
    stats.domElement.style.top = '10px';
    document.body.appendChild(stats.domElement);
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    currentState.update();
    stage.update();
    stats.end(); // end measuring
}
//play function
function playButtonClicked(event) {
    stage.removeAllChildren();
    changeState(1);
}
//play function
function tryButtonClicked(event) {
    stage.removeAllChildren();
    changeState(1);
}
function changeState(state) {
    switch (state) {
        case 0:
            startState = new states.StartState();
            currentState = startState;
            break;
        case 1:
            playState = new states.Play();
            currentState = playState;
            break;
        case 2:
            gameOverState = new states.GameOver();
            currentState = gameOverState;
            break;
    }
}
// Our Main Game Function
function main() {
    startState = new states.StartState();
    currentState = startState;
    console.log("Game running");
}
//# sourceMappingURL=game.js.map