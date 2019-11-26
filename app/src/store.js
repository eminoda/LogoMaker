// import { mapState } from 'vuex'
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		panel: {
			color: '#FFC90E',
			width: 100,
			height: 100,
			fill: true
		},
		word: {
			text: 'JS',
			font: 'sans-serif',
			color: '#333333',
			size: 50,
			weight: true
		},
		water: {
			open: true,
			text: '前端雨爸',
			font: 'sans-serif',
			color: '#FFFFFF',
			size: 20,
			weight: false,
			position: 'rightBottom'
		}
	},
	mutations: {
		updatePanel(state, payload) {
			state.panel = payload;
		},
		updateWord(state, payload) {
			state.word = payload;
		},
		updateWater(state, payload) {
			state.water = payload;
		}
	}
});
export default store;
