class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
		'density':0.3,
        'frictuion':1,
	}
		this.x=x;
		this.y=y;
		this.r=15
		this.body=Bodies.circle(x,y,this.r, options);
        this.color=color(random(0,255),random(0,255),random(0,255));
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
		   
        fill(this.color);
			//draw the ellipse here to display the rubber ball
            ellipse (0,0,this.r,this.r);
			pop();
	}

}