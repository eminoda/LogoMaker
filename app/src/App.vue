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
export default {
  name: 'app'
}
</script>

<style>
</style>
