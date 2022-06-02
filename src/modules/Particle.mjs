import { Ray } from "./Ray.mjs";
export class Particle{
    constructor(pos,intensity = 200){
        this.pos = new Phaser.Math.Vector2(window.innerWidth / 2, window.innerHeight / 2);
        this.rays = [];
        this.intensity = intensity;
        for (var i = 0; i < 360; i += 0.1){
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
            let d;
            for (let wall of walls) {
                
                var point = ray.cast(wall);
                
                if(point){
                    d = this.pos.distance(point);

                    if(d < record){
                        record = d;
                        closest = point;
                    }


                }
            }
            if(closest){
                var line = new Phaser.Geom.Line(this.pos.x, this.pos.y, closest.x, closest.y);
                if(this.pos.distance(closest) > this.intensity){
                    var line = Phaser.Geom.Line.Extend(line, 0, -(this.pos.distance(closest) - this.intensity));
                }
                graphics.lineGradientStyle(1, 0xffffffff, 0xffffffff, 0xFFFFFF00, 0xFFFFFF00, 1);
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