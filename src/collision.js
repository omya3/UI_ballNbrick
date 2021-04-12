export function detectCollision(ball, gameobject) {
  let bottomball = ball.position.y + ball.size;
  let topofball = ball.position.y;

  let topofobject = gameobject.position.y;
  let leftofobject = gameobject.position.x;
  let rightofobject = gameobject.position.x + gameobject.width;
  let bottomofobject = gameobject.position.y + gameobject.height;

  if (
    bottomball >= topofobject &&
    topofball <= bottomofobject &&
    ball.position.x >= leftofobject &&
    ball.position.x + ball.size <= rightofobject
  ) {
    return true;
  } else {
    return false;
  }
}
