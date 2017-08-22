import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		submit: function() {
			var submitFn = this.get('submit');
			if (submitFn) { submitFn(); }
		}
	}
});
