import DS from 'ember-data';

export default DS.Model.extend({
	songTitle: DS.attr('string'),
	albumId: DS.attr('number')
});
