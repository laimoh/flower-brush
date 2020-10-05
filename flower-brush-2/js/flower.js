// create each indovudal brush stroke
class Flower {
   constructor(x, y, hue, size) { // setup() - javascript
      this.x = x;
      this.y = y;
      this.hue = hue;
      this.midSize = size;
      this.dist = (size / 2) + random(1,10); // petal distance from centre
      this.numOfPetals = random(5, 8);
      this.rotation = 0; // initialise rotation evenly for all petals
      this.rotationSpeed = random(-0.03, 0.03); // rotate indivdual petals at diff speeds
      // this.alpha = 100;
   }

   draw() {

      colorMode(HSB, 100);
      noStroke();
      fill(this.hue, 100, 100); // , this.alpha to control opacity 50 percent 
      circle(this.x, this.y, this.midSize);

      for (let num = 0; num < this.numOfPetals; num++) {
         // 2PI multiplied by petal num/ counter divided by total petals = angle
         let angle = (TWO_PI * num / this.numOfPetals) + this.rotation;
         // let px = cos(angle) * this.dist;
         // let py = sin(angle) * this.dist;
         let branch = createVector(this.dist, 0);
         branch.rotate(angle);
         circle(this.x + branch.x, this.y + branch.y, 10);
      }
      this.rotation = this.rotation + this.rotationSpeed;
   }

}