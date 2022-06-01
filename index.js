import { Wall } from "./src/modules/Wall.mjs";
import { Particle } from "./src/modules/Particle.mjs";
var wall;
var particle;
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
    particle = new Particle();
    pointer = this.input.activePointer;
    graphics = this.add.graphics();
    // graphics.lineStyle(5, 0xFF00FF);
    // graphics.fillStyle(0xffffff);

}

function update(){
    graphics.clear();
    wall.show(graphics);
    particle.show(graphics);
}