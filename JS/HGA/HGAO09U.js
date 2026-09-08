var stipX = new Array(0,10,20,30,40,50,60,70,80,90);
var stipY = new Array(0,10,20,30,40,50,60,70,80,90);
var diameter = 50;

function setup() {
  canvas = createCanvas(900,255);
  canvas.parent('processing');
  frameRate(10);
  noStroke();
}

function draw() {
  background(240);

  // Alle stippen tekenen.
  for (var n = 0; n < stipX.length; n++) {
    fill(stipY[n],50,150);
    ellipse(stipX[n],stipY[n],diameter);
  }

  // Stip op muispositie toevoegen
  stipX.unshift(mouseX);
  stipY.unshift(mouseY);

  // Oudste stip verwijderen
  stipX.pop();
  stipY.pop();
}