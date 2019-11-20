<template>
	<el-header>
		<div class="header-wrap">
			<div v-for="(item, index) in tabs" :key="index" class="tab-item" :class="[{ 'tab-active': active == item.to.path }]">
				<div><i :class="item.icon"></i></div>
				<div class="text">{{ item.text }}</div>
			</div>
		</div>
	</el-header>
</template>
<script>
export default {
  name: 'vv-header',
  data() {
    return {
      active: this.$router.currentRoute.path,
      tabs: [{
        to: { path: '/' },
        text: 'Logo 图制作',
        icon: 'el-icon-edit-outline'
      }, {
        to: { path: 'watermark' },
        text: '水印设置',
        icon: 'el-icon-picture'
      }]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
.header-wrap {
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: $green-500;
	color: $white;
	.tab-item {
		text-align: center;
		width: 100%;
		padding: 20px 0;
		cursor: pointer;
		i {
			font-size: 40px;
		}
		.text {
			margin-top: 5px;
			font-size: 16px;
		}
		&:hover {
			background-color: $green-600;
		}
	}
	.tab-active {
		background-color: $green-600;
	}
}
</style>
