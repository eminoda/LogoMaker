const { app, BrowserWindow } = require('electron');

const createWindow = require('./createWindow');
const registerShortcut = require('./registerShortcut');

let win;
app.on('ready', function() {
	let result = registerShortcut(win, 'Ctrl+F12');
	win = createWindow();
});

app.on('window-all-closed', function() {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (win === null) {
		win = createWindow();
	}
});
