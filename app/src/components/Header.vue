<template>
	<el-header>
		<div class="header-wrap">
			<div
				class="tab-item"
				v-for="(item, index) in tabs"
				:key="index"
				:class="[{ 'tab-active': active == item.name }]"
				@click="selectTab(item)"
			>
				<div>
					<i :class="item.icon"></i>
				</div>
				<div class="text">{{ item.text }}</div>
			</div>
		</div>
	</el-header>
</template>
<script>
export default {
	name: 'vv-header',
	data() {
		return {
			active: this.$router.currentRoute.path.indexOf('logMaker') !== -1 ? 'logMaker' : 'setting',
			tabs: [
				{
					name: 'logMaker',
					route: { path: '/logoMaker/panel' },
					text: 'Logo 图制作',
					icon: 'el-icon-edit-outline'
				},
				{
					name: 'setting',
					route: { path: '/setting' },
					text: '设置',
					icon: 'el-icon-picture'
				}
			]
		};
	},
	methods: {
		selectTab(item) {
			this.active = item.name;
			this.$router.push(item.route).catch(err => {
				err;
			});
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
.header-wrap {
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: $green-500;
	color: $white;
	.tab-item {
		text-align: center;
		width: 100%;
		padding: 20px 0;
		cursor: pointer;
		i {
			font-size: 40px;
		}
		.text {
			margin-top: 5px;
			font-size: 16px;
		}
		&:hover {
			background-color: $green-600;
		}
	}
	.tab-active {
		background-color: $green-600;
	}
}
</style>
