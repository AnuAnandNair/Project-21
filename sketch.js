var bullet,wall;
var speed,weight,thickness;
 
function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 5);
  bullet.shapeColor=color(255,255,255); //car.shapeColor=color(255);
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor= color(80,80,80); 

  speed=random(223,321);
  
  weight=random(30,52);
  
  bullet.velocityX=speed;
}

function draw() {
  background(0);  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);    
    

    if(damage<=10){
      wall.shapeColor=color(0,255,0);//green g=255 all others are 0
    } 

    if(damage>10){
      wall.shapeColor=color(255,0,0);//r=255,g=0,b=0 for red 
    }

  
  }

  drawSprites();
}

function hasCollided(bullet1,wall1){

  bulletRightEdge=bullet1.x+bullet1.width; //rightedge =leftedge + width; left edge =bullet.x that is distance of the left edge from left side of canvas in p5
  wallLeftedge=wall1.x;//walls left edge is the distance of left edge from canvas which is the x value of wall in p5
  

  if(bulletRightEdge>=wallLeftedge) 
  {     
   return true;
  }
  else{
  return false;
  }
}