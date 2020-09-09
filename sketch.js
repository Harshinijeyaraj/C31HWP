function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);
}

var particles = [];
var plinkos = [];
var division = [];

var divisionHeight = 300;


for(var k=0; k<=width;k = k+80) {
  divisions.push(new Divisions(k, height.divisonHeight/2,10,divisionHeight));
}

for(var j = 40; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}

for(var j = 15; j <=width-10; j=j+50)
{
  plinkos.push( new Plinko(j,175));
}

for(var j = 0; j < particles.length; j++) {
  particles[j].display();
}

for(var k = 0; k < divisions.length; k++) {
  particles[k].display();
}
function draw() {
  background(255,255,255);  
  drawSprites();
}