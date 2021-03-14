function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(300, 300, 70, 70);

a=createSprite(200,220,20,20)  
b=createSprite(200,300,40,40) 
a.velocityY=1
}

function draw() {
  background("purple");  
  moving.x = mouseX
  moving.y = mouseY
  if(touching(fixed,moving)){
fixed.shapeColor="blue"
moving.shapeColor="blue"
  }else{
fixed.shapeColor="orange"
moving.shapeColor="orange"
  }

  if(touching(a,b)){
    a.visible=false
    b.visible=false
  }else{
    a.visible=true
    b.visible=true
  }
  drawSprites();
}
