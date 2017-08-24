import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		newAlbum: function() {
			this.transitionToRoute('albums.new');
		},
		editAlbum: function(id) {
			this.transitionToRoute('albums.edit', id);
		},
		deleteAlbum: function(id) {
			this.get('store').find('album', id)
				.then(function (album) {
					album.deleteRecord();
					album.save();
				});
		}
	}	
});
