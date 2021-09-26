
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObject;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,10);
	dustbinObj=new dustbin(1200,650);
	paperObject = new Paper(30); 
	
  
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();

}
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:250,y:-200});
	}
}

