var scl, cols, rows;
var yOff,xOff;
var terrain = [];
var flyingY, flyingX;
var angleX, angleY;
var acc;
var angleZ;
var lowest, highest;

function setup() {
  highest = 200;
  lowest = -200;
  angleZ = 0;
  angleY = 0;
  scl = 40;
  yOff = 0;
  flyingY = flyingX = 0;
  angleX = 1;
  acc = 0;
  createCanvas(windowWidth, windowHeight,WEBGL);
  cols = floor(windowWidth*3 / scl);
  rows = floor(windowHeight*3 / scl);
  for(var x = 0; x < cols; x++){
    terrain[x] = [];
    for(var y = 0; y < cols; y++){
      terrain[x][y] = 0;
    }
  }
}

function draw() {
  background(0);
  //pointLight(100, 50, 100, 0, 200, 50);
  //ambientMaterial(100,50,100);
  noStroke();
  angleZ = -atan(mouseX/width-1/2);
  angleY += angleZ/20;
  angleX = atan(mouseY/height-1/2)+QUARTER_PI;
  acc += (0.8-angleX)/100;
  acc = constrain(acc,-0.03,0.7);
  rotateY(QUARTER_PI*angleZ);
  rotateX(PI/3*angleX);
  rotateZ(angleY);
  translate(-windowWidth*1.5,-windowHeight*1.5);
  flyingY -= cos(angleY)*acc;
  flyingX -= sin(angleY)*acc;
  buildMesh(rows,cols,genTerrain(flyingX,flyingY,rows,cols),scl);
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
  for (var j = 0; j < rows - 1; j++){
    beginShape(TRIANGLE_STRIP);
    for (var i = 0; i < cols; i++){
      fill(map(terrain[i][j],lowest,highest,0,20)
        ,map(terrain[i][j],lowest,highest,0,50)
          ,map(terrain[i][j],lowest,highest,0,200));
      vertex(i*scl, j*scl, terr[i][j]);
      vertex(i*scl, (j+1)*scl, terr[i][j+1]);
    }
    endShape();
  }
  pop();
}
