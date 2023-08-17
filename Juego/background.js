
function cambiarImgH() {
  var avatarImg = document.getElementById("avatar");

  if (avatarImg.src.endsWith("helen-avatar.png")) {
    avatarImg.src = "../Avatares/helen-guiño.png";
  } else {
    avatarImg.src = "../Avatares/helen-avatar.png";
  }
}


/* global createCanvas, windowWidth, windowHeight, stroke, clear, fill, rect, mouseX, mouseY */
const body = document.getElementsByTagName("body")[0];
const pixel = {
  size: 25,
  color: "rgba(255, 0, 255, .5)",
  stroke: " rgba(0, 255, 255, 0.75)",
  fill: "rgba(255, 255, 255, 0)",
};
let isDrawing = false;

function setup() {
  let bgCanvas = createCanvas(windowWidth, windowHeight);
  bgCanvas.id("bg-canvas");

  stroke(pixel.stroke);
  fill(pixel.fill);
  for (let i = 0; i < windowWidth; i += pixel.size) {
    for (let j = 0; j < windowHeight; j += pixel.size) {
      rect(i, j, pixel.size, pixel.size);
    }
  }
}

function draw() {
  if (!isDrawing) {
    return;
  } else {
    let position = getPosition(mouseX, mouseY);
    stroke(pixel.stroke);
    fill(pixel.color);
    rect(position.x, position.y, pixel.size, pixel.size);
  }
}

function getPosition(x, y) {
  const drawPos = {
    x: Math.ceil(x / pixel.size) * pixel.size - pixel.size,
    y: Math.ceil(y / pixel.size) * pixel.size - pixel.size,
  };
  return drawPos;
}

/* events */
function mousePressed() {
  isDrawing = true;
}

function mouseReleased() {
  isDrawing = false;
}
