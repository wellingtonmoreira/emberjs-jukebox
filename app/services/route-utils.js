import Ember from 'ember';

export default Ember.Service.extend({
	getParentRoute: function (that) {
		let currentPath = that.routeName ? that.routeName : Ember.getOwner(that).lookup('controller:application').currentPath;
		let paths = currentPath.split(".");
		let pathsAmount = paths.length;
		return paths[pathsAmount - 2];
	},
	getParentType: function (that) {
		return Ember.String.singularize(this.get('getParentRoute')(that));
	}
});
