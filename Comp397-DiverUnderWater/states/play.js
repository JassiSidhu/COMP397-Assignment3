/// <reference path="../managers/assets.ts" />
var states;
(function (states) {
    var Play = (function () {
        function Play() {
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
            //add scoreboard
            scoreboard = new objects.ScoreBoard();
            //add collision manager
            collision = new managers.Collision();
        }
        Play.prototype.update = function () {
            ocean.update();
            diver.update();
            shell.update();
            for (var shark = 0; shark < 3; shark++) {
                sharks[shark].update();
                collision.check(sharks[shark]);
            }
            collision.check(shell);
            scoreboard.update();
            //stage.update();
        };
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map