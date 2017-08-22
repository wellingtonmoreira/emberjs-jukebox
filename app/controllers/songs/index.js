import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		newSong: function() {
			this.transitionToRoute('songs.new');
		},
		editSong: function() {
			this.transitionToRoute('songs.edit', 123);
		}
	}
});
