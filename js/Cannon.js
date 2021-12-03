class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonbase=loadImage("assets/cannonBase.png")
    this.cannon=loadImage("assets/canon.png")
  }
  display(){
    
    push ()
    translate (this.x, this.y)
    rotate (this.angle)
    imageMode(CENTER)
    image(this.cannon,0,0, this.width, this.height)
    pop ()
    image (this.cannonbase, 70, 30, 200, 200)
  }
}
