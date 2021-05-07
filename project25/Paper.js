class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		this.image = loadImage("crumpled paper.png")
		World.add(world, this.body);

	}
	display()
	{
			
			var Paperpos=this.body.position;		

			push()
			translate(Paperpos.x, Paperpos.y);
			rectMode(CENTER)
			//strokeWeight(3);
			fill("white")
			//ellipse(0,0,this.r, this.r);
			imageMode(CENTER)
			image(this.image,0,0,this.width,this.height)
		
			pop()
			
	}

}











