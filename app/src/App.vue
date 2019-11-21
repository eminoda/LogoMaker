<template>
	<div id="app">
		<el-container>
			<vv-header></vv-header>
			<el-main>
				<router-view></router-view>
			</el-main>
			<vv-footer></vv-footer>
		</el-container>
	</div>
</template>

<script>
console.log(process.env.VUE_APP_MAIN_PATH);
export default {
  name: 'app'
}
</script>

<style>
</style>
