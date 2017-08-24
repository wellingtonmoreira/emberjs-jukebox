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
			this.get('store').find('song', id)
				.then(function (song) {
					song.deleteRecord();
					song.save();
				});
		}
	}
});
