/*
This program demonstrates event handler function calls
and use of two predefined global variables
(mouseX & mouseY).
*/

function setup() {
  //(400x400)
  createCanvas(400, 400);
  //(r,g,b)
  background(30, 20, 30);
}

//This function is called countinously
//as the program runs
function draw() {
  //ellipse
  noStroke(); //no outlines
  fill(250, 200, 200, 50); //(r,g,b,a)
  //(x,y,w,h)
  ellipse(mouseX, mouseY, 25, 25);
}

//This funtion is called when the mouse is clicked
function mousePressed() {
  background(30, 20, 30); //(r,g,b)
}