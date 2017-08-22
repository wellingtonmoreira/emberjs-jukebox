import DS from 'ember-data';

export default DS.Model.extend({
	artistName: DS.attr('string'),
	imageUrl: DS.attr('string')
});
