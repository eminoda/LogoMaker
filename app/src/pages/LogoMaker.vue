<template>
	<div class="wrap">
		<el-row>
			<el-col :span="12">
				<vv-form-group name="画板">
					<template #form-item>
						<vv-form-item-input v-model="backgroundColor" label="背景色"></vv-form-item-input>
						<vv-form-item-slider v-model="backgroundColor" label="宽度"></vv-form-item-slider>
					</template>
				</vv-form-group>
			</el-col>
			<el-col :span="12">456</el-col>
		</el-row>
		<div>{{ backgroundColor }}</div>
	</div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      value1:'',
      backgroundColor: ''
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
</style>
