var can,
	ctx,
	w,
	h,

	girlPic = new Image(),
	starPic = new Image(),

	num = 50,
	star = [];

var lastTime,
	deltaTime;

var switchy = false,
	life = 0;



function init () {
	can = document.getElementById('canvas');
	ctx = can.getContext('2d');

	w = can.width;
	h = can.height;

	girlPic.src = './src/girl.jpg';
	starPic.src = './src/star.png';

	for (var i = 0 ; i < num ; i++) {
		var starItem = new starObj();
		star.push(starItem);
		star[i].init();

	}

	can.addEventListener('mousemove', mousemove , false);


	lastTime = Date.now();
	
	
	gameLoop();
}

document.body.onload = init;

function gameLoop () {
	window.requestAnimFrame(gameLoop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	fillCanvas();
	drawGirl();
	drawStar();
	showStar();
}

function fillCanvas () {
	ctx.fillStyle = '#393550'; 	// 背景色
	ctx.fillRect(0, 0, w, h);		// 绘制背景色
}

function drawGirl () {
	ctx.drawImage(girlPic , 100 , 150 , 600 , 300);
}

function mousemove (e) {
	if(e.offsetX || e.layerX) {
		var px = e.offsetX == undefined ? e.layerX : e.offsetX;
		var py = e.offsetY == undefined ? e.layerY : e.offsetY;

		if (px > 100 && px < 700 && py > 150 && py < 450) {
			switchy = true;
		}else {
			switchy = false;
		}

	}
}