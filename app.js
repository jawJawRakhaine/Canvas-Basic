const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
var window_width = window.innerWidth;
var window_height = window.innerHeight;
canvas.style.backgroundColor = "#ff8";
canvas.width = window_width;
canvas.height = window_height;
// draw a rectangle
context.fillStyle = "red";
context.fillRect(100, 100, 100, 100);
context.fillStyle = "blue";
context.fillRect(300, 700, 100, 100);
// draw a circle
context.beginPath();
context.arc(300, 400, 50, 0, 2 * Math.PI * 2, false);
context.fillStyle = "blue";
context.fill();
context.closePath();

var strokeStyle = [
  "red",
  "blue",
  "green",
  "yellow",
  "black",
  "orange",
  "purple",
  "pink",
  "brown",
  "grey",
];

class Circle {
  constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }
  draw() {
    context.beginPath();
    context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI * 2, false);
    context.fillStyle =
      strokeStyle[Math.floor(Math.random() * strokeStyle.length)];
    context.fill();
    context.closePath();
  }
}

let all_circles = [];

for (let index = 0; index < 100; index++) {
  let xPos = Math.random() * window_width;
  let yPos = Math.random() * window_height;
  let radius = Math.random() * 50;
  let circle = new Circle(xPos, yPos, radius);
  all_circles.push(circle);
  circle.draw();
}
