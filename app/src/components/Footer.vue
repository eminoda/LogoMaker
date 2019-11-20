<template>
	<el-footer>
		<div class="footer-wrap">
			<span>友情链接：</span>
			<span v-for="(item, index) in tabs" :key="index" class="tab-item">
				<span class="text">{{ item.text }}</span>
			</span>
		</div>
	</el-footer>
</template>
<script>
export default {
  name: 'vv-footer',
  data() {
    return {
      tabs: [{
        to: { path: '/' },
        text: '我的头条号「前端雨爸」'
      }, {
        to: { path: 'watermark' },
        text: '我的博客'
      }]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
.footer-wrap {
	background-color: $gray-800;
	padding: 8px 20px;
	color: $gray-200;
	.text {
        cursor: pointer;
        font-size: 14px;
		margin: 0 10px;
		border-bottom: 1px solid $gray-200;
	}
}
</style>
