import Ember from 'ember';

export default Ember.Route.extend({
	routeUtils: Ember.inject.service(),
	model(params) {
		let modelType = this.get('routeUtils').getParentType(this);
		return this.store.findRecord(modelType, params.id);
	}
});