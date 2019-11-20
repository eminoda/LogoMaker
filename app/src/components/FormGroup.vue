<template>
	<div class="form-wrap">
		<div class="title">
			<slot name="groupName">{{ name }}</slot>
		</div>
		<div class="form-group">
			<slot name="form-item"></slot>
		</div>
	</div>
</template>
<script>
export default {
  name: 'vv-form-group',
  data() {
    return {

    }
  },
  props: {
    name: String
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
.form-wrap {
	border: 1px solid $gray-400;
	border-radius: 10px;
	margin: 20px;
	position: relative;
	.title {
		position: absolute;
		top: -12px;
		padding: 0 8px;
		margin-left: 20px;
		background-color: $white;
		font-size: 16px;
		color: $gray-500;
	}
	.form-group {
		margin: 20px 0;
		font-size: 14px;
	}
}
</style>
