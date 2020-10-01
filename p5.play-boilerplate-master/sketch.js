var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 60, 30);

  
  speed = random(55,90); 
  weight = random(400,1500);
  car.velocityX = speed;
  deformation = (0.5 * weight * speed * speed)/22500

}

function draw() {
  background(30,30,30);  
  
  console.log(deformation);
  fill(80,80,80);
  wall = createSprite(1500, 200, 60, height/2);
  if(deformation < 100){
    background("green");  
  }
  if(deformation<180 && deformation > 100){
    background("yellow");  
  }
  if(deformation>180){
    background("red");  
  }
  drawSprites();

}