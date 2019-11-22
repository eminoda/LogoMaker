<template>
	<div class="wrap">
		<el-row>
			<el-col :span="12">
				<vv-form-group name="画板设置">
					<vv-form-item label="背景色" type="colorPicker" v-model="panel.color"></vv-form-item>
					<vv-form-item label="宽" type="slider" v-model="panel.width"></vv-form-item>
					<vv-form-item label="高" type="slider" v-model="panel.height"></vv-form-item>
					<vv-form-item label="水印" type="switch" v-model="panel.watermark"></vv-form-item>
				</vv-form-group>
			</el-col>
			<el-col :span="12">
				<vv-form-group name="文字设置">
					<vv-form-item label="颜色" type="colorPicker" v-model="word.color"></vv-form-item>
					<vv-form-item label="文字" v-model="word.text"></vv-form-item>
					<vv-form-item label="字体" v-model="word.font"></vv-form-item>
					<vv-form-item label="填充" type="switch" v-model="word.fill"></vv-form-item>
					<vv-form-item label="粗体" type="switch" v-model="word.weight"></vv-form-item>
				</vv-form-group>
			</el-col>
		</el-row>
		<el-row>
			<vv-preview :panel="panel" :word="word" @draw-finish="onDrawFinish"></vv-preview>
		</el-row>
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
				color: '#FFC90E',
				width: 0,
				height: 0,
				watermark: false
			},
			word: {
				text: 'JS',
				font: 'sans-serif',
				color: '#333333',
				size: 0,
				fill: true,
				weight: true
			}
		};
	},
	methods: {
		build() {
			// ipcRenderer.sendSync
			ipcRenderer.on('render-receiver', (event, arg) => {
				console.log(arg); // prints "pong"
			});
			// ipcRenderer.send('main-receiver', {
			// 	type: 'logomaker',
			// 	panel: this.panel,
			// 	word: this.word
			// });
		},
		onDrawFinish(data) {
			console.log(data);
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
</style>
