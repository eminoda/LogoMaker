class LogoMaker {
	constructor(panel = {}, word = {}, water = {}) {
		this.panel = {
			width: panel.width || 500,
			height: panel.height || 230,
			color: panel.color || '#FFC90E', // 默认 js 的黄色
			type: panel.fill === true ? 'fill' : 'stroke'
		};
		console.log(this.panel);
		this.word = {
			text: word.text || 'JS',
			font: word.font || '',
			color: word.color || '#333333',
			weight: word.weight ? 'bold' : 'normal',
			textAlign: word.textAlign || 'center',
			textBaseline: word.textBaseline || 'middle',
			size: word.size || 50
		};
		this.water = {
			text: water.text || 'JS',
			font: water.font || '',
			color: water.color || '#FFFFFF',
			weight: water.weight ? 'bold' : 'normal',
			position: water.position || 'rightBottom', // 左上 | 右下
			textAlign: water.textAlign || water.position == 'leftTop' ? 'start' : 'end',
			textBaseline: water.textBaseline || 'middle',
			size: water.size || 20,
			padding: water.textBaseline || 10
		};
		this.canvas = this.createCanvas();
		this.ctx = this.canvas.getContext('2d');
	}

	createCanvas() {
		let canvas = document.createElement('canvas');
		canvas.width = this.panel.width;
		canvas.height = this.panel.height;
		return canvas;
	}

	drawPanel(type = this.panel.type, point = { x: 0, y: 0 }, size = { width: this.panel.width, height: this.panel.height }) {
		const color = this.hexColorToRgb(this.panel.color);
		const { width, height } = size;
		if (type == 'clear') {
			this.ctx.cliearRect(point.x, point.y, width, height);
		} else if (type == 'stroke') {
			this.ctx.strokeStyle = color;
			this.ctx.strokeRect(point.x, point.y, width, height);
		} else {
			this.ctx.fillStyle = color;
			this.ctx.fillRect(point.x, point.y, width, height);
		}
	}

	_mergeFontProperties(size = 50, weight = 'bold', font = 'Microsoft YaHei,Lucida Grande,Helvetica,sans-serif') {
		return `${weight} ${size}px ${font}`;
	}

	_setTextProperties(textProp) {
		this.ctx.fillStyle = this.hexColorToRgb(textProp.color);
		this.ctx.font = this._mergeFontProperties(textProp.size, textProp.weight, textProp.font);
	}
	_setTextPosition(textProp = { text: 'JS', textAlign: 'center', textBaseline: 'middle' }, point = { x: this.panel.width / 2, y: this.panel.height / 2 }) {
		this.ctx.textAlign = textProp.textAlign;
		this.ctx.textBaseline = textProp.textBaseline;
		this.ctx.fillText(textProp.text, point.x, point.y);
	}

	drawText(prop, point) {
		this._setTextProperties({
			color: prop.color,
			size: prop.size,
			weight: prop.weight,
			font: prop.font
		});
		this._setTextPosition(prop, point);
	}

	drawWatermark() {
		let point = {
			x: this.water.padding,
			y: this.water.size
		};
		if (this.water.position == 'rightBottom') {
			point = {
				x: this.panel.width - this.water.padding,
				y: this.panel.height - this.water.size
			};
		}
		this.drawText(this.water, point);
	}

	hexColorToRgb(hexColor = '#333333') {
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
	getBase64Url() {
		return this.canvas.toDataURL('image/png');
	}
	draw() {
		this.drawPanel();
		this.drawText(this.word);
		this.drawWatermark();
		return this.canvas;
		// this.appendToParent($parentDom);
	}
	appendToParent($parentDom) {
		for (let child of $parentDom.childNodes) {
			$parentDom.removeChild(child);
		}
		$parentDom.appendChild(this.canvas);
	}
}
export default LogoMaker;
