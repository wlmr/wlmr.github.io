
var nazi = 100;

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);
}

function draw(){
  background(255,0,0);
  camera(mouseX-width/2, mouseY-height/2, 0, random(-10,10), random(-10,10), nazi, 0, 1, 0);
  swastika(5,nazi);
}
function swastika(s,z){
  push();
  translate(0,0,z);
  rotate(frameCount/100,[0,0,1]);
  noStroke();
  fill(0);
  var l = 100;
  box(l*s,l/5*s,l/5*s);
  rotateZ(HALF_PI);
  box(l*s,l/5*s,l/5*s);
  translate(l*1/5*s,-l*2/5*s);
  for(var i = 0; i < 4; i++){
    box(l*(3/5)*s,l/5*s,l/5*s);
    rotateZ(HALF_PI);
    translate(l*(3/5)*s,-l/5*s);
  }
  translate(-l/5*s,2*l/5*s);
  pop();
}

function mouseWheel(event) {
  nazi += event.delta*3;
}
