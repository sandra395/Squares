function setup() {
  createCanvas(485, 195);
}

function draw() {
  background(0);
  
  // Yellow
  fill('rgba(255,255,0,0.7)');
  strokeWeight(2);
  stroke(255, 255, 0);
  square(30, 30, 30);
  square(63, 30, 30);
  square(30, 63, 30);
  square(63, 63, 30);
  
  // Blue
  fill('rgba(0,127,255,0.7)');
  strokeWeight(2);
  stroke(0, 127, 255);
  square(107, 30, 30);
  square(107, 63, 30);
  square(139, 97, 30);
  square(107, 97, 30);
  
  // Red
  fill('rgba(255,0,0,0.7)');
  strokeWeight(2);
  stroke(255, 0, 0);
  square(182, 30, 30);
  square(182, 64, 30);
  square(182, 99, 30);
  square(182, 133, 30);
  
  // Green
  fill('rgba(0,143,57,0.7)');
  strokeWeight(2);
  stroke(0, 143, 0);
  square(226, 30, 30);
  square(226, 64, 30);
  square(259, 64, 30);
  square(259, 97, 30);
  
  // Pink
  fill('rgba(255,0,128,0.7)');
  strokeWeight(2);
  stroke(255, 0, 128);
  square(350, 30, 30);
  square(384, 64, 30);
  square(350, 64, 30);
  square(317, 64, 30);
}

