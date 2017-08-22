import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		newArtist: function() {
			this.transitionToRoute('artists.new');
		},
		editArtist: function(id) {
			this.transitionToRoute('artists.edit', id);
		},
		deleteArtist: function(id) {
			this.get('store').find('artist', id)
				.then(function (artist) {
					artist.deleteRecord();
					artist.save();
				});
		}
	}
});
