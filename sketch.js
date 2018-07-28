

let angle = 100;
let len1 = Math.random() * 500;
let len2 = Math.random() * 900;

let slider;
function setup(){
  createCanvas(1400, 400);
  slider = createSlider(0, TWO_PI, PI/4, 0.01);
  slider.position(100)
}

function draw(){
  background(51);
  angle= slider.value();
  stroke(225);
  translate(200, height);
  branch(len1);
  branch2(len2);
}

function branch(len){
  line(0,0,0, -len);
  line(0,0,0, len);
  line(0,angle,0, len);
  translate(0, -len);
  rotate(angle);
  if (len > 4){
    rotate(angle);
    branch (len * .67);
    branch2 (len * .33);
    rotate(-angle);
    branch(len * .67);
  }
}
function branch2(len){
  line(-20,len + 1,10, -len);
  line(len,20,20, len);
  line(0,angle,0, len);
  translate(len, -len);
  rotate(angle);
  if (len > 4){
    rotate(angle);
    branch2 (len * .67);
    rotate(-angle);
    branch2(len * .67);
  }
}
