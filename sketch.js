
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;
var box1,box2,box3
var papper
var ground
var launcher


function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	fill("blue")
	ground = Bodies.rectangle(width/2, height, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	 
	
	
	box1=new Box(400,400,200,20 )
	box2=new Box(510,360,20,100);
	box3=new Box(25003       ,360,20,100);

	papper=new Papper(100,50)

	launcher = new Launcher(papper.body,{x:300,y:100});
  

}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
	rect(ground.position.x,ground.position.y,800,10)

	papper.display();
  box1.display();
  box2.display();
  box3.display();
  launcher.display();
  
  text("KEEP UR CITY CLEENNNNNNNNNN",350,100)
 
  drawSprites();
 
}

function mouseDragged (){
	Matter.Body.setPosition(papper.body,{x:mouseX,y:mouseY})
	
	
	}
	
	function mouseReleased (){
		launcher.fly()
	}
	