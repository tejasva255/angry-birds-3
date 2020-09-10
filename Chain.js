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

	}
	display(){
		stroke("red")
		if (this.chain.bodyA) {


		var pointA=this.chain.bodyA.position
		var pointB=this.chain.pointB
		line(pointA.x,pointA.y,pointB.x,pointB.y)
		}
			}
			fly(){
				this.chain.bodyA=null
			}
}