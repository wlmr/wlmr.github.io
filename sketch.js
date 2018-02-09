function setup() {
  createCanvas(1400,700);
}

function draw() {
  i++;
  background(i);
  ellipse(mouseX, mouseY, mouseX, mouseY/2);
}
