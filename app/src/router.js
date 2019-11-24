import Vue from 'vue';
import Router from 'vue-router';

const LogoMaker = () => require.ensure([], () => require('./pages/LogoMaker.vue'), 'LogoMaker');
const Setting = () => require.ensure([], () => require('./pages/Setting.vue'), 'Setting');

Vue.use(Router);

const routes = [
	{ path: '/', redirect: '/setting' },
	{ path: '/logoMaker', component: LogoMaker },
	{ path: '/setting', component: Setting }
];
const routers = new Router({
	routes
});
export default routers;
