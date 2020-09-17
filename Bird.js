class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory = []
    this.smokeImage= loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    var pos = this.body.position
    if (pos.x>200 && this.body.velocity.x>10) {  	
    var position = [pos.x,pos.y]
    this.trajectory.push(position)
    }

  for (var i = 0; i < this.trajectory.length; i++) {
 
  	
  	image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])
  }
    console.log(this.trajectory)
  }
}
