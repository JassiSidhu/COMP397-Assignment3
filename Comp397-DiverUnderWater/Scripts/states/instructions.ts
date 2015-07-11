/// <reference path="../managers/assets.ts" />

module states {
    //INSTRUCTIONS CLASS..............
    export class Instructions {
        //CONSTRUCTOR..............
        constructor() {
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

            //Add objects of instruction page
            instructionsPage = new createjs.Bitmap(assets.loader.getResult("instructionsPage"));
            stage.addChild(instructionsPage);

           
            backButton = new objects.Button(assets.loader.getResult("back"), 440, 340, false);
            stage.addChild(backButton);
            backButton.on("click", backClicked);
        }
        
        //PUBLIC METHODS.......
        public update() {
            ocean.update();
            shell.update();
            for (var shark = 0; shark < 3; shark++) {
                sharks[shark].update();
            }
        }
    }
}  