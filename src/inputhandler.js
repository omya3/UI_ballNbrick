export default class InputHandler {
  constructor(paddle) {
    //movement of paddle
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          //alert("move left");
          paddle.moveLeft();
          break;
        case 39:
          //alert("move right");
          paddle.moveRight();
          break;
      }
    });

    //stopping the paddle
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          paddle.stop();
          break;
        case 39:
          paddle.stop();
          break;
      }
    });
  }
}
