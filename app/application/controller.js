import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

/**
 * Application controller is mostly a simple holder for the session service so
 * that the application template can determine if there is an
 * authetnicated session.
 *
 * @module
 * @augments ember/controller
 */
export default Controller.extend({
  // =dependencies

  /**
   * @see module:ember-simple-auth-loopback/services/session
   * @type {Object}
   */
  session: service(),

  // =actions

  /** @type {Object} */
  actions: {
    /**
     * Calls `invalidate` on the session service.
     *
     * @function actions:invalidateSession
     * @returns {undefined}
     */
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
