import { detectCollision } from "./collision";

export default class Ball {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.image = document.getElementById("img_ball");
    this.position = {
      x: 10,
      y: 10
    };
    this.speed = {
      x: 2,
      y: 2
    };
    this.size = 20;
    this.game = game;
  }

  update(deltatime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //collision between ball and borders
    if (this.position.x < 0 || this.position.x + this.size > this.gameWidth) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y < 0 || this.position.y + this.size > this.gameHeight) {
      this.speed.y = -this.speed.y;
    }

    //collision between ball and paddle

    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
      //console.log("true");
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
}
