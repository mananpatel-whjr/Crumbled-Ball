class paper
{
	constructor(x,y)
	{
		var options={
			isStatic:false			
			}
		this.x=x;
		this.y=y;
		
		this.body=Bodies.circle(x, y,20, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var Pos=this.body.position;		
            var angle = this.body.angle
			push()
			translate(Pos.x, Pos.y);
            rotate (angle)
			ellipseMode(RADIUS)
			//strokeWeight(4);
			fill(128,128,128)
			ellipse(0,0,20,20);
			pop()
			
	}

}