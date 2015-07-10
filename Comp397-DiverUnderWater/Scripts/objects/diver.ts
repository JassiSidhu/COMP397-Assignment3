
module objects {
    // Diver Class ..............................
    export class Diver extends objects.GameObject {
        // CONSTRUCTOR .............................
        constructor(imageString: string) {
            super(imageString);

            this.sound = "breath";

            this.x = 100;

            createjs.Sound.play(this.sound, {"loop": -1});
        }

        // PUBLIC METHODS .......................
        public update(): void {
            this.y = stage.mouseY; // position diver under mouse
            if (this.y < 90)        //diver should not go outside water
                this.y = 95;
        }

    }
} 