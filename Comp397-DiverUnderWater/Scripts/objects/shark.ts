/// <reference path="../../managers/assets.ts" />

module objects {
    // Shark Class ......................
    export class Shark extends objects.GameObject {

        // CONSTRUCTOR ...........................
        constructor(imageString: string) {
            super(imageString);

            this.name = "shark";
            this.sound = "eat";

            this.reset();
        }

        // PRIVATE METHODS .........................
        private checkBounds(): void {

            // check if shark has left screen
            if (this.x < 0) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = 100 + Math.floor(Math.random() * 380); // start shark at random location
            this.x = 580; // start shark off stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) ;
        }


        // PUBLIC METHODS .....................
        public update(): void {

            this.y += this.dy; // moves shark across the stage
            this.x -= this.dx; // drifts shark up and down
            this.checkBounds();
        }
    }
}  