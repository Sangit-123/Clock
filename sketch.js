function setup() {
  createCanvas(500,500);
  angleMode(DEGREES)
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  let hr = hour();
  let min = minute();
  let sec = second(); 

  translate(250,250);
  rotate(-90)

  let hourAngle = map(hr,0,12,0,360)
  let minuteAngle = map(min,0,60,0,360)
  let secondAngle = map(sec,0,60,0,360)
  push()
  rotate(minuteAngle)
  stroke("blue")
  strokeWeight(5)
  line (0,0,60,0)
  pop()
  push()
  rotate(hourAngle)
  stroke("red")
  strokeWeight(5)
  line (0,0,90,0)
  pop()
  push()
  rotate(secondAngle)
  stroke("Green")
  strokeWeight(5)
  line(0,0,40,0)
  pop()
  noFill()
  stroke("red")
  strokeWeight(3)
  arc(0,0,300,300,0,hourAngle)
  stroke("blue")
  strokeWeight(3)
  arc(0,0,275,275,0,minuteAngle)
  stroke("green")
  strokeWeight(3)
  arc(0,0,250,250,0,secondAngle)
}