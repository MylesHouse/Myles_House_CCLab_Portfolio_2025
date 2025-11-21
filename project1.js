const R = 150;
const xh = angle => R / 15.0 * 16 * Math.pow(Math.sin(angle), 3);
const yh = p => R / 15.0 * (-13 * Math.cos(p) + 5 * Math.cos(2 * p) + 2 * Math.cos(3 * p) + Math.cos(4 * p));


function setup() {
  // create the canvas
  canvas = createCanvas(400, 400);
  // attach the canvas to the div in your HTML
  canvas.parent("sketch-container");
    blendMode(LIGHTEST);
   angleMode(DEGREES);

}

function draw() {
  background(133, 116, 164);
strokeWeight(1);
  fill(0)
text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);

  
  //arc1
  push(); // start translate
  stroke(158, 158, 158);
strokeWeight(8);
  noFill();
  arc(150, 0, 60, 100, 100, 220);
  
  //arc2
  translate(16, 1);
  stroke(158, 158, 158);
strokeWeight(8);
  noFill();
  arc(100, 80, 90, 80, 310, 45);
  
  //arc3
  translate(9, -13);
  stroke(158, 158, 158);
strokeWeight(8);
  noFill();
  arc(175, 175, 150, 150, 45, 225);
  
  //arc4
  translate(32, 97);
  stroke(158, 158, 158);
strokeWeight(8);
  noFill();
  arc(250, 159, 130, 100, 210, 300);
  
  //arc5
  translate(47, -117);
    stroke(158, 158, 158);
strokeWeight(8);
  noFill();
  arc(250, 159, 130, 150, 20, 105);
  pop(); // stop translate
  
  //clasp 2
  push();
  rotate(19.5);
  translate(24, -10);
 stroke(160);
strokeWeight(8);
  noFill();
  arc(215, 200, 20, 30, 180, 0);
  pop();
  
      //clasp
  rotate()
  fill(170)
  triangle(164, 252, 185, 232, 165, 224);
  
  //heart
  push();
  translate(120, 210);
  scale(.28);
  rotate(20);
  fill(160, 160, 160);
  stroke(0);
  strokeWeight(0);
  beginShape();
  let n = 200;
  for (let i = 0; i < n; i++) {
    let x = width / 2 + xh(TAU * i / n);
    let y = height / 2 + yh(TAU * i / n);
    vertex(x, y);
  }
  endShape();
  pop();  
  
   //heart
  push();
  translate(126, 220);
  scale(.23);
  rotate(19.5);
  fill(175, 175, 175);
  stroke(0);
  strokeWeight(0);
  beginShape();
  let x = 100;
  for (let i = 0; i < n; i++) {
    let x = width / 2 + xh(TAU * i / n);
    let y = height / 2 + yh(TAU * i / n);
    vertex(x, y);
  }
  endShape();
  pop();  
  
  //flower 1
  push();
  scale(1.4);
  translate(-39, -72);
  fill(210, 210, 210);
  noStroke(0);
  circle(138, 257, 7);
  circle(143, 260, 7);
  circle(142, 266, 7);
  circle(136, 267, 7);
   circle(134, 261, 7);
  pop();
 
  //flower 2
  push();
  scale(1.4);
  translate(306, -12);
  rotate(70);
   fill(210, 210, 210)
  noStroke(0);
  circle(138, 257, 7);
  circle(143, 260, 7);
  circle(142, 266, 7);
  circle(136, 267, 7);
   circle(134, 261, 7);
 pop();
  
  //flower 3
   push();
  scale(1.4);
  translate(-159, 111);
  rotate(-45);
   fill(210, 210, 210)
  noStroke(0);
  circle(138, 257, 7);
  circle(143, 260, 7);
  circle(142, 266, 7);
  circle(136, 267, 7);
   circle(134, 261, 7);
 pop();
  
  //gem
  fill(255, 255, 255);
  noStroke(0);
  circle(139.5, 266, 8);
  
   //gem 2
  fill(255, 255, 255);
  noStroke(0);
  circle(150, 291, 8);
  
   //gem 3
  fill(255, 255, 255);
  noStroke(0);
  circle(174.5, 278, 8);
}

