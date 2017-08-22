import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		newArtist: function() {
			this.transitionToRoute('artists.new');
		},
		editArtist: function() {
			this.transitionToRoute('artists.edit', 123);
		}
	}
});
