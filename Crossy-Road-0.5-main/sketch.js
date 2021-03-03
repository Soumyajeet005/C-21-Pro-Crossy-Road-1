var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{

 
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();

 player = new Player(width/2,height-25);
   
 }

function draw() {
  background("skyblue");
    
 
  for(var i=1;i<6;i++){
    var bottomGrass1 = createSprite(680,height-50-(i*400),width,grassHeight);
    if(i%2==0){
      var road = createSprite(683,height-150-(i*400)+grassHeight,width,300)
      road.shapeColor="black";
    }
    bottomGrass1.shapeColor="green";
  }
 
 
  for(var i=1;i<40;i++){
    cars =new Car(2);
    carGroup1.add(cars.spt)
  }

  //
  for(i=1;i<logGroup1.length;i++){
    if(logGroup[1].x<0)
    {
      logGroup[1].x=width;
    }

  }
  
  translate(0,-player.spt.y+height-150);

  
  drawSprites();
}

function keyPressed(){
  if(keycode == UP_ARROW){
    player.move(0,-2);
  }
  else if(keycode == DOWN_ARROW){
    player.move(0,2);
  }
  else if(keycode == LEFT_ARROW){
    player.move(-2,0);
  }
  else if(keycode == RIGHT_ARROW){
    player.move(2,0);
  }

}

