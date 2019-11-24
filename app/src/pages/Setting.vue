<template>
	<div>
		<el-button @click="file">显示文件夹目录</el-button>
	</div>
</template>
<script>
const { ipcRenderer } = require('electron');
export default {
  name: 'setting',
  data() {
    return {}
  },
  methods: {
    file() {
      ipcRenderer.send('main-receiver', {
        type: 'showDownloadFiles'
      });
      ipcRenderer.on('render-receiver', (event, arg) => {
        console.log(1);
        console.log(arg.filePaths);
      });
    }
  },
  created() {

  }
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
</style>
