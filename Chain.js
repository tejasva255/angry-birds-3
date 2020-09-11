class Chain {
	constructor(objA,ptB){
		var options = {
			bodyA:objA,
			pointB:ptB,
			stiffness:0.1,
			length:20
		
		}
		this.chain=Matter.Constraint.create(options);
		World.add(world,this.chain)
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
	}
	display(){
		image(this.sling1,325,4);
		image(this.sling2,300,4);
		push()
		stroke(48,22,8)
		if (this.chain.bodyA) {


		var pointA=this.chain.bodyA.position
		var pointB=this.chain.pointB
		if (this.chain.bodyA.position.x<345) {
			strokeWeight(7)
			line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
			line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3)
			image(this.sling3,pointA.x-30,pointA.y-10,15,30)
		
		}
		else{
			strokeWeight(3)
			line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)
			line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3)
			image(this.sling3,pointA.x+25,pointA.y-10,15,30)
		}
		pop()
			}
		}
			fly(){
				this.chain.bodyA=null
			}
}