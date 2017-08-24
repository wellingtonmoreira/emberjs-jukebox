import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  songTitle() {
  	return faker.name.jobDescriptor();
  }
});