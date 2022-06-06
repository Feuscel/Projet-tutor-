export class Wall {
    /**
     * Create a wall
     * @param { Number } x1 
     * @param { Number } y1 
     * @param { Number } x2 
     * @param { Number } y2 
     */
    constructor(x1, y1, x2, y2) {
        this.a = new Phaser.Math.Vector2(x1, y1);
        this.b = new Phaser.Math.Vector2(x2, y2);
    }
    /**
     * Create a wall
     * @param { Graphics } graphics 
     */
    show(graphics) {
        const line = new Phaser.Geom.Line(this.a.x, this.a.y, this.b.x, this.b.y);
        graphics.lineStyle(2, 0xffffff);
        graphics.strokeLineShape(line);
    }
}