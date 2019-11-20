const { app, globalShortcut } = require('electron');

module.exports = function registerShortcut(win, command) {
	return globalShortcut.register(command, () => {
		win.webPreferences.devTools = true;
	});
};
