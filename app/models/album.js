import DS from 'ember-data';

export default DS.Model.extend({
	artist: DS.belongsTo('artist', { async: true}),
	albumName: DS.attr('string'),
	imageUrl: DS.attr('string')
});
