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
/// <reference path="objects/scoreboard.ts" />


/// <reference path="../managers/collision.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;

// Game Variables
var ocean: objects.Ocean;
var diver: objects.Diver;
var shell: objects.Shell;
var sharks: objects.Shark[] = [];
var scoreboard: objects.ScoreBoard;

//Game Managers
var assets: managers.Asset;
var collision : managers.Collision;

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

    ocean.update();
    diver.update();
    shell.update();

    for (var shark = 0; shark < 3; shark++) {
        sharks[shark].update();
        collision.check(sharks[shark]);
    }

    collision.check(shell);
    scoreboard.update();

    stage.update();

    stats.end(); // end measuring
}



// Our Main Game Function
function main() {
    
    //add ocean object to stage
    ocean = new objects.Ocean(assets.loader.getResult("ocean"));
    stage.addChild(ocean);

    //add shell object to stage
    shell = new objects.Shell(assets.loader.getResult("shell"));
    stage.addChild(shell);

    // add diver object to stage
    diver = new objects.Diver(assets.loader.getResult("diver"));
    stage.addChild(diver);

    // add 3 shark objects to stage
    for (var shark = 0; shark < 3; shark++) {
        sharks[shark] = new objects.Shark(assets.loader.getResult("shark"));
        stage.addChild(sharks[shark]);
    }

    scoreboard = new objects.ScoreBoard();

    collision = new managers.Collision();


    console.log("Game running");
}