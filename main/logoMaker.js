const { createCanvas } = require('canvas');
export default class LogoMaker {
	constructor(panel = {}, options = {}) {
		this.panel = {
			width: panel.width || 500,
			height: panel.height || 230
		};
		this.$canvas = createCanvas(this.panel.width, this.panel.height);
		this.ctx = this.$canvas.getContext('2d');
	}
	drawPanel(type, color = 'rgba(0,0,0,1)', point = {}, size = {}) {
		const x = point.x || 0;
		const y = point.y || 0;
		const width = size.width || this.panel.width;
		const height = size.height || this.panel.height;
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
	getBase64Url() {
		console.log(this.$canvas.toDataURL('image/png'));
		return this.$canvas.toDataURL('image/png');
	}
}
