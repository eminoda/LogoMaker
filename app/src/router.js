import Vue from 'vue';
import Router from 'vue-router';

const LogoMaker = () => require.ensure([], () => require('./pages/LogoMaker.vue'), 'LogoMaker');
const WaterMark = () => require.ensure([], () => require('./pages/WaterMark.vue'), 'WaterMark');

Vue.use(Router);

const routes = [
	{ path: '/', component: LogoMaker },
	{ path: '/WaterMark', component: WaterMark }
];
const routers = new Router({
	routes
});
export default routers;
