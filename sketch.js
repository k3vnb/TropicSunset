

let angle = 100;
let len1 = Math.random() * 500;

let len2 = Math.random() * 900;
let randomVal = Math.floor(Math.random() * 500);



let slider;
function setup(){
  createCanvas(1400, 600);
  slider = createSlider(0, TWO_PI, PI/2, 0.01);
  slider.position(100)
}

function draw(){
  background(200, 100, 0);
  angle= slider.value();
  stroke(0, 20, 255);
  translate(height, 200);
  fill(255, 190, 0);
  ellipse(randomVal, randomVal, randomVal, randomVal);
  branch(len1);
  branch2(len2);
}

function branch(len){

  line(randomVal,0,0, -len);
  line(0,randomVal/2,0, len);
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
  if (len > 14){
    rotate(angle);
    branch2 (len * .97);
    rotate(-angle);
    branch2(len * .27);
  }
}
