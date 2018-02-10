var scl, cols, rows;
var yOff,xOff;
var terrain = [];
var flying;

var nazi = -800;

function setup() {
  scl = 30;
  yOff = 0;
  flying = 0;
  createCanvas(windowWidth, windowHeight,WEBGL);
  cols = floor(windowWidth*1.4 / scl);
  rows = floor(windowHeight*1.4 / scl);
  for(var x = 0; x < cols; x++){
    terrain[x] = [];
    for(var y = 0; y < cols; y++){
      terrain[x][y] = 0;
    }
  }
}

function draw() {
  stroke(255);
  background(0);
  swastika(5,nazi);
  noFill();
  noStroke();
  rotateX(PI/3*(atan((mouseY-height/2)/(height/2))+10)/10);
  translate(-windowWidth*0.7,-windowHeight*0.7);
  flying -= 0.004;
  buildMesh(rows,cols,genTerr(flying,rows,cols),scl);
}

function swastika(s,z){
  // beginShape(QUADS)
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

function genTerr(pos,row,col) {
  for(var j = 0; j < row; j++){
    xOff = 0;
    for(var i = 0; i < col; i++){
      terrain[i][j] = map(noise(xOff,pos), 0, 1, -150, 150);
      xOff += 0.2;
    }
    pos += 0.2;
  }
  return terrain;
}

function buildMesh(row,col,terr,s){
  push();
  for (var j = 0; j < row - 1; j++){
    beginShape(TRIANGLE_STRIP);
    for (var i = 0; i < col; i++){
      fill(terrain[i][j]);
      vertex(i*s, j*s, terr[i][j]);
      vertex(i*s, (j+1)*s, terr[i][j+1]);
    }
    endShape();
  }
  pop();
}
