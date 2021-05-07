
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
var render;


function setup() {
	createCanvas(1600, 800);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	box1 = new Box(1250,600,200,20)
	box2 = new Box(1350,600,200,200)
	box3 = new Box(1150,600,20,100)
	paperObject=new Paper(200,350,40);
	groundObject=new Ground(800,790,1600,20);
	//Create a Ground

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 800,
		  wireframes: false
		}
	  });
  
	
	
Engine.run(engine);
Render.run(render)
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  box1.display();
  box2.display();
  box3.display();
  paperObject.display();
  groundObject.display();

  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





