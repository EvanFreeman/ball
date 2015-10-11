(function() {
  'use strict';

  let x = 100;
  let y = 100;
  let dx = 50;
  let dy = 5;
  let interval = 10;
  let context = {};
  let mycanvas = document.getElementById('myCanvas');

  function draw() {
    context.clearRect(0, 0, mycanvas.height, mycanvas.width);
    context.beginPath();
    context.fillStyle = '#0000ff';
    context.arc(x, y, 50, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    dx = (x < 0 || x > mycanvas.height) ? -dx : dx;
    dy = (y < 0 || y > mycanvas.width) ? -dy : dy;
    x+= dx;
    y+= dy;
  }

  function start() {
    context = mycanvas.getContext('2d');
    setInterval(draw, interval);
  }

  start();
})();
