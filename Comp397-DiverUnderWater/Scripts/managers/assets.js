var managers;
(function (managers) {
    //ASSET CLASS
    var Asset = (function () {
        //CONSTRUCTOR
        function Asset() {
            this.manifest = [
                { id: "ocean", src: "assets/images/water.jpg" },
                { id: "diver", src: "assets/images/diver.png" },
                { id: "shell", src: "assets/images/shell1.png" },
                { id: "shark", src: "assets/images/shark.png" },
                { id: "play", src: "assets/images/play.png" },
                { id: "tryAgain", src: "assets/images/tryAgain.png" },
                { id: "back", src: "assets/images/back.png" },
                { id: "instructions", src: "assets/images/instruction.png" },
                { id: "instructionsPage", src: "assets/images/instructionPage.png" },
                { id: "gameOver", src: "assets/images/gameOver.png" },
                { id: "start", src: "assets/images/start.png" },
                { id: "power", src: "assets/audio/Powerup.wav" },
                { id: "eat", src: "assets/audio/thunder.ogg" },
                { id: "breath", src: "assets/audio/breathing.mp3" }
            ];
            this.preload();
        }
        Asset.prototype.preload = function () {
            //load manifest
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
        };
        return Asset;
    })();
    managers.Asset = Asset;
})(managers || (managers = {}));
//# sourceMappingURL=assets.js.map