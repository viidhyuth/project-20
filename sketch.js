var mRect, fRect

function setup() {
  createCanvas(800,400);
  mRect=createSprite(400, 200, 80, 30);
  fRect=createSprite(200 , 200, 30, 80);
  mRect.shapeColor="lightblue"
  fRect.shapeColor="lightblue"
  mRect.velocityX=-3
  fRect.velocityX=3
}

function draw() {
  background("yellow");  
  if (mRect.x-fRect.x<mRect.width/2+fRect.width/2
    &&fRect.x-mRect.x<mRect.width/2+fRect.width/2
    &&mRect.y-fRect.y<fRect.height/2+fRect.width/2
    &&fRect.y-mRect.y<mRect.height/2+fRect.height/2){
      mRect.shapeColor="red"
      fRect.shapeColor="red"
      mRect.velocityX=mRect.velocityX*(-1)
      fRect.velocityX=fRect.velocityX*(-1)
  }
  else{
  mRect.shapeColor="lightblue"
  fRect.shapeColor="lightblue"
  }
  drawSprites();
} 