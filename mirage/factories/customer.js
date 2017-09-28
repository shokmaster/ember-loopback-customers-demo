import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name() {
    return faker.company.companyName();
  },

  email() {
    return faker.internet.email();
  },

  postalCode() {
    return faker.address.zipCode();
  },

  salesVolume() {
    return faker.random.number() * 1000;
  }

});
