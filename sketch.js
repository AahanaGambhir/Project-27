
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	myWorld = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 200, 600, 40);
	bobObject1 = new Bob(200, 500)
	bobObject2 = new Bob(300, 600)
	bobObject3 = new Bob(400, 600)
	bobObject4 = new Bob(500, 600)
	bobObject5 = new Bob(600, 600)

//	Engine.run(engine);
  
}


function draw() {
  background(0);  

Engine.update(engine);

roof.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();


}
