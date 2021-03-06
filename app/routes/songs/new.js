import AbstractModel from 'emberjs-jukebox/routes/abstract/abstract-model-new';

export default AbstractModel.extend({
	afterModel() {
		this.controllerFor(this.routeName)
			.set('albums', this.store.findAll('album'));
	}
});
