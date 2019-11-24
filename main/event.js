const fs = require('fs');
const path = require('path');

class File {
	constructor(options = {}) {
		this.directory = options.directory || path.join(__dirname, '../download');
	}
	parseBase64Data(base64) {
		let parseResult = base64.match(/data:image\/(\w+);base64,([\w\/\+]+)/);
		return {
			fileData: parseResult[2],
			ext: parseResult[1]
		};
	}
	saveFile(fileName, fileData) {
		let buffer = new Buffer.from(fileData, 'base64');
		let filePath = path.join(this.directory, `${fileName}`);
		fs.writeFileSync(filePath, buffer);
	}
}

module.exports = { File };
