<template>
	<div class="form-item-wrap">
		<div class="text">{{ label }}：</div>
		<div class="item">
			<template v-if="type=='input'">
				<el-input :placeholder="placeholder" :value="value" v-bind="$attrs" v-on="inputListeners"></el-input>
			</template>
			<template v-if="type=='colorPicker'">
				<el-color-picker :value="value" v-bind="$attrs" v-on="inputListeners" size="medium"></el-color-picker>
			</template>
			<template v-else-if="type=='slider'">
				<el-slider :value="value" v-bind="$attrs" v-on="inputListeners"></el-slider>
			</template>
			<template v-else-if="type=='switch'">
				<el-switch style="display: block" :value="value" v-bind="$attrs" v-on="inputListeners"></el-switch>
			</template>
		</div>
		<!-- <component v-bind:is="currentTabComponent"></component> -->
		<!-- <slot name="form-item"></slot> -->
	</div>
</template>
<script>
export default {
	name: 'vv-form-item',
	data() {
		return {};
	},
	props: {
		type: {
			type: String,
			default: 'input'
		},
		value: [String, Number, Boolean],
		label: String,
		placeholder: {
			type: String,
			default: '请输入需要的值'
		}
	},
	inheritAttrs: false,
	computed: {
		inputListeners: function() {
			var vm = this;
			return Object.assign({}, this.$listeners, {
				input: function(value) {
					vm.$emit('input', value);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
.form-item-wrap {
	display: flex;
	justify-content: center;
	margin: 6px 20px;
	.text {
		line-height: 36px;
		width: 20%;
		text-align: right;
		padding-right: 20px;
		user-select: none;
	}
	.item {
		width: 80%;
		height: 36px;
		.el-switch {
			line-height: 36px;
		}
		.el-input {
			line-height: 36px;
			height: 36px;
		}
	}
}
</style>
