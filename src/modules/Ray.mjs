export class Ray{
    constructor(x, y){
        this.pos = new Phaser.Math.Vector2(x,y);
        this.dir = new Phaser.Math.Vector2(1,0);
        this.graphics = null;
    }

    cast(wall) {
        const x1 = wall.a.x;
        const y1 = wall.a.y;
        const x2 = wall.b.x;
        const y2 = wall.b.y;

        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + this.dir.x;
        const y4 = this.pos.y + this.dir.y;

        const den = ( x1 - x2 ) * ( y3 - y4 ) - ( y1 - y2 ) * ( x3 - x4 );
        if (den == 0) return;
        const t = ( ( x1 - x3 ) * ( y3 - y4 ) - ( y1 - y3 ) * ( x3 - x4 ) ) / den;
        const u = -( ( x1 - x2 ) * ( y1 - y3 ) - ( y1 - y2 ) * ( x1 - x3 )) / den;
        if(t > 0 && t < 1 && u > 0){
            const x = x1 + t * ( x2 - x1 );
            const y = y1 + t * ( y2 - y1 );
            const point = new Phaser.Math.Vector2(x, y);
            return point;
        } else {
            return;
        } 
    }

    lookAt(x, y){
        this.dir.x = x - this.pos.x;
        this.dir.y = y - this.pos.y;
        this.dir.normalize();
    }

    show(graphics) {
        const line = new Phaser.Geom.Line(0, 0, this.dir.x * 10, this.dir.y * 10);
        graphics.translateCanvas(this.pos.x, this.pos.y);
        graphics.lineStyle(2, 0xffffff);
        graphics.strokeLineShape(line);
    }
}