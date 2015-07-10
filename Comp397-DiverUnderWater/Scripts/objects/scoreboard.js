/// <reference path="../typings/easeljs/easeljs.d.ts" />
var objects;
(function (objects) {
    var ScoreBoard = (function () {
        //Constructor...
        function ScoreBoard() {
            //Public properties..
            this.lives = 5;
            this.score = 0;
            this.liveLabel = new createjs.Text("Lives: 5 ", "40px Consolas", "#ffffff00");
            this.scoreLabel = new createjs.Text("Scores:  ", "40px Consolas", "#ffffff00");
            this.liveLabel.x = 350;
            stage.addChild(this.liveLabel);
            stage.addChild(this.scoreLabel);
        }
        ScoreBoard.prototype.update = function () {
            this.liveLabel.text = "Live:  " + this.lives;
            this.scoreLabel.text = "Scores:  " + this.score;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map