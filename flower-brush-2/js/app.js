// function preload() {

// }

let r = 25;
let flowers;
let hue;
let size;

function setup() {
   createCanvas(windowWidth, windowHeight);
   r = 50
   flowers = [];
   hue = random(100);
   size = 20;
}

function draw() { // draws 30 frames per sec
   background('#11111822');
   flowers.forEach(flower => {
      flower.draw();
   })
}

function mouseDragged() {
   // hue isn't changing on an individual mouse interaction, changing in conjunction with the whole brush stroke
   hue = hue + 0.5;
   size = size + 0.5;
   size = constrain(size, 20, 100);
  
   if (hue > 100) {
      hue = 0;
   }

   flowers.push(new Flower(mouseX, mouseY, hue, size));
}

function mouseReleased() {
   size = 20;
   hue = random(100)
}