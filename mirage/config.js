import config from '../config/environment';

export default function() {
  this.urlPrefix = config.api.host;    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = config.api.namespace;    // make this `/api`, for example, if your API is namespaced
  this.timing = 100;      // delay for each request, automatically set to 0 during testing

  // https://github.com/kategengler/ember-cli-code-coverage
  this.passthrough('/write-coverage');

  // http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  this.post('/users');
}
