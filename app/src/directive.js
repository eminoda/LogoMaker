import Vue from 'vue';

Vue.directive('href', {
	bind: function(el, binding) {
		el.addEventListener('click', function() {
			window.location.href = binding.value;
		});
	}
});
