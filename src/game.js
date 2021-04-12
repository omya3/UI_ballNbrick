import Paddle from "/src/paddle";
import InputHandler from "/src/inputhandler";
import Ball from "/src/ball";
//import Brick from "/src/brick";
import { level1, buildlevels } from "/src/levels";

export default class Game {
  constructor(GAME_HEIGHT, GAME_WIDTH) {
    this.gameWidth = GAME_WIDTH;
    this.gameHeight = GAME_HEIGHT;
  }

  start() {
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);
    let bricks = buildlevels(this, level1);
    this.gameObjects = [this.ball, this.paddle, ...bricks];

    new InputHandler(this.paddle);
  }

  update(deltatime) {
    // this.paddle.update(deltatime);
    // this.ball.update(deltatime);

    this.gameObjects.forEach(object => object.update(deltatime));
    this.gameObjects = this.gameObjects.filter(
      object => !object.markedtoremove
    );
  }

  draw(ctx) {
    //this.paddle.draw(ctx);
    //this.ball.draw(ctx);

    this.gameObjects.forEach(object => object.draw(ctx));
  }
}
