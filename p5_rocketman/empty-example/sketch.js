var img;
var rocket;
var siz = 100;
var x = 700;
var y = 0;
var y1 = 0;
var y2 = 0;
var mySound;
var x2;
var speed
var speed2
var speed3


function preload (){
  img=loadImage ('assets/space.jpg');
  rocket=createImg ('assets/rocketIcon.gif');
  mySound=loadSound ('assets/Elton.mp3');
}



function setup () {
createCanvas (1500, 1000);
mySound.loop ();
speed = 10;
speed2 = 10;
speed3 = 10;


}

function draw(){
background (img);

//The Rocketman!

if (keyIsDown(LEFT_ARROW)){
  x -= 10;
}

if (keyIsDown (RIGHT_ARROW)){
  x += 10;
}

rocket.position (x, 800);
rocket.size (siz, 150);


//The raining circles

ellipse(x2, y, 155, 155);
y = y + speed;
  if (y > height) {
y = 0;
  }
if (y==0){
  x2 = random (0, 1500);

/*  ellipse(x2, y1, 155, 155);
  y1 = y1 + speed2;
    if (y1 > height) {
  y1 = 0;
    }
  if (y1==0){
    x2 = random (0, 1500);
}
    ellipse(x2, y2, 155, 155);
    y2 = y2 + speed3;
      if (y2 > height) {
    y2 = 0;
      }
    if (y2==0){
      x2 = random (0, 1500);
    }*/
}

if (x2+155/2>x&&x2+155/2<x+250&&y+155/2>800&&y+155/2<1000){
  speed = 0;
  fill ( 255);
  textSize (200);
  text ('You lose', 400, 500);
  mySound.stop ();
}
}
