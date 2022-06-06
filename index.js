import { Wall } from "./src/modules/objects/Wall.mjs";
import { Particle } from "./src/modules/objects/light/Particle.mjs";
var walls = [];
var particle;
var config = {
  type: Phaser.WEBGL,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

var pointer = new Phaser.Input.Pointer(
  new Phaser.Input.InputManager(game, config),
  1
);
var graphics;
/**
 * Draw all object
 */
function draw() {
  graphics.clear();
  for (let wall of walls) {
    wall.show(graphics);
  }
  particle.look(walls, graphics);
  particle.show(graphics);
}
/**
 * Preload object
 */
function preload() {
  console.log("test");
}
/**
 * Create all Game.Object
 */
function create() {
  graphics = this.add.graphics();
  for (var i = 0; i < 5; i++) {
    let x1 = Phaser.Math.Between(1, game.config.width);
    let x2 = Phaser.Math.Between(1, game.config.width);
    let y1 = Phaser.Math.Between(1, game.config.height);
    let y2 = Phaser.Math.Between(1, game.config.height);
    walls.push(new Wall(x1, y1, x2, y2));
  }
  walls.push(new Wall(0, 0, game.config.width, 0));
  walls.push(
    new Wall(game.config.width, 0, game.config.width, game.config.height)
  );
  walls.push(
    new Wall(game.config.width, game.config.height, 0, game.config.height)
  );
  walls.push(new Wall(0, game.config.height, 0, 0));
  particle = new Particle(graphics);
  pointer = this.input.activePointer;
}

/**
 * Upadte canvas everytime the game
 */
function update() {
  particle.update(pointer.x, pointer.y);
  draw();
}

