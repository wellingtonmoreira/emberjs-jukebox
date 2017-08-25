import AbstractModelEdit from 'emberjs-jukebox/routes/abstract/abstract-model-edit';

export default AbstractModelEdit.extend({
	afterModel() {
		this.controllerFor(this.routeName)
			.set('artists', this.store.findAll('artist'));
	}
});
