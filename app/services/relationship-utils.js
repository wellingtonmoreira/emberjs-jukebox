import Ember from 'ember';

export default Ember.Service.extend({
	updateBelongsToById: function([id, model, list, attrName]) {
		if (list) {
			var selected = list.filter((v) => v.id === id);
			if (selected.length > 0) model.set(attrName, selected[0]);
			else model.set(attrName, null);
		}
	}
});
