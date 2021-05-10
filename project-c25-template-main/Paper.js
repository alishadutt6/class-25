class Paper
{
	constructor(x,y){

        this.image = loadImage("Paper.png");
    
		var options={
			isStatic:false,		
            restitution:0.3,
            friction:0,
            density:1.2
        }
		this.body = Bodies.rectangle(x, y, 45, 45, options);
        this.width = 45;
         this.height = 45;
         
         World.add(world, this.body);


    
    }

	display()
	{
			
            var Pos=this.body.position;	
            var Angle=this.body.Angle;	

			push()
			translate(Pos.x, Pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			imageMode(CENTER)
			image(this.image,0,0, this.width, this.height);
			//rect(0,0,this.w, this.h);
			pop()
			
	}

}

















































