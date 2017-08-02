function Particle (x , y , type) {
	this.x = x;
	this.y = y;
	this.type = type;

	this.color = colors[Math.floor(Math.random() * colors.length)];

	this.radius = Math.random() * 5;

	this.dying = false;

	this.futurRadius = Math.ceil(Math.random() * 5 );
	

} 

Particle.prototype.update = function () {

	

	if(this.radius < this.futurRadius && this.dying === false) {
		this.radius += .3;
	}else {
		this.dying = true;
	}

	if(this.dying) {
		this.radius -= .3;
	}

	// console.log(this.radius);

	if(this.type == 'ball') {
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius , 0 , Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}

	if(this.type == 'rect') {
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.radius, this.radius);
		ctx.closePath();
		ctx.fill();
	}



	if(this.radius < 1) {
		this.radius = 1;
		this.dying = false;
		this.futurRadius = Math.ceil(Math.random() * 5 );
	}
}