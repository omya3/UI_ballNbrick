import Game from "/src/game";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;
//creating a paddle object
//console.log('h');
let game = new Game(GAME_HEIGHT, GAME_WIDTH);
game.start();
let lasttime = 0;

function gameLoop(timestamp) {
  let deltatime = timestamp - lasttime;
  lasttime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltatime);
  game.draw(ctx);
  // requestAnimationFrame provides the timestamp
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
