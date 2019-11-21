const ElectronWindow = require('./electronWindow');
const config = require('./config');
console.log(process.versions);
const electronWindow = new ElectronWindow(config);
electronWindow
	.init()
	.then(data => {
		console.log('application start');
	})
	.catch(err => {
		console.log(err);
	});
