import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

/**
 * Index route
 *
 * @module
 * @augments ember/routing/route
 * @augments ember-simple-auth/mixins/authenticated-route-mixin
 */
export default Route.extend(AuthenticatedRouteMixin);
