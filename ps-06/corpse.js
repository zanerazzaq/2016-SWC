var myCanvas = document.getElementById('corpse');
var drawingPad = myCanvas.getContext('2d');
var circleDegrees = 2 * Math.PI;
var y0  = 0;
var y1 = 240;
var y2 = 480;
var height = y3 = 720;
var x0 = 0;
var x1 = 125; // left connection
var x2 = 275; // right connection
var width = x3 = 400;
var horizontalCenter = 200; // centerLine

var zanerazzaq = {};


var drawImage = function(filename, ctx, x, y) {
  var img = document.createElement("img");
  img.src = filename;
  img.addEventListener("load", function() {
    ctx.drawImage(img, x, y);
  });
}

zanerazzaq.drawGrid = function(ctx) {
  ctx.beginPath();
  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x2,y0);
  ctx.lineTo(x2,y3);

  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x0,y1);
  ctx.lineTo(x3,y1);

  ctx.moveTo(x0,y2);
  ctx.lineTo(x3,y2);
  ctx.stroke();
};

zanerazzaq.drawArm = function(ctx, left) {


};

zanerazzaq.drawLeg = function(ctx, left) {

};


zanerazzaq.drawTop = function(ctx) {
  // draw a round head:
  // ctx.beginPath();
  // ctx.arc(horizontalCenter, 150, 150, 0, circleDegrees);
  // ctx.fill();


 ctx.beginPath();
 ctx.arc(horizontalCenter,150,150,0,circleDegrees);
 ctx.fill();

};


  drawImage('//zanerazzaq.github.io/2016-SWC/06/head.jpg', ctx, 0, 0);
};

zanerazzaq.drawMiddle = function(ctx) {
  zanerazzaq.drawArm(ctx, true);
  zanerazzaq.drawArm(ctx, false);
  // draw the rest of the body...
};

zanerazzaq.drawBottom = function(ctx) {
  zanerazzaq.drawLeg(ctx, true);
  zanerazzaq.drawLeg(ctx, false);
};

zanerazzaq.drawCorpse = function(ctx) {
  zanerazzaq.drawTop(ctx);
  zanerazzaq.drawMiddle(ctx);
  zanerazzaq.drawBottom(ctx);
  zanerazzaq.drawGrid(ctx);
};

window.zanerazzaq = zanerazzaq;
