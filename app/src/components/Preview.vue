<template>
	<div class="wrap">
		<div id="preview">
			<div>123</div>
		</div>
		<el-button type="warning" plain @click="view()">预览</el-button>
	</div>
</template>
<script>
import LogeMaker from '../logoMaker';
export default {
	name: 'vv-preview',
	data() {
		return {};
	},
	props: {
		panel: Object,
		word: Object
	},
	methods: {
		view() {
			let lm = new LogeMaker(this.panel, this.word);
            lm.draw(document.getElementById('preview'));
            this.$emit('draw-finish',true);
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
.wrap {
	width: 500px;
	margin: auto;
}
#preview {
	border: 1px solid $gray-200;
	width: 500px;
	height: 230px;
}
</style>
