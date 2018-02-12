var scl, cols, rows;
var yOff,xOff;
var terrain;
var yVel, xVel;
var angleX, angleY, angleZ;
var v, a, s;
var lowest, highest;
var frac;

var chopper;

function preload() {
  chopper = loadModel('assets/chopper.obj',true);
}

function setup() {
  angleX = PI/3;
  angleY = angleZ = yOff = yVel = xVel = 0;
  highest = 200;
  lowest = -200;
  scl = 40;
  v = 1/4;
  a = 0.03;
  createCanvas(windowWidth, windowHeight,WEBGL);

  cols = floor(windowWidth * 3 / scl);
  rows = floor(windowHeight * 3 / scl);

  terrain = [];
  for(var i = 0; i < cols; i++){
    terrain[i] = [];
    for(var j = 0; j < cols; j++){
      terrain[i][j] = 0;
    }
  }
}

function draw() {
  background(0);
  noStroke();

  angleX = atan(mouseY/height-3/5);
  angleY = atan(1/2-mouseX/width)/(abs(a*1.3)+1);
  angleZ = angleZ + angleY*v/10;

  rotateY(PI/4*angleY);
  rotateX(PI/4*angleX+PI/3);
  rotateZ(angleZ);

  a = constrain(a-(angleX+v/3)*v/100, -v/15, v);

  yVel -= cos(angleZ)*a;
  xVel -= sin(angleZ)*a;

  buildMesh(rows,cols,genTerrain(xVel,yVel,rows,cols),scl);
}


function genTerrain(posX,posY,rows,cols) {
  for(var j = 0; j < rows; j++){
    xOff = posX;
    for(var i = 0; i < cols; i++){
      terrain[i][j] = map(noise(xOff,posY), 0, 1, lowest, highest);
      xOff += 0.2;
    }
    posY += 0.2;
  }
  return terrain;
}


function buildMesh(rows,cols,terr,scl){
  push();
  translate(-windowWidth*1.5,-windowHeight*1.5);
  for (var j = 0; j < rows - 1; j++){
    beginShape(TRIANGLE_STRIP);
    for (var i = 0; i < cols; i++){
      fill(map(terr[i][j],lowest,highest,0,10)
        ,map(terr[i][j],lowest,highest,0,10)
          ,map(terr[i][j],lowest,highest,0,200));
      vertex(i*scl, j*scl, terr[i][j]);
      vertex(i*scl, (j+1)*scl, terr[i][j+1]);
    }
    endShape();
  }
  pop();
}
