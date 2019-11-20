<template>
	<div class="wrap">
		<div class="text">{{ label }}：</div>
		<el-slider v-model="value1"></el-slider>
	</div>
</template>
<script>
export default {
  name: 'vv-form-item-slider',
  data() {
    return {
      value1: 80
    }
  },
  props: {
    label: String
  },
  inheritAttrs: false,
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
.wrap {
	display: flex;
	justify-content: center;
	margin-bottom: 10px;
	.text {
		line-height: 40px;
		width: 20%;
		text-align: right;
		padding-right: 10px;
	}
	[role] {
		width: 100%;
	}
}
</style>
