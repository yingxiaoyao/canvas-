var can,
	ctx,
	W,
	H,
	gridY = 10, gridX = 10,
	type = 'ball';


var shape,
	colors = [
	  '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
	  '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
	  '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
	  '#FF5722'
  	];

var message = document.getElementById('message');

function init () {
	can = document.getElementById('canvas');
	ctx = can.getContext('2d');

	W = can.width = window.innerWidth;
	H = can.height = window.innerHeight;


	shape = new Shape(W/2 , H/2 , message.value);
	shape.getValue();

	gameloop();
	
}
function change  () {
	ctx.clearRect(0, 0, W , H);
	shape.dots = [];
	shape.text = message.value;
	shape.getValue();
}

document.body.onload = init;

function gameloop () {
	window.requestAnimFrame(gameloop);

	var dots = shape.dots;

	ctx.clearRect(0, 0, W , H);

	for(var i = 0 , length = dots.length; i < length ; i++) {
		dots[i].update();
	}
}



function resize () {
	W = can.width = window.innerWidth;
	H = can.height = window.innerHeight;
}

window.addEventListener('resize' , resize , false);