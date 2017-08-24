import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  	albumName() {
  		return faker.name.jobDescriptor();
  	},
  	imageUrl() {
  		return faker.image.avatar();
  	}
});