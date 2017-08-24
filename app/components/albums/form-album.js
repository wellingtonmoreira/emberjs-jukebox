import AbstractForm from 'trainees-emberjs/components/abstract/abstract-form';

export default AbstractForm.extend({
	relationshipUtils: Ember.inject.service(),
	actions: {
		onSelectArtist: function (id) {
			this.get('relationshipUtils')
				.updateBelongsToById([id, 
									this.get('model'),
									this.get('artists'),
									'artist']);
		}
	}
});
