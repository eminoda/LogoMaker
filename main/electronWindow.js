const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const path = require('path');
class ElectronWindow {
	constructor(config) {
		this.win;
		this.config = config;
	}
	async init() {
		await this.createWindow();
		this.registerShortcut('ctrl+f12', () => {
			this.win.webContents.openDevTools();
		});
		this.appListen();
		this.ipcListen();
	}
	createWindow() {
		let self = this;
		return new Promise((resolve, reject) => {
			app.on('ready', function() {
				try {
					let win = new BrowserWindow({
						width: self.config.window.width,
						height: self.config.window.height,
						show: false,
						backgroundColor: self.config.window.backgroundColor,
						webPreferences: {
							nodeIntegration: true,
							devTools: self.config.window.devTools,
							enableRemoteModule: self.config.window.enableRemoteModule,
							allowRunningInsecureContent: self.config.window.allowRunningInsecureContent,
							webSecurity: self.config.window.webSecurity
						}
					});
					// win.loadURL(self.config.clientUrl);
					win.loadFile(path.join(__dirname, '../app/dist/index.html'));

					win.once('ready-to-show', () => {
						win.show();
					});

					win.webContents.openDevTools();

					win.on('closed', function() {
						win = null;
					});
					this.win = win;
					resolve(true);
				} catch (err) {
					reject(err);
				}
			});
		});
	}
	registerShortcut(command, cb) {
		return globalShortcut.register(command, cb);
	}
	appListen() {
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
	}
	ipcListen() {
		ipcMain.on('main-receiver', (event, arg) => {
			console.log(arg); // prints "ping"
			event.reply('replyer', 'pong');
			// event.returnValue = 'pong' // sync reply
		});
	}
}
module.exports = ElectronWindow;
