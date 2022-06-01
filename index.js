import { Ray } from "./src/modules/Ray.mjs";
import { Wall } from "./src/modules/Wall.mjs";
var wall;
var ray;
var config = {
    type: Phaser.WEBG,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);
var pointer = new Phaser.Input.Pointer(new Phaser.Input.InputManager(game, config), 1);
var graphics;

function preload ()
{

}

function create ()
{
    wall = new Wall(300, 100, 300, 300);
    ray = new Ray(100, 200);
    pointer = this.input.activePointer;
    graphics = this.add.graphics();
}

function update(){
    graphics.clear();
    ray.lookAt(pointer.position.x, pointer.position.y);
    var point = ray.cast(wall)
    if (point){
        const circle = new Phaser.Geom.Circle(point.x, point.y, 20)
        graphics.strokeCircle(point.x, point.y, 20);
    }
    wall.show(graphics);
    ray.show(graphics);
}