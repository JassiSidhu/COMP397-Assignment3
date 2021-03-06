/// <reference path="assets.ts" />
var managers;
(function (managers) {
    var Collision = (function () {
        //CONSTRUCTOR ................
        function Collision() {
        }
        //PUBLIC METHODS ....................
        // check the distance between diver and any other game object
        Collision.prototype.check = function (gameObject) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = diver.x;
            p1.y = diver.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;
            if (utility.distance(p1, p2) < ((diver.height * 0.5) + (gameObject.height * 0.5))) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "shark") {
                        scoreboard.lives--;
                        if (scoreboard.lives == 0)
                            changeState(2);
                    }
                    if (gameObject.name == "shell") {
                        scoreboard.score += 100;
                    }
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map