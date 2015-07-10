/// <reference path="../typings/easeljs/easeljs.d.ts" />
module objects {

    export class ScoreBoard {
        //Public properties..
        public lives: number = 5;
        public score: number = 0;

        //Private properties....
        private liveLabel: createjs.Text;
        private scoreLabel: createjs.Text;

        //Constructor...
        constructor()
        {
            this.liveLabel = new createjs.Text("Lives: 5 ","40px Consolas","#ffffff00");
            this.scoreLabel = new createjs.Text("Scores:  ", "40px Consolas", "#ffffff00");
            this.liveLabel.x = 350;
            stage.addChild(this.liveLabel);
            stage.addChild(this.scoreLabel);

        }

        update()
        {
            this.liveLabel.text = "Live:  " + this.lives;
            this.scoreLabel.text = "Scores:  " + this.score;
        }

    }
}