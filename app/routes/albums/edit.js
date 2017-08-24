import AbstractModelEdit from 'trainees-emberjs/routes/abstract/abstract-model-edit';

export default AbstractModelEdit.extend({
	afterModel() {
		this.controllerFor(this.routeName)
			.set('artists', this.store.findAll('artist'));
	}
});
