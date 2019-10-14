var yilan;
var yemek;
var ates;
var shrink;
var hiz = 70;
var blockSize = 10;
function setup() {
  createCanvas(600,600);
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

function mouseMoved() {
  noCursor();
  yilan.x =mouseX - blockSize/2;
  yilan.y =mouseY - blockSize/2;
}
