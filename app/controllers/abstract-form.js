import Ember from 'ember';

export default Ember.Controller.extend({
	getParentRoute: function (that) {
		let currentPath = Ember.getOwner(that).lookup('controller:application').currentPath;
		let paths = currentPath.split(".");
		let pathsAmount = paths.length;
		return paths[pathsAmount - 2];
	},
	actions: {
		back: function() {
			this.transitionToRoute(this.get('getParentRoute')(this));
		},
		submit: function() {
			this.transitionToRoute(this.get('getParentRoute')(this));
		}
	}
});
