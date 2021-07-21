const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1360, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(580,450);
	bob2 = new Bob(630, 450);
	bob3 = new Bob(680, 450);
	bob4 = new Bob(730, 450);
	bob5 = new Bob(780, 450);

	var roof_options={
		isStatic:true			
	}
    roof = Bodies.rectangle(680,100,300,20,roof_options);
    World.add(world,roof);

    rope1= new Rope(bob1.body,roof,-50*2,0);
	rope2= new Rope(bob2.body,roof,-50,0);
	rope3= new Rope(bob3.body,roof,0,0);
	rope4= new Rope(bob4.body,roof,50,0);
	rope5= new Rope(bob5.body,roof,50*2,0);

	

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");
  Engine.update(engine);
   

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
    
  
	 
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	bob1.display(); 
	bob2.display(); 
	bob3.display();
	bob4.display();
	bob5.display(); 
    
  //create ellipse shape for multiple bobs here
text("Press 'UP' arrow to see the bobs move ->", 100,100);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode = UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-100,y:-100})
	}
}