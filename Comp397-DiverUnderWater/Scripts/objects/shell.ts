/// <reference path="../managers/assets.ts" />

module objects {
    // Shell Class .......................
    export class Shell extends objects.GameObject {
        // CONSTRUCTOR.........................
        constructor(imageString: string) {
            super(imageString);

            this.name = "shell";
            this.sound = "power";
            this.dx = 5;

            this.reset();
        }

        // PRIVATE METHODS .....................
        private checkBounds(): void {

            // check if shell has left screen
            if (this.x < 20) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = 100 + Math.floor(Math.random() * 380); // start shell at random location
            this.x = 600; // start shell off stage
        }


        // PUBLIC METHODS .......................
        public update(): void {

            this.x -= this.dx; // moves shell across the stage
            this.checkBounds();
        }
    }
} 