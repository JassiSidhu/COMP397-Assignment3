/// <reference path="../managers/assets.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Shell Class .......................
    var Shell = (function (_super) {
        __extends(Shell, _super);
        // CONSTRUCTOR.........................
        function Shell(imageString) {
            _super.call(this, imageString);
            this.name = "shell";
            this.sound = "power";
            this.dx = 5;
            this.reset();
        }
        // PRIVATE METHODS .....................
        Shell.prototype.checkBounds = function () {
            // check if shell has left screen
            if (this.x < 20) {
                this.reset();
            }
        };
        Shell.prototype.reset = function () {
            this.y = 100 + Math.floor(Math.random() * 380); // start shell at random location
            this.x = 600; // start shell off stage
        };
        // PUBLIC METHODS .......................
        Shell.prototype.update = function () {
            this.x -= this.dx; // moves shell across the stage
            this.checkBounds();
        };
        return Shell;
    })(objects.GameObject);
    objects.Shell = Shell;
})(objects || (objects = {}));
//# sourceMappingURL=shell.js.map