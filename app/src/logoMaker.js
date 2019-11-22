class LogoMaker {
	constructor(panel = {}, word = {}) {
		this.panel = {
			width: panel.width || 500,
			height: panel.height || 230,
			color: panel.color || '#FFC90E'
		};
		this.word = word;
		this.canvas = this.createCanvas();
		this.ctx = this.canvas.getContext('2d');
	}
	createCanvas() {
		let canvas = document.createElement('canvas');
		canvas.width = this.panel.width;
		canvas.height = this.panel.height;
		return canvas;
	}
	hexColorToRgb(hexColor) {
		let hexColorArr = hexColor
			.toUpperCase()
			.split('')
			.slice(1);
		let rgbColorArr = [];
		const INT_HEX_MAP = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };
		for (let i = 0; i < hexColorArr.length; i++) {
			let item = hexColorArr[i];
			if (INT_HEX_MAP[item]) {
				item = INT_HEX_MAP[item];
			}
			hexColorArr[i] = Number(item);
		}
		let sum = '';
		hexColorArr.forEach((ele, index) => {
			if ((index + 1) % 2) {
				sum = '';
				sum = ele * 16;
			} else {
				sum = ele + sum;
				rgbColorArr.push(sum);
			}
		});
		return `rgb(${rgbColorArr.join(',')})`;
	}
	drawPanel(type = 'fill', color = '#ffffff', point = {}, size = {}) {
		color = this.hexColorToRgb(color);
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
	drawText(word) {
		const fontMerge = function(size = 50, weight = 'bold', font = 'Microsoft YaHei,Lucida Grande,Helvetica,sans-serif') {
			return `${weight} ${size}px ${font}`;
		};
		this.ctx.fillStyle = this.hexColorToRgb(word.color || '#333333');
		this.ctx.font = fontMerge(this.word.size || 50, this.word.weight ? 'bold' : 'normal', this.word.font);
		this.ctx.textAlign = 'center';
		this.ctx.textBaseline = 'middle';
		this.ctx.fillText(this.word.text || 'JS', this.panel.width / 2, this.panel.height / 2);
	}
	getBase64Url() {
		console.log(this.canvas.toDataURL('image/png'));
		return this.canvas.toDataURL('image/png');
	}
	draw($parentDom) {
		this.drawPanel('fill', this.panel.color);
		this.drawText(this.word);
		this.appendToParent($parentDom);
	}
	appendToParent($parentDom) {
		for (let child of $parentDom.childNodes) {
			$parentDom.removeChild(child);
		}
		$parentDom.appendChild(this.canvas);
	}
}
export default LogoMaker;
