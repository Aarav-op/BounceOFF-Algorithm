var fixedRect,movingRect





function setup() {
  createCanvas(600,400);
  fixedRect = createSprite(100,200,30,80);
  fixedRect.shapeColor = "red";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";

fixedRect.velocityX = 5;
movingRect.velocityX = -5;


}

function draw() {
  background("pink");

  
  

if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2
  &&fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2){
    fixedRect.velocityX = fixedRect.velocityX*(-1);
    movingRect.velocityX = movingRect.velocityX*(-1);
  }
  if( movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2
  && fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2){
    fixedRect.velocityY = fixedRect.velocityY*(-1);
    movingRect.velocityY = movingRect.velocityY*(-1);
  }
 




  drawSprites();
}