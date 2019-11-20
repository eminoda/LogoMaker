const { app, BrowserWindow } = require('electron');
const path = require('path');
const config = require('../config');
module.exports = function createWindow() {
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		show: false,
		backgroundColor: config.window.backgroundColor,
		webPreferences: {
			devTools: config.window.devTools
		}
	});
	win.loadURL(config.clientUrl);

	win.once('ready-to-show', () => {
		win.show();
	});

	win.webContents.openDevTools();

	win.on('closed', function() {
		win = null;
	});
	return win;
};
