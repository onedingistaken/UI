// resize canvas to fit the whole window
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// fill / rectangle
c.fillStyle = "rgba(255, 0, 0)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(255, 0, 0, .6)"; // transparent level
c.fillRect(300, 100, 100, 100);
c.fillStyle = "rgba(255, 0, 0, .2)"; // transparent level
c.fillRect(100, 300, 100, 100);
console.log(canvas);

// line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 50);
c.lineTo(600, 300);
c.strokeStyle = "#000000";
c.stroke();

// arc / circle
c.beginPath(); // seperate privious drawings so they don't connect
c.arc(600, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = "red";
c.stroke();

for (var i = 0; i < 3; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath(); // seperate privious drawings so they don't connect
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
}