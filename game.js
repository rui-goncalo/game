var myGamePiece;
var myScore;

function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 120);
  myGamePiece.gravity = 0.05;
  myScore = new component("30px", "Consolas", "black", 280, 40, "text");
  myGameArea.start();
}

function updateGameArea() {
  myGameArea.clear();
  myGamePiece.newPos();
  myGamePiece.update();
  myScore.text = "SCORE: " + myGameArea.frameNo;
  myScore.update();
  myGameArea.frameNo += 1;
}
