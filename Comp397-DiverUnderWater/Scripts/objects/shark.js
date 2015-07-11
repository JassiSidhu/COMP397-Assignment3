/// <reference path="../managers/assets.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Shark Class ......................
    var Shark = (function (_super) {
        __extends(Shark, _super);
        // CONSTRUCTOR ...........................
        function Shark(imageString) {
            _super.call(this, imageString);
            this.name = "shark";
            this.sound = "eat";
            this.reset();
        }
        // PRIVATE METHODS .........................
        Shark.prototype.checkBounds = function () {
            // check if shark has left screen
            if (this.x < 0) {
                this.reset();
            }
        };
        Shark.prototype.reset = function () {
            this.y = 100 + Math.floor(Math.random() * 380); // start shark at random location
            this.x = 580; // start shark off stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4);
        };
        // PUBLIC METHODS .....................
        Shark.prototype.update = function () {
            this.y += this.dy; // moves shark across the stage
            this.x -= this.dx; // drifts shark up and down
            this.checkBounds();
        };
        return Shark;
    })(objects.GameObject);
    objects.Shark = Shark;
})(objects || (objects = {}));
//# sourceMappingURL=shark.js.map