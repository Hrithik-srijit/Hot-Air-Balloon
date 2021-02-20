var balloon;

function preload(){
  backgroundImg=loadImage("Hot Air Balloon-01.png");
  balloon=loadImage("Hot Air Balloon-02.png");
}

function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
balloon=new balloon(100,50,80,150);

if(keyDown(LEFT_ARROW)){
  balloon.x=balloon.x-10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x=balloon.x+10;
}
else if(keyDown(UP_ARROW)){
  balloon.y=balloon.y-10;
}
else if(keyDown(DOWN_ARROW)){
  balloon.y=balloon.y+10;
}
}

function draw() {
  background(backgroundImg);
  balloon.display();  
  drawSprites();
}