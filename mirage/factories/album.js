import Mirage, { faker, association } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  	albumName() {
  		return faker.name.jobDescriptor();
  	},
  	imageUrl() {
  		return faker.image.avatar();
  	}
});