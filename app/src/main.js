import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import ElementUI from 'element-ui';
import './directive';
import './filter';
import 'element-ui/lib/theme-chalk/index.css';
import './scss/style.scss';
Vue.config.productionTip = false;

let context = require.context('./components', true, /^\.\/.*vue$/);
context.keys().map(item => {
	let component = context(item).default;
	Vue.component(component.name, component);
});
Vue.use(ElementUI);
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
