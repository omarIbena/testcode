var box;

function setup() {
  createCanvas(400,400);
 box = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if (keyIsDown(UP_ARROW)){
    box.y = box.y -2;
 }
 if (keyIsDown(DOWN_ARROW)){
  box.y = box.y +2;
 }
 if (keyIsDown(LEFT_ARROW)){
  box.x = box.x -2;
 }
 if (keyIsDown(RIGHT_ARROW)){
  box.x = box.x +2;
 }
drawSprites();
}




