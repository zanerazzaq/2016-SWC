var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext('2d');
drawingPad.fillStyle = "hsla(0,10%,10%,1)";
drawingPad.fillRect(0, 0, 10, 10);
drawingPad.clearRect(10,0,10,10);
drawingPad.fillRect(20, 0, 10, 10);
drawingPad.clearRect(30, 0, 10, 10);
drawingPad.fillRect(40, 0, 10, 10);
drawingPad.clearRect(50,0,10,10);
drawingPad.clearRect(0, 10, 10, 10);
drawingPad.fillRect(10,10,10,10);
drawingPad.clearRect(20, 10, 10, 10);
drawingPad.fillRect(30, 10, 10, 10);
drawingPad.clearRect(40, 10, 10, 10);
drawingPad.fillRect(50,10,10,10);
drawingPad.fillRect(0, 20, 10, 10);
drawingPad.clearRect(10,20,10,10);
drawingPad.fillRect(20, 20, 10, 10);
drawingPad.clearRect(30, 20, 10, 10);
drawingPad.fillRect(40, 20, 10, 10);
drawingPad.clearRect(50,20,10,10);

drawingPad.clearRect(0, 30, 10, 10);
drawingPad.fillRect(10,30,10,10);
drawingPad.clearRect(20, 30, 10, 10);
drawingPad.fillRect(30, 30, 10, 10);
drawingPad.clearRect(40, 30, 10, 10);
drawingPad.fillRect(50,30,10,10);

drawingPad.fillRect(0, 40, 10, 10);
drawingPad.clearRect(10,40,10,10);
drawingPad.fillRect(20, 40, 10, 10);
drawingPad.clearRect(30, 40, 10, 10);
drawingPad.fillRect(40, 40, 10, 10);
drawingPad.clearRect(50,40,10,10);


drawingPad.quadraticCurveTo(0, 40, 60, 60);
