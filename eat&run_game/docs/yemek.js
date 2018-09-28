function Yemek(){
  this.x;
  this.y;
  var counter = 0;
  blockSize2 = 7;
  this.pickLocation = function(){
    var col = (Math.floor(Math.random() * 500) + 100);
    var row = (Math.floor(Math.random() * 500) + 100);
    this.x = col - col%20;
    this.y = row - row%20;
    counter++;
  }
  this.show = function(){
      fill("#33cc33");
      rect(this.x, this.y, blockSize2, blockSize2, 10, 10)
    }
  }
