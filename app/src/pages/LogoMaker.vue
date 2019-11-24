<template>
	<div class="wrap">
		<el-row>
			<el-col :span="8">
				<vv-form-group name="画板设置">
					<vv-form-item label="背景色" type="colorPicker" v-model="panel.color"></vv-form-item>
					<vv-form-item label="宽" type="slider" v-model="panel.width"></vv-form-item>
					<vv-form-item label="高" type="slider" v-model="panel.height"></vv-form-item>
					<vv-form-item label="填充" type="switch" v-model="panel.fill"></vv-form-item>
					<vv-form-item label="水印" type="switch" v-model="panel.watermark"></vv-form-item>
				</vv-form-group>
			</el-col>
			<el-col :span="8">
				<vv-form-group name="文字设置">
					<vv-form-item label="颜色" type="colorPicker" v-model="word.color"></vv-form-item>
					<vv-form-item label="文字" v-model="word.text"></vv-form-item>
					<vv-form-item label="字体" v-model="word.font"></vv-form-item>
					<vv-form-item label="粗体" type="switch" v-model="word.weight"></vv-form-item>
				</vv-form-group>
			</el-col>
			<el-col :span="8">
				<vv-form-group name="水印设置">
					<vv-form-item label="颜色" type="colorPicker" v-model="water.color"></vv-form-item>
					<vv-form-item label="文字" v-model="water.text"></vv-form-item>
					<vv-form-item label="字体" v-model="water.font"></vv-form-item>
					<vv-form-item label="粗体" type="switch" v-model="water.weight"></vv-form-item>
				</vv-form-group>
			</el-col>
		</el-row>
		<vv-preview-dialog :panel="panel" :word="word" :dialogVisible="dialogVisible" :canvas="canvas" @close="handleClose"></vv-preview-dialog>
		<el-row type="flex" justify="center">
			<el-button type="success" @click="preview()">预览</el-button>
		</el-row>
	</div>
</template>
<script>
import LogoMaker from '../logoMaker';
export default {
  name: 'app',
  data() {
    return {
      panel: {
        color: '#FFC90E',
        width: 0,
        height: 0,
        fill: true,
        watermark: false
      },
      word: {
        text: 'JS',
        font: 'sans-serif',
        color: '#333333',
        size: 50,
        weight: true
      },
      water: {
        text: '前端雨爸',
        font: 'sans-serif',
        color: '#FFFFFF',
        size: 20,
        weight: false,
        position:'rightBottom'
      },
      dialogVisible: false,
      canvas: document.createElement('canvas')
    };
  },
  methods: {
    preview() {
      let lm = new LogoMaker(this.panel, this.word, this.water);
      this.canvas = lm.draw();
      this.dialogVisible = true;
    },
    onDrawFinish(data) {
      console.log(data);
    },
    handleClose(data) {
      this.dialogVisible = data.value;
      if (data.status == 'download') {
        this.$notify({
          title: '成功',
          message: '图片保存成功，请去「个人设置」查看',
          type: 'success'
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
</style>
