var fixedRect, movingRect;
var edges;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX=2;
  //fixedRect.debug = true;
  movingRect = createSprite(200, 100, 80, 50);
  movingRect.shapeColor = "green";
 // movingRect.debug=true;

 edges=createEdgeSprites();
}

function draw() {
  background(0); 
  drawSprites();
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;

  if (movingRect.x-fixedRect.x < (movingRect.width+fixedRect.width)/2
  && fixedRect.x-movingRect.x < (movingRect.width+fixedRect.width)/2
  &&movingRect.y-fixedRect.y < (movingRect.height+fixedRect.height)/2
  && fixedRect.y-movingRect.y < (movingRect.height+fixedRect.height)/2) {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
    
    fixedRect.velocityX=fixedRect.velocityX*(-1);

  }

  else {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }

  console.log(movingRect.x-fixedRect.x);
}