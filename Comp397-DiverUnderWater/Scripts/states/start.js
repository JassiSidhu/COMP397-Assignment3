/// <reference path="../managers/assets.ts" />
var states;
(function (states) {
    //STARTSTATE CLASS
    var StartState = (function () {
        //CONSTRUCTOR.........
        function StartState() {
            //add ocean object to stage
            ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            stage.addChild(ocean);
            //add shell object to stage
            shell = new objects.Shell(assets.loader.getResult("shell"));
            stage.addChild(shell);
            // add 3 shark objects to stage
            for (var shark = 0; shark < 3; shark++) {
                sharks[shark] = new objects.Shark(assets.loader.getResult("shark"));
                stage.addChild(sharks[shark]);
            }
            //Add start objects....
            start = new createjs.Bitmap(assets.loader.getResult("start"));
            stage.addChild(start);
            instructionsButton = new objects.Button(assets.loader.getResult("instructions"), 240, 340, false);
            stage.addChild(instructionsButton);
            instructionsButton.on("click", instructionsClicked);
            playButton = new objects.Button(assets.loader.getResult("play"), 240, 200, false);
            stage.addChild(playButton);
            playButton.on("click", playButtonClicked);
        }
        //PUBLIC METHODS........
        StartState.prototype.update = function () {
            ocean.update();
            shell.update();
            for (var shark = 0; shark < 3; shark++) {
                sharks[shark].update();
            }
        };
        return StartState;
    })();
    states.StartState = StartState;
})(states || (states = {}));
//# sourceMappingURL=start.js.map