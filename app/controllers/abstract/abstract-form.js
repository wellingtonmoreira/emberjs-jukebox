import Ember from 'ember';

export default Ember.Controller.extend({
	routeUtils: Ember.inject.service(),
	actions: {
		submit: function() {
			this.get('model')
				.save();
			this.transitionToRoute(this.get('routeUtils').getParentRoute(this));
		},
		back: function() {
			this.send('rollback');
			this.transitionToRoute(this.get('routeUtils').getParentRoute(this));
		},
		rollback: function() {
			this.get('model').rollbackAttributes();
		}
	}
});
