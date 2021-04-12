import { detectCollision } from "./collision";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");
    this.width = 80;
    this.height = 24;
    this.position = position;
    this.game = game;
    this.markedtoremove = false;
  }

  update() {
    //collison between brick and ball
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markedtoremove = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
