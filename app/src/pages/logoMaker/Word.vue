<template>
	<vv-form-group name="文字设置">
		<vv-form-item label="颜色" type="colorPicker" v-model="word.color"></vv-form-item>
		<vv-form-item label="文字" v-model="word.text"></vv-form-item>
		<vv-form-item label="字体" v-model="word.font"></vv-form-item>
		<vv-form-item label="粗体" type="switch" v-model="word.weight"></vv-form-item>
	</vv-form-group>
</template>
<script>
export default {
	name: 'word',
	data() {
		return {
			word: this.$store.state.word
		};
	},
	methods: {},
	watch: {
		word: {
			handler(newValue) {
				this.$store.commit('updateWord', newValue);
			},
			deep: true
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';
</style>
