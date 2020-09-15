var yilan;
var yemek;
var ates;
var shrink;
var hiz = 70;
var blockSize = 10;
var stopper = 0;
function setup() {
  var myCanvas = createCanvas(500,500);
  myCanvas.parent("gamediv");
  frameRate(hiz);
  img = loadImage('block.jpg');
  shrink = new Shrink();
  yilan = new Bubble(new Player());
  yemek = new Yemek();
  ates = new Fire();
  yemek.pickLocation();
}

function draw() {
  background("#000000");
  yilan.eatFood(yemek);
  yilan.update();
  yilan.show(img);
  yemek.show();
  shrink.show();
  ates.update(yilan.x,yilan.x+blockSize,yilan.y,yilan.y+blockSize);
  ates.endGame(yilan.x,yilan.x+blockSize,yilan.y,yilan.y+blockSize);
  ates.show();
}

function keyPressed() {
  if (keyCode === 82) {
    location.reload();
  }
  if (keyCode === 83) {
    if (stopper % 2 === 0){
      noLoop();
      stopper+=1;
      fill("#ffffff");
      text("PAUSED", 200, 300);
      textSize(18);
      text("Press S to continue", 228, 330);
    }
    else{
      loop();
      stopper+=1;
    }
  }
}

function mouseMoved() {
  noCursor();
  yilan.x =mouseX - blockSize/2;
  yilan.y =mouseY - blockSize/2;
}
