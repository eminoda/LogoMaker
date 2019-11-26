<template>
	<div class="wrap">
		<el-row>
			<el-col :span="4">
				<el-menu default-active="1" router>
					<el-menu-item
						v-for="(item,index) in menus"
						:key="index"
						:index="item.index"
						:route="item.route"
					>
						<i :class="item.icon"></i>
						<span slot="title">{{item.title}}</span>
					</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="20">
				<router-view></router-view>
			</el-col>
		</el-row>
		<el-row type="flex" justify="center">
			<vv-preview-dialog
				:panel="panel"
				:word="word"
				:dialogVisible="dialogVisible"
				:canvas="canvas"
				@close="handleClose"
			></vv-preview-dialog>
			<el-button type="success" @click="preview()">预览</el-button>
		</el-row>
	</div>
</template>
<script>
import LogoMaker from '../logoMaker';
import { TEXT } from '../constant';
import logoMakerOptions from '../extends/logoMakerOptions';
export default {
	name: 'app',
	extends: logoMakerOptions,
	data() {
		return {
			menus: TEXT.LEFT_MENUS,
			options: {},
			panel: this.$store.state.panel,
			word: this.$store.state.word,
			water: this.$store.state.water,
			dialogVisible: false,
			canvas: document.createElement('canvas')
		};
	},
	methods: {
		preview() {
			const { panel, word, water } = this.$store.state;
			this.panel = panel;
			this.panel.width = (panel.width * this.options.panel.width) / 100;
			this.panel.height = (panel.height * this.options.panel.height) / 100;
			
			this.word = word;
			this.water = water;
			let lm = new LogoMaker(this.panel, this.word, this.water);
			this.canvas = lm.draw();
			this.dialogVisible = true;
		},
		handleClose(data) {
			this.dialogVisible = data.value;
			if (data.status == 'download') {
				this.$notify({
					title: '成功',
					message: '图片保存成功，请去「个人设置」查看',
					type: 'success'
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
</style>
