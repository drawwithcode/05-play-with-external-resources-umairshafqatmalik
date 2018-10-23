

var mySong;
var analyzer;
var volhistory = [];



function preload() {
  myImage = loadImage("./assets/08319063.jpg");
  mySong = loadSound('./assets/Christian_Bjoerklund_-_01_-_Hallon.mp3');
}





function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  mySong.play();
  analyzer = new p5.Amplitude();
}





function draw() {

var myText1 = 'to START';
var myText2 = 'to STOP';

image(myImage, 0, 0, windowWidth, windowHeight);


  if (mouseX > width/2) {

    textAlign(LEFT);
    textSize(15);
    text (myText2, mouseX, mouseY+35);
    triangle (mouseX-20 ,mouseY+30, mouseX-10, mouseY+25, mouseX-10, mouseY+35);
    if (mySong.isPlaying() == false) {
      mySong.play();

    }

  } else {
    // background(255,0,0);
    mySong.stop();
    textAlign(RIGHT);
    textSize(15);
    text (myText1, mouseX, mouseY+35);
    triangle (mouseX+20 ,mouseY+30, mouseX+10, mouseY+25, mouseX+10, mouseY+35);
  }



  var volume = analyzer.getLevel();
  volhistory.push(volume);

  noStroke();
  fill(random(100,255));

  push();
  translate(width/2, height/3);
  beginShape();
  for (var k = 0; k < 360; k++) {
    var p = map(volhistory[k], 0, 1, 30, 400);
    var x = p * cos(k);
    var y = p * sin(k);
    vertex(x, y);

  }
  endShape();

  pop();


  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }







if (mouseX > width/2) {
  for (var i = 0; i < width; i++) {
      var p1 = map(volhistory[i], 0, 1, 10, 500);
  stroke (150);
  fill(45, random(50,70), 70);
  rect (random(0, width), height, 25, random (-100,(-100 - p1)));

  noStroke();
  fill(random(200,255));
  ellipse (random(0, width), ((height-100) - p1), 2, random(2,7));
}
}
else {
  stroke (150);
  fill(45, random(50,70), 70);
  for (x3=0; x3<width; x3+=25) {
  rect (x3, height, 25,-100);
}
  noStroke();
  fill(random(200,255));
  ellipse (random(0, width), height-100, 2, random(2,7));
}









}
