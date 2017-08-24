import DS from 'ember-data';

export default DS.Model.extend({
	songTitle: DS.attr('string'),
	album: DS.belongsTo('album', { async: false })
});
