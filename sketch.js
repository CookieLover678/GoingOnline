var box 


function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 30, 30);
  box.shapeColor = "white";
}

function draw() 
{
  if(keyDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 0.7;
  }
  background(30);
drawSprites();
}




