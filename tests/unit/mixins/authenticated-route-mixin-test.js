import EmberObject from '@ember/object';
import AuthenticatedRouteMixinMixin from 'ember-loopback-customers-demo/mixins/authenticated-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | authenticated route mixin');

test('it works', function(assert) {
  assert.expect(1);
  const AuthenticatedRouteMixinObject = EmberObject.extend(AuthenticatedRouteMixinMixin);
  const subject = AuthenticatedRouteMixinObject.create();
  assert.ok(subject);
});

test('it has an authenticationRoute attribute equal to /users/login', function(assert) {
  assert.expect(1);
  const AuthenticatedRouteMixinObject = EmberObject.extend(AuthenticatedRouteMixinMixin);
  const subject = AuthenticatedRouteMixinObject.create();
  assert.equal(subject.get('authenticationRoute'), 'users/login');
});
