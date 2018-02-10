var scl, cols, rows;
var yOff,xOff;
var terrain = [];
var flying;

function setup() {
  scl = 10;
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
  noFill();
  noStroke();
  rotateX(PI/3*mouseY/1000);
  translate(-windowWidth*0.7,-windowHeight*0.7);
  flying -= 0.01;
  buildMesh(rows,cols,genTerr(flying,rows,cols),scl);
}

function genTerr(pos,row,col) {
  for(var j = 0; j < row; j++){
    xOff = 0;
    for(var i = 0; i < col; i++){
      terrain[i][j] = map(noise(xOff,pos), 0, 1, -100, 100);
      xOff += 0.2;
    }
    pos += 0.2;
  }
  return terrain;
}

function buildMesh(row,col,terr,s){
  for (var j = 0; j < row - 1; j++){
    beginShape(TRIANGLE_STRIP);
    for (var i = 0; i < col; i++){
      fill(terrain[i][j]*2,map(mouseX,0,width,0,100),map(mouseY,0,height,0,100));
      vertex(i*s, j*s, terr[i][j]);
      vertex(i*s, (j+1)*s, terr[i][j+1]);
    }
    endShape();
  }
}
