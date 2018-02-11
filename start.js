var scl, cols, rows;
var yOff,xOff;
var terrain;
var yVel, xVel;
var angleX, angleY, angleZ;
var v, a;
var lowest, highest;
var frac;

function setup() {
  angleX = PI/3;
  angleY = angleZ = yOff = yVel = xVel = a = v = 0;
  highest = 100;
  lowest = -200;
  frac = 2;
  scl = 40;
  v = 0.5;
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

  var xscl = constrain(frac*mouseX-width/2,0,width);
  var yscl = constrain(frac*mouseY-height/2,0,height);

  angleX = atan(yscl/height-2/3);
  angleZ = atan(1/2-xscl/width)/(abs(a*1.3)+1);
  angleY = angleY + angleZ*v/10;

  rotateY(PI/4*angleZ);
  rotateX(PI/4*angleX+PI/3);
  rotateZ(angleY);

  a = constrain(a-(angleX+v/3)*v/100, -v/15, v);

  yVel -= cos(angleY)*a;
  xVel -= sin(angleY)*a;

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
