<template>
	<vv-form-group name="水印设置">
		<vv-form-item label="颜色" type="colorPicker" v-model="water.color"></vv-form-item>
		<vv-form-item label="文字" v-model="water.text"></vv-form-item>
		<vv-form-item label="字体" v-model="water.font"></vv-form-item>
		<vv-form-item
			label="定位"
			type="select"
			v-model="water.position"
			:options="[{ label: '左上角', value: 'leftTop' }, { label: '右下角', value: 'rightBottom' }]"
		></vv-form-item>
		<vv-form-item label="粗体" type="switch" v-model="water.weight"></vv-form-item>
		<vv-form-item label="开启" type="switch" v-model="water.open"></vv-form-item>
	</vv-form-group>
</template>
<script>
export default {
	name: 'water',
	data() {
		return {
			water: this.$store.state.water
		};
	},
	methods: {},
	watch: {
		water: {
			handler(newValue) {
				this.$store.commit('updateWater', newValue);
			},
			deep: true
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';
</style>

		<vv-form-item label="水印" type="switch" v-model="panel.watermark"></vv-form-item>