function Fire(){
  this.x;
  this.y;
  this.point = [];
  this.xSpeed;
  this.ySpeed;
  var gameSpeed = 30;
  var v = 0;
  var u = 0;
  blockSize1 = 7;
  this.pickLocation = function(){

  }

  this.update = function(){
    v++
    if(frameCount%gameSpeed==0){
      u = v;
      if(u >= 1){
        this.point[u] = createVector(this.x, this.y);
      }
      this.point[u].xSpeed = 0;
      this.point[u].ySpeed = 0;
      var col = (Math.floor(Math.random() * 500) + 0);
      var row = (Math.floor(Math.random() * 500) + 0);
      var ran = (Math.floor(Math.random() * 4) + 1);
      if(ran == 1){
        this.point[u].x = col;
        this.point[u].y = 0;
        this.point[u].ySpeed = 1;
      }
      if(ran == 2){
        this.point[u].y = row;
        this.point[u].x = 0;
        this.point[u].xSpeed = 1;
      }
      if(ran == 3){
        this.point[u].y = row;
        this.point[u].x = 500-blockSize1;
        this.point[u].xSpeed = -1;
      }
      if(ran == 4){
        this.point[u].x = col;
        this.point[u].y = 500-blockSize1;
        this.point[u].ySpeed = -1;
      }
    }
  }
  this.endGame = function(bubblex1, bubblex2, bubbley1, bubbley2){
    for (var i in this.point){
      if(this.point[i].x>=bubblex1 && this.point[i].x<=bubblex2 && this.point[i].y >= bubbley1 && this.point[i].y <= bubbley2){
        noLoop();
        fill("#ffffff");
        textSize(32);
        text("GAME OVER", 150, 250);
        textSize(18);
        text("Press R to restart", 180, 280);
      }
    }
  }

  this.show = function(bubblex1, bubblex2, bubbley1, bubbley2){
    for (var i in this.point){
      this.point[i].x += this.point[i].xSpeed;
      this.point[i].y += this.point[i].ySpeed;
      strokeWeight(2)
      fill("#ff0000");
      rect(this.point[i].x, this.point[i].y,blockSize1, blockSize1, 10, 10)
    }
  }
}
