<template>
	<div class="wrap">
		<el-row>
			<el-col :span="12">
				<vv-form-group name="画板设置">
					<vv-form-item label="背景色" type="colorPicker" v-model="panel.backgroundColor"></vv-form-item>
					<vv-form-item label="宽" type="slider" v-model="panel.width"></vv-form-item>
					<vv-form-item label="高" type="slider" v-model="panel.height"></vv-form-item>
					<vv-form-item label="水印" type="switch" v-model="panel.watermark"></vv-form-item>
				</vv-form-group>
			</el-col>
			<el-col :span="12">
				<vv-form-group name="文字设置">
					<vv-form-item label="字体" v-model="word.font"></vv-form-item>
					<vv-form-item label="颜色" type="colorPicker" v-model="word.color"></vv-form-item>
					<vv-form-item label="填充" type="switch" v-model="word.fill"></vv-form-item>
					<vv-form-item label="粗体" type="switch" v-model="word.weight"></vv-form-item>
				</vv-form-group>
			</el-col>
		</el-row>
		<div>{{panel.backgroundColor}}</div>
		<el-row type="flex" justify="center" style="margin-bottom:50px;">
			<el-button type="success" @click="build()">生成</el-button>
			<el-button type="warning" plain>预览</el-button>
		</el-row>
	</div>
</template>
<script>
const { ipcRenderer } = require('electron');
export default {
	name: 'app',
	data() {
		return {
			panel: {
				backgroundColor: '#28a745',
				width: 0,
				height: 0,
				watermark: false
			},
			word: {
				font: 'sans-serif',
				color: '',
				size: '',
				fill: true,
				weight: true
			}
		};
	},
	methods: {
		build() {
			console.log(this.panel);
			console.log(this.word);
			// ipcRenderer.sendSync
			ipcRenderer.on('replyer', (event, arg) => {
				console.log(arg); // prints "pong"
			});
			ipcRenderer.send('main-receiver', this.panel);
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
</style>
