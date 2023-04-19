var lWeight;
let fr = 15;
var lamp1, lamp2, lamp3, lamp4, lamp5, lamp6;
var ellipse1Color = [50, 100, 200];
var ellipse2Color = [50, 100, 200];
var ellipse3Color = [50, 100, 200];
var ellipse4Color = [50, 100, 200];
var ellipse5Color = [50, 100, 200];
var ellipse6Color = [50, 100, 200];

function setup() {
  createCanvas(800, 800);
}

function draw() {
  frameRate(fr); 
  fr = 15;

  background(800, 800)
  
  circle1()
  circle2()
  circle3()
  circle4()
  circle5()
  circle6()  
  WerkGeheugen();
}

function circle2() {
  //Circle 2 & Rect 2
  if (collidePointEllipse(mouseX, mouseY, 195, 230, 120, 120)) {
    if (mouseIsPressed == true) {
      lamp1 = !lamp1;
    }
  }
  fill(50, 100, 200);
  ellipse(195, 230, 120)
  fill(ellipse1Color);
  rect(135, 50, 110, 110)
}


function circle1() {
  //Circle 1 & Rect 1
  if (collidePointEllipse(mouseX, mouseY, 75, 230, 120, 120)) {
    if (mouseIsPressed == true) {
      lamp2 = !lamp2;
    }
  }
  fill(50, 100, 200);
  ellipse(75, 230, 120)
  fill(ellipse2Color);
  rect(20, 50, 110, 110);
}

function circle3() {
  //Circle 3 & Rect 3
  if (collidePointEllipse(mouseX, mouseY, 315, 230, 120, 120)) {
    if (mouseIsPressed == true) {
      lamp3 = !lamp3;
    }
  }
  fill(50, 100, 200);
  ellipse(315, 230, 120)
  fill(ellipse3Color);
  rect(250, 50, 110, 110)
}

function circle4() {
  // Circle 4 & Rect 4
  if (collidePointEllipse(mouseX, mouseY, 435, 230, 120, 120)) {
    if (mouseIsPressed == true) {
      lamp4 = !lamp4;
    }
  }
  fill(50, 100, 200);
  ellipse(435, 230, 120)
  fill(ellipse4Color);
  rect(365, 50, 110, 110)
}


function circle5() {
  // Circle 5 & Rect 5
  if (collidePointEllipse(mouseX, mouseY, 555, 230, 120, 120)) {
    if (mouseIsPressed == true) {
      lamp5 = !lamp5;
    }
  }
  fill(50, 100, 200);
  ellipse(555, 230, 120)
  fill(ellipse5Color);
  rect(480, 50, 110, 110)
}

function circle6() {
  // Circle 6 & Rect 6
  if (collidePointEllipse(mouseX, mouseY, 675, 230, 120, 120)) {
    if (mouseIsPressed == true) {
      lamp6 = !lamp6;
    }
  }
  fill(50, 100, 200);
  ellipse(675, 230, 120)
  fill(ellipse6Color);
  rect(595, 50, 110, 110)
}

function WerkGeheugen() {
  if (lamp1) ellipse1Color = color(100, 200, 50);
  else ellipse1Color = color(50, 100, 200);

  if (lamp2) ellipse2Color = color(100, 200, 50);
  else ellipse2Color = color(50, 100, 200);

  if (lamp3) ellipse3Color = color(100, 200, 50);
  else ellipse3Color = color(50, 100, 200);

  if (lamp4) ellipse4Color = color(100, 200, 50);
  else ellipse4Color = color(50, 100, 200);  
  
  if (lamp5) ellipse5Color = color(100, 200, 50);
  else ellipse5Color = color(50, 100, 200);   
  
  if (lamp6) ellipse6Color = color(100, 200, 50);
  else ellipse6Color = color(50, 100, 200); 
}
