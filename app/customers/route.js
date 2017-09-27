import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-loopback-customers-demo/mixins/authenticated-route-mixin';

/**
 * Customers route
 *
 * @module
 * @augments ember/routing/route
 * @augments ember-loopback-customers-demo/mixins/authenticated-route-mixin
 */
export default Route.extend(AuthenticatedRouteMixin, {
  // =methods

  /**
   * This route returns all customsers from the store.
   *
   * @override
   * @function
   * @returns {Array.<module:app/customer/model>}
   */
  model() {
    return this.store.findAll('customer');
  }
});
