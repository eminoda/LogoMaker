class LogoMaker {
	constructor(options = {}) {
		this.options = {
			width: options.width || 500,
			height: options.height || 230
		};
		this.$canvas = this.createCanvas();
		this.ctx = this.initContext();
		this.error = {
			point: '请设置起始坐标',
			size: '请设置图形尺寸'
		};
		this.draw();
	}
	createCanvas() {
		let $canvas = document.createElement('canvas');
		$canvas.width = this.options.width;
		$canvas.height = this.options.height;
		return $canvas;
	}
	initContext() {
		return this.$canvas.getContext('2d');
	}
	draw() {
		let ctx = this.ctx;
		this.drawRect('fill', 'rgb(43,58,66)', {}, {});
		this.drawText('Webpack', 'rgb(117,175,204)');
		this.drawWaterMark();
	}
	drawText(text, color) {
		this.ctx.fillStyle = color;
		this.ctx.font = 'bold 50px Microsoft YaHei,Lucida Grande,Helvetica,sans-serif';
		this.ctx.textAlign = 'center';
		this.ctx.textBaseline = 'middle';
		this.ctx.fillText(text, this.options.width / 2, this.options.height / 2);
	}
	drawWaterMark() {
		this.ctx.fillStyle = 'rgba(255,255,255,0.8)';
		this.ctx.font = '300 16px Microsoft YaHei,Lucida Grande,Helvetica,sans-serif';
		this.ctx.textAlign = 'start';
		let text = this.ctx.measureText('前端雨爸 Eminoda');
		console.log(text);
		// this.ctx.fillText('前端雨爸 Eminoda', 10, 20);
	}
	/**
	 * 绘制矩形
	 * @param {String} type clear | fill | stroke
	 * @param {Object} point {x,y}
	 * @param {Object} size {width,height}
	 */
	drawRect(type, color = 'rgba(0,0,0,1)', point = {}, size = {}) {
		if (!point) {
			throw new Error(this.error.point);
		}
		if (!size) {
			throw new Error(this.error.size);
		}
		const x = point.x || 0;
		const y = point.y || 0;
		const width = size.width || this.options.width;
		const height = size.height || this.options.height;

		if (type == 'clear') {
			this.ctx.cliearRect(x, y, width, height);
		} else if (type == 'stroke') {
			this.ctx.strokeStyle = color;
			this.ctx.strokeRect(x, y, width, height);
		} else {
			this.ctx.fillStyle = color;
			this.ctx.fillRect(x, y, width, height);
		}
	}
	appendToParentNode($parentDom) {
		$parentDom.appendChild(this.$canvas);
	}
}
const logoMaker = new LogoMaker();

logoMaker.appendToParentNode(document.getElementById('root'));

var baseUrl = logoMaker.$canvas.toDataURL('image/png');

var data = window.atob(baseUrl.split(',')[1]);

var ia = new Uint8Array(data.length);
for (var i = 0; i < data.length; i++) {
	ia[i] = data.charCodeAt(i);
}
var blob = new Blob([ia], {
	type: 'image/png'
});

var a = document.createElement('a');
a.href = URL.createObjectURL(blob);
a.download = 'webpack.png';
a.text = '预览图片';
document.body.appendChild(a);
