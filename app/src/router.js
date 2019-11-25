import Vue from 'vue';
import Router from 'vue-router';

const LogoMaker = () => require.ensure([], () => require('./pages/LogoMaker.vue'), 'LogoMaker');
const Setting = () => require.ensure([], () => require('./pages/Setting.vue'), 'Setting');
const Panel = () => require.ensure([], () => require('./pages/logoMaker/Panel.vue'), 'Panel');

Vue.use(Router);

const routes = [
	{ path: '/', redirect: '/logoMaker' },
	{
		path: '/logoMaker',
		component: LogoMaker,
		children: [
			{
				path: 'panel',
				component: Panel
			}
		]
	},
	{ path: '/setting', component: Setting }
];
const routers = new Router({
	routes
});
export default routers;
