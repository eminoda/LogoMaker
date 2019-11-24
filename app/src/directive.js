import Vue from 'vue';

Vue.directive('href', {
	bind: function(el, binding) {
		el.addEventListener('click', function() {
			window.location.href = binding.value;
		});
	}
});
Vue.directive('go', {
	bind: function(el, binding, vnode) {
		el.addEventListener('click', function() {
			vnode.context.$router.push(binding.value).catch(err => {
				err;
			});
		});
	}
});
