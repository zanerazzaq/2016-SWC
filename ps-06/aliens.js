var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext('2d');

var c=document.getElementById("Canvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(100,75,50,0,2*Math.PI);
ctx.stroke();
