let time = 0;
let a = [0,0,0,0,true, true]
let milliseconds = a[0];
let seconds = a[1];
let minutes = a[2];
let hrs = a[3];
let mouseAct = a[4];
let resetTime = 0;
let starter = a[5];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  blendMode(DARKEST);
  // frameRate(1);
  
  background(220);
}

function draw() {
  

  if (mouseAct) {
    // fill(map(seconds, 0, 60, 180, 0), 100, 100, 1);
    // noStroke();
    // ellipse(mouseX, mouseY, seconds*10);
    // fill(map(seconds, 0, 60, 180, 0), 100, 100, 1);
    // stroke(map(seconds, 0, 60, 180, 0), 100, 100);
    stroke(map(seconds, 0, 60, 180, 0), 100, 100, 1);
    noFill();
    strokeWeight(map(seconds, 0, 60, 10,5));
    ellipse(mouseX, mouseY, seconds*10);

    // ellipse.mouseOver(mouseInfo);

    
    if (int(millis() / 100) % 10 != milliseconds) {
      milliseconds++;
    }
    if (milliseconds >= 10) {
      milliseconds -= 10;
      seconds++;
    }
    if (seconds >= 60) {
      seconds -= 60;
      minutes++;
    }
  }


  fill(0, 0, 0, 255);
  noStroke();
  // text(`${hrs}:${minutes}:${seconds}:${milliseconds}`, 500, 500);
  // text(`x:${pmouseX-mouseX}`, 500,600);
  // text(`y:${pmouseY-mouseY}`, 500,700);
  textAlign(CENTER);
  text('click to learn how much time has elapsed @ cursor location', windowWidth/2, windowHeight/2);
  // ellipse(mouseX,mouseY,10);
}

function mouseClicked() {
  // if (mouseAct == false) {
  //   starter = true;
  // }
  // if (mouseAct == true) {
  //   starter = false;
  // }
  // mouseAct = starter; 
  fill('red');
  text(`${hrs} hours ${minutes} minutes ${seconds} seconds spent here`, windowWidth/2, mouseY+10);
}

function mouseMoved(){
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hrs = 0;
}

// function mouseInfo(){
//   text(`${seconds}seconds`, mouseX+10, mouseY+10);
// }


// Stopwatch p5.js demo by MSingh10 https://editor.p5js.org/MSingh10/sketches/JyeMsf9Wk