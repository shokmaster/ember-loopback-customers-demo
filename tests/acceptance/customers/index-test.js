import { test } from 'qunit';
import moduleForAcceptance from 'ember-loopback-customers-demo/tests/helpers/module-for-acceptance';
import { authenticateSession } from 'ember-loopback-customers-demo/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | customers/index');

test('visiting /customers', function (assert) {
  assert.expect(1);
  authenticateSession(this.application);
  visit('/customers');
  andThen(function () {
    assert.equal(currentURL(), '/customers');
  });
});

test('navigating to /customers', function (assert) {
  assert.expect(1);
  authenticateSession(this.application);
  visit('/');
  click('[href="/customers"]');
  andThen(function () {
    assert.equal(currentURL(), '/customers');
  });
});

test('navigating to /customers redirects to /users/login when unauthenticated', function (assert) {
  assert.expect(1);
  visit('/customers');
  andThen(function () {
    assert.equal(currentURL(), '/users/login');
  });
});

test('viewing customers list', function (assert) {
  assert.expect(2);
  server.createList('customer', 10);
  authenticateSession(this.application);
  visit('/customers');
  andThen(function () {
    assert.equal(server.schema.customers.all().length, 10);
    assert.equal(find('.list-customer > li').length, 10);
  });
});
