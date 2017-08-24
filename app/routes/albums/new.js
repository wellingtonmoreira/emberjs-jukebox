import AbstractModel from 'trainees-emberjs/routes/abstract/abstract-model-new';

export default AbstractModel.extend({
	afterModel() {
		this.controllerFor(this.routeName)
			.set('artists', this.store.findAll('artist'));
	}
});
