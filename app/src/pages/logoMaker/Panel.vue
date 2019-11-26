<template>
	<vv-form-group name="画板设置">
		<vv-form-item label="背景色" type="colorPicker" v-model="panel.color"></vv-form-item>
		<vv-form-item label="宽(%)" type="number" v-model="panel.width"></vv-form-item>
		<vv-form-item label="高(%)" type="number" v-model="panel.height"></vv-form-item>
		<vv-form-item label="填充" type="switch" v-model="panel.fill"></vv-form-item>
	</vv-form-group>
</template>
<script>
export default {
	name: 'panel',
	data() {
		return {
			panel: this.$store.state.panel
		};
	},
	methods: {},
	watch: {
		panel: {
			handler(newValue) {
				this.$store.commit('updatePanel', newValue);
			},
			deep: true
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';
</style>
