function Shape (x , y, text) {
	this.x = x;
	this.y = y;
	this.text = text;

	this.dots = [];
}

Shape.prototype.getValue = function () {
	ctx.font = '150px Arial';
	ctx.textAlign = "center";
	ctx.fillText(this.text , this.x , this.y);


	var idata = ctx.getImageData(0, 0, W, H);
	ctx.clearRect(0, 0, W , H);

	var buffer32 = new Uint32Array(idata.data.buffer);
	// console.log(colors);
	for(var j = 0 ; j < H ; j += gridY) {
		for(var i = 0 ; i < W ; i += gridX) {
			var dot = {};
			if(buffer32[j * W + i]) {
				/*dot.x = i;
				dot.y = j;*/

				// dot.c = colors[Math.floor(Math.random() * colors.length - 1)];
				var dot = new Particle(i , j , type);
				this.dots.push(dot);
			}
		}
	}
	// console.log(this.dots);
	

}