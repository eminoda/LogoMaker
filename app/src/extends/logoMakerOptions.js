const { ipcRenderer } = require('electron');
export default {
	created() {
		ipcRenderer.send('main-receiver', {
			type: 'logoMakerBaseOptions'
		});
		ipcRenderer.on('render-receiver', (event, arg) => {
			this.options = arg.options;
		});
	}
};
