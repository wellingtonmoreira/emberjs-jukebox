import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		newSong: function() {
			this.transitionToRoute('songs.new');
		},
		editSong: function(id) {
			this.transitionToRoute('songs.edit', id);
		},
		deleteSong: function(id) {
			this.get('store').findRecord('song', id, { backgroundReload: false })
				.then(function (song) {
					song.destroyRecord();
				});
		}
	}
});
