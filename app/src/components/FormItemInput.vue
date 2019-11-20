<template>
	<div class="wrap">
		<div class="text">{{ label }}：</div>
    <el-input placeholder="请选择日期" :value="value" v-bind="$attrs" v-on="inputListeners"></el-input>
	</div>
</template>
<script>
export default {
  name: 'vv-form-item-input',
  data() {
    return {
    }
  },
  props: {
    value: String,
    label: String
  },
  inheritAttrs: false,
  computed: {
    inputListeners: function() {
      var vm = this;
      return Object.assign(
        {},
        this.$listeners,
        {
          input: function(event) {
            vm.$emit("input", event);
          }
        }
      );
    }
  }
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
}
</style>
