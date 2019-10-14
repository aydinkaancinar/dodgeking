function Player(){
  this.size = 20;
  this.x = 0;
  this.y = 0;

  this.draw = function(size, xCo, yCo){
    this.size = size
    this.x = xCo
    this.y = yCo
    fill("#A40009");
    rect(this.x, this.y, this.size, this.size)
    stroke("#000000");
    strokeWeight(this.size/10);
    rect(this.x + this.size/6, this.y + this.size/5, this.size/4, this.size/4, 100)
    rect(this.x + this.size - this.size/6 - this.size/4, this.y + this.size/5, this.size/4, this.size/4, 100)
    rect(this.x + this.size/4, this.y + this.size/1.8, this.size/2, this.size/4, 100)
    line(this.x + this.size/4, this.y + this.size/6.5, this.x + this.size/2, this.y + this.size/3.2)
    line(this.x + this.size - this.size/4, this.y + this.size/6.5, this.x + this.size/2, this.y + this.size/3.2)
  }
}
