var ctx = document.getElementById("walk").getContext('2d');

var beginX = 1;
var beginY = 1;


var clearScreen = function() {
  ctx.fillStyle = "hsla(0, 100%, 70%, 0.2)";
  ctx.fillRect(0,0,500,500);

};
var drawDot = function (x, y) {
  clearScreen();
  var size = 30;
  ctx.fillStyle = "black"
  ctx.strokeStyle = ''
  beginX = beginX + 20;
  if(beginX > 500) {
    beginX = 500;
    beginY = beginY + 20;

    beginX=beginX+40
    if(beginX>300){
      beginX = 200;
      beginY=beginY+20;



}

  }

  if (beginY > 50) {
    beginY = 500 + 50;

  if (beginX > 200) {
    beginY=30;
    beginX=80 + 30;

}

  if (beginX > 100) {
    beginY=10;
    beginX=40 + 30;


      if (beginX > 500) {
        beginY=500;
        beginX=30 + 30;
}
}
}





  ctx.fillRect(beginX, beginY, size, size);

};




setInterval(drawDot, 40);
