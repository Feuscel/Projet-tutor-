import { Ray } from "./Ray.mjs";
export class Particle{
    constructor(pos){
        this.pos = new Phaser.Math.Vector2(window.innerWidth / 2, window.innerHeight / 2);
        this.rays = [];
        for (var i = 0; i < 360; i += 1){
            var ray = new Ray(this.pos, i);
            this.rays.push(ray); 
        }
    }

    update(x, y) {
        this.pos.x = x;
        this.pos.y = y;
    }

    look(walls, graphics) {
        for (let ray of this.rays){
            let closest = null;
            let record = Infinity;
            for (let wall of walls) {
                
                var point = ray.cast(wall);

                if(point){
                    const d = this.pos.distance(point);

                    if(d < record){
                        record = d;
                        closest = point;
                    }


                }
            }
            if(closest){
                const line = new Phaser.Geom.Line(this.pos.x, this.pos.y, closest.x, closest.y);
                graphics.strokeLineShape(line);
            }
        }

    }

    show(graphics){
        for(let ray of this.rays){
            ray.show(graphics);
        }
    }
}