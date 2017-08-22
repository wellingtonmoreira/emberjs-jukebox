import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		newAlbum: function() {
			this.transitionToRoute('albums.new');
		},
		editAlbum: function() {
			this.transitionToRoute('albums.edit', 123);
		}
	}	
});
