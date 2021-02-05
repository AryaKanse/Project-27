
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(600,500);
	
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(300,70,300,30);
	
  bob1 = new bob(200,375,50);
	bob2 = new bob(250,375,50);
	bob3 = new bob(300,375,50);
	bob4 = new bob(350,375,50);
  bob5 = new bob(400,375,50);
  
	rope2 = new rope(bob2.body,roof.body,-50*1, 0)
	rope1 = new rope(bob1.body,roof.body,-50*2, 0)
	rope3 = new rope(bob3.body,roof.body,-0, 0)
	rope4 = new rope(bob4.body,roof.body,50*1, 0)
	rope5 = new rope(bob5.body,roof.body,50*2, 0)

 
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  
  drawSprites(); 
  stroke("black");
  strokeWeight(1); 
  fill("black");
  textSize(20);
  textFont("Georgia");
  text("Press LEFT arrow to swing the bob",160,430);
  
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-195});
  }
  
}