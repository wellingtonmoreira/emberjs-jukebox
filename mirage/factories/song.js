import Mirage, { faker, association } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  songTitle() {
  	return faker.name.jobDescriptor();
  }
});