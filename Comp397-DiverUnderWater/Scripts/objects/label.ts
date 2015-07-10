
module objects {
    export class Label extends createjs.Text {
        constructor(x: number, y: number, labelText: string) {
            super(labelText, "40 px Consolas","#FFFFFF00");
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
    }
}  