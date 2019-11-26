<template>
	<el-footer height="auto">
		<div class="footer-wrap">
			<span>友情链接：</span>
			<span v-for="(item, index) in tabs" :key="index" class="tab-item">
				<span class="text" @click="openWindows(item.url)">{{ item.text }}</span>
			</span>
		</div>
	</el-footer>
</template>
<script>
import { TEXT } from '../constant';
export default {
	name: 'vv-footer',
	data() {
		return {
			tabs: TEXT.FOOT_URLS
		};
	},
	methods: {
		openWindows(url) {
			window.open(url, '_blank','nodeIntegration=no');
		}
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
