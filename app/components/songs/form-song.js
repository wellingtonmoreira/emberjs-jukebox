import Ember from 'ember';
import AbstractForm from 'emberjs-jukebox/components/abstract/abstract-form';

export default AbstractForm.extend({
	relationshipUtils: Ember.inject.service(),
	actions: {
		onSelectAlbum: function (id) {
			this.get('relationshipUtils')
				.updateBelongsToById([id,
									this.get('model'),
									this.get('albums'),
									'album']);
		}
	}
});
