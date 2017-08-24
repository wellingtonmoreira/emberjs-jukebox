import Mirage, { faker, association } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  	artistName() { 
  		return faker.name.firstName() + ' ' + faker.name.lastName(); 
  	},
  	imageUrl() { return faker.image.avatar(); }
});