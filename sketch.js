
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var rightImg;
var ground;
var ball;

function preload()
{
 rightImg = loadImage("right.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
btn = createImg('right.png');
btn.position(10,20);
btn.size(30,30);
btn.mouseClicked(vForce);

ground = new ground(200,390,400,10);

var ball_options ={
	restitution : 0.87
}
ball = Bodies.circle(100,100,20,ball_options);
    World.add(world,ball);
    rectMode(CENTRE);
    ellipseMode(RADIUS);

	Engine.run(engine);
  

}


function draw() {
background(0);
ellipse(ball.position.x,ball.position.y,20);
ground.show();
right.Img.show();
Engine.update(engine);

  drawSprites();
 
}
function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:05,y:0});
}
function vForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.5});
}


