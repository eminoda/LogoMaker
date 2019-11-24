<template>
	<el-dialog title="预览" :visible.sync="show">
		<div id="preview">
			<div class="pre-canvas">预览</div>
		</div>
		<el-row type="flex" justify="center">
			<el-button type="warning" @click="download()">保存</el-button>
		</el-row>
	</el-dialog>
</template>
<script>
const { ipcRenderer } = require('electron');
export default {
  name: 'vv-preview-dialog',
  data() {
    return {
    };
  },
  props: {
    canvas: HTMLCanvasElement,
    panel: Object,
    word: Object,
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    show: {
      get() {
        return this.dialogVisible;
      },
      set(data) {
        this.$emit('close', { status: 'close', value: data });
      }
    }
  },
  methods: {
    download() {
      ipcRenderer.send('main-receiver', {
        type: 'logomaker',
        dataUrl: this.canvas.toDataURL('image/png'),
        fileName: this.word.text
      });
      ipcRenderer.on('render-receiver', (event, arg) => {
        if (arg.success) {
          this.$emit('close', { status: 'download', value: false });
        }
      });
    },
    appendToParent($parentDom) {
      for (let child of $parentDom.childNodes) {
        $parentDom.removeChild(child);
      }
      $parentDom.appendChild(this.canvas);
    }
  },
  updated() {
    if (this.dialogVisible) {
      this.appendToParent(document.getElementById('preview'));
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

#preview {
	border: 1px solid $gray-200;
	background-color: $gray-100;
	width: 500px;
	height: 230px;
	margin: 0 auto;
	margin-bottom: 20px;
	.pre-canvas {
		text-align: center;
		line-height: 230px;
	}
}
</style>
