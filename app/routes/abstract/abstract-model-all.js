import Ember from 'ember';

export default Ember.Route.extend({
	routeUtils: Ember.inject.service(),
	model() {
		let modelType = this.get('routeUtils').getParentType(this);
		return this.get('store').findAll(modelType, { reload: true });
	}
});
