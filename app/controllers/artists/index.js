import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		newArtist: function() {
			this.transitionToRoute('artists.edit');
		}
	}
});
