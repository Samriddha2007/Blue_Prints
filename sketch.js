const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object,ground;
var box1,box2;
var pig1;

function setup() 
{
  createCanvas(800,400);
  engine = Engine.create();
  world  = engine.world;
  
  var options = 
  {
    isStatic:true
  }
  ground = Bodies.rectangle(400,390,800,20,options);
  World.add(world,ground);

  box1 = new Box(230,100,70,70);
  box2 = new Box(170,170,70,70);

  pig1 = new Pig(145,170);

}

function draw() 
{
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  box1.display();
  box2.display();

  pig1.display();
}