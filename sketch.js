
var wall,thickness;
var bullet,speed,weight;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	thickness=random(22,83);
	
wall=createSprite(1200,200,thickness,height/2);
speed=random(223,321)
weight=random(30,52)
	//Create the Bodies Here.
bullet=createSprite(50,200,50,5);

	bullet.velocityX=speed;
	bullet.shapeColor = 'white';
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //function call
  if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5* weight* speed* speed/(thickness*thickness*thickness);
   
   if (damage>10)
   {
	   wall.shapeColor(255,0,0);
   }

   if(damage<10)
   {
	   wall.shapeColor=color(0,255,0);
   }
  }
  drawSprites();
 
}
//function defination
function hasCollided(lbullet,lwall)
{
	bulletRightEdge=lbullet.x+lbullet.width;
	wallLeftEdge=lwall.x;
	if(bulletRightEdge >=wallLeftEdge)
	{
		return true
	}
	return false;
}
