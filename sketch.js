let angle = 100;

let slider;
function setup(){
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI/4);
}

function draw(){
  background(51);
  angle= slider.value();
  stroke(255);
  translate(200, height);
  branch(100);


}

function branch(len){
  line(0,0,0, -len);
  translate(0, -len);
  rotate(angle);
  if (len > 4){
    branch (len * .67);
  }
}

// function branch(len, angle){
//   line(0, 0, 0, -len);
//   translate(0, -len);
//   rotate(angle);
//   if (len > 4){
//     branch(len * .67);
//     // push()
//     // rotate(angle);
//     // branch(len*.67);
//     // pop();
//     // push();
//     // rotate(-angle);
//     // branch(len*.67);
//     // pop();
//
//   }
//   // line(0, 0, 0, -len * 0.67);
// }
