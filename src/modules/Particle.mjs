import { Ray } from "./Ray.mjs";
export class Particle{
    constructor(){
        this.pos = new Phaser.Math.Vector2(window.innerWidth / 2, window.innerHeight / 2);
        this.rays = [];
        for (var i = 0; i < 360; i += 10){
            var angle = Phaser.Math.Angle.Normalize(i);
            //console.log(angle);
            var ray = new Ray(this.pos, angle);
            this.rays.push(ray); 
        }
    }

    show(graphics){
        graphics.fillEllipse(this.pos.x, this.pos.y, 16, 16);
        graphics.strokeEllipse(this.pos.x, this.pos.y, 16, 16);
        
        for(let ray of this.rays){
            ray.show(graphics);
        }
    }
}