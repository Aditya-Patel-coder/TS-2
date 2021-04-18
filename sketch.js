const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var stand1;
var block2,block3,block4,block5,block6, block7, block8, block9, block10,block11,block12;
var polygon;
var slingShot;

function preload(){
    polygonImg = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


 ground=new  Ground(600,380,1200,10);
stand1 = new Stand(700,300,250,15)


 block1 = new Block(630,160,30,40);
 block2 = new Block(660,160,30,40);
 block3 = new Block(690,160,30,40);
 block4 = new Block(720,160,30,40);
 block5 = new Block(750,160,30,40);
 block6 = new Block(780,160,30,40);
 block7 = new Block(660,120,30,40);
 block8 = new Block(690,120,30,40);
 block9 = new Block(720,120,30,40);
 block10 = new Block(750,120,30,40);
 block11 = new Block(690,80,30,40);
 block12 = new Block(720,80,30,40);

 polygon= Bodies.circle(50,200,20)
 World.add(world,polygon);

 slingShot = new SlingShot(this.polygon,{x:100, y:200});

}
function draw(){
    background(0);
    Engine.update(engine);
    textSize(20)
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,55)
    ground.display();
    stand1.display();
    fill("purple")
    block1.display();
   
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    fill("orange")
    block7.display();
    block8.display();
    block9.display(); 
    block10.display();
    fill("yellow")
    block11.display();
    block12.display();

imageMode(CENTER);
 image(polygonImg,polygon.position.x,polygon.position.y,40,40)

    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
    
}
function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingShot.attach(this.polygon);
    }
}