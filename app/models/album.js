import DS from 'ember-data';

export default DS.Model.extend({
	artistId: DS.attr('number'),
	albumName: DS.attr('string'),
	imageUrl: DS.attr('string')
});
