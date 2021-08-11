
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png, ship-2.png");
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");

  sea.addImage(seaImg);

  if(sea.x < 0){
    sea.x = sea.width/2;
  }

  ship.addAnimation(shipImg1);
}