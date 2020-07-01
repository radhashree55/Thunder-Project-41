const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var umbimg,thunder1,thunder2,thunder3,thunder4;
let drop = [];
var maxDrops = 300;

function preload(){
  umbimg = loadImage("umb.png");
  thunder1 = loadImage("thunder1.png");
  thunder2 = loadImage("thunder2.png");
  thunder3 = loadImage("thunder3.png");
  thunder4 = loadImage("thunder4.png");
}

function setup(){
    createCanvas(400,600)
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,530,140);

    for (let i = 0; i < maxDrops; i++) {
        drop[i] = new Drop; 
      }
}

function draw(){
    background(0);
    Engine.update(engine);

    for (let i = 0; i < maxDrops; i++) {
        drop[i].display();
        drop[i].fall();
      }

    umbrella.display()
    spawnThunder();
    drawSprites();
}   

function spawnThunder(){
  if(frameCount % 80===0){
    var thunderGO = createSprite(random(100,300),90,20,20);
    var rand = Math.round(random(1,4));

    switch(rand) {
      case 1:
        thunderGO.addImage("thunder1",thunder1);
        break;
      case 2:
        thunderGO.addImage("thunder2",thunder2);
        break;
      case 3:
      thunderGO.addImage("thunder3",thunder3);
        break;
      case 4:
      thunderGO.addImage("thunder4",thunder4);
        break;
      default:
        break;
    }
    thunderGO.lifetime = 20;
  }
}
