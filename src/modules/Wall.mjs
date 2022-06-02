export class Wall {
    constructor(x1, y1, x2, y2) {
        this.a = new Phaser.Math.Vector2(x1, y1);
        this.b = new Phaser.Math.Vector2(x2, y2);
    }

    show(graphics) {
        const line = new Phaser.Geom.Line(this.a.x, this.a.y, this.b.x, this.b.y);
        graphics.lineStyle(2, 0xffffff);
        graphics.strokeLineShape(line);
    }
}