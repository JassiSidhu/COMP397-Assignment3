/// <reference path="../managers/assets.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Diver Class ..............................
    var Diver = (function (_super) {
        __extends(Diver, _super);
        // CONSTRUCTOR .............................
        function Diver(imageString) {
            _super.call(this, imageString);
            this.sound = "breath";
            this.x = 100;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        // PUBLIC METHODS .......................
        Diver.prototype.update = function () {
            this.y = stage.mouseY; // position diver under mouse
            if (this.y < 90)
                this.y = 95;
        };
        return Diver;
    })(objects.GameObject);
    objects.Diver = Diver;
})(objects || (objects = {}));
//# sourceMappingURL=diver.js.map