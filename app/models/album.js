import DS from 'ember-data';

export default DS.Model.extend({
	artist: DS.belongsTo('artist', { async: false}),
	albumName: DS.attr('string'),
	imageUrl: DS.attr('string')
});
