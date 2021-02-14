var ironMan, drStrange;

function setup() {
  //create the background/base
  createCanvas(800,400);
  
  //the moving sprite
  ironMan = createSprite(400, 200, 50, 50);
  ironMan.shapeColor = "red";
  ironMan.debug = true;
  //to fly ironMan to the right
  ironMan.velocityX= 2;
  
  //the fixed sprite
  drStrange = createSprite(700, 200, 50, 50);
  drStrange.shapeColor = "darkblue";
  drStrange.debug = true;
  drStrange.velocityX = -2;
}

function draw() {
  //to clear screen and give background color
  background("lightBlue"); 
  

  //to bounce them off in the x-direction  
  if (ironMan.x - drStrange.x < ironMan.width/2 + drStrange.width/2 
    && drStrange.x - ironMan.x < ironMan.width/2 + drStrange.width/2){
      ironMan.velocityX = ironMan.velocityX *(-1);
      drStrange.velocityX = drStrange.velocityX *(-1);
    }

  //to bounce them off in the y-direction  
  if (drStrange.y - ironMan.y < ironMan.height/2 + drStrange.height/2
    && ironMan.y - drStrange.y < ironMan.height/2 + drStrange.height/2) {
      ironMan.velocityY = ironMan.velocityY *(-1);
      drStrange.velocityY = drStrange.velocityY *(-1);
    }
    
    
  //display the sprites
  drawSprites();
}