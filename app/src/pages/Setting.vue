<template>
	<div>
		<vv-form-group name="系统设置">
			<vv-form-item label="用户目录" type="input" v-model="setting.userPath"></vv-form-item>
			<button @click="setUserPath">设置目录</button>
		</vv-form-group>
	</div>
</template>
<script>
const { ipcRenderer } = require('electron');
export default {
	name: 'setting',
	data() {
		return {
			setting: { userPath: '' }
		};
	},
	methods: {
		setUserPath() {
			ipcRenderer.send('main-receiver', {
				type: 'openFileDirectory'
			});
			ipcRenderer.on('render-receiver', (event, arg) => {
				if (arg.type == 'openFileDirectory') {
					console.log(arg);
				}
			});
		}
	},
	created() {
		ipcRenderer.send('main-receiver', {
			type: 'showSystemSetting'
		});
		ipcRenderer.on('render-receiver', (event, arg) => {
			if (arg.type == 'showSystemSetting') {
				this.setting = arg.setting;
			}
		});
	}
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
</style>
