
var nazi = -800;

function setup(){

}

function draw(){
  swastika(5,nazi);
}
function swastika(s,z){
  push();
  translate(0,-200,z);
  rotate(frameCount/100,[0,0,1]);
  noStroke();
  fill(20);
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
