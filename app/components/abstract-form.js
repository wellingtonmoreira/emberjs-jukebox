import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		back: function() {
			var backFn = this.get('back');
			if (backFn) { backFn(); }
		},
		submit: function() {
			var submitFn = this.get('submit');
			if (submitFn) { submitFn(); }
		}
	}
});
