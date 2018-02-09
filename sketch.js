var x = [];
var y = [];
var v = 0;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  v += 0.07;
  background(frameCount/2,255-frameCount/5,10);
  rotate(v, [1,1,0]);
  box();
  stroke(255, 102, 0);
  stroke(0, 0, 0);
  if(x.length == 4){
    bezier(x[0],y[0],x[1],y[1],x[2],y[2],x[3],y[3]);
    x = [];
    y = [];
  }
}

function mousePressed(){
  x.push(mouseX);
  y.push(mouseY);
}
