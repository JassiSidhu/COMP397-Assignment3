/// <reference path="../managers/assets.ts" />

module objects {
    //BUTTON CLASS..........
    export class Button extends createjs.Bitmap {
        //CONSTRUCTOR.........
        constructor(imageString: string, x: number, y: number, centered: boolean) {
            super(imageString);

            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        //PUBLIC METHODS
        public setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        public onButtonOver() {
            this.alpha = 0.8;
        }

        public onButtonOut() {
            this.alpha = 1;
        }
    }
}  