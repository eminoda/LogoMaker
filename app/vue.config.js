module.exports = {
	configureWebpack: {
		externals: {
			electron: 'electron'
		}
	},
	chainWebpack: config => {
		// 移除 prefetch 插件
		config.plugins.delete('prefetch');
	},
	publicPath: '.',
	devServer: {
		port: '8080',
		host: '0.0.0.0',
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:7001',
				ws: true,
				changeOrigin: true
			}
		}
	}
};
