import { test } from 'qunit';
import moduleForAcceptance from 'ember-loopback-customers-demo/tests/helpers/module-for-acceptance';
import { authenticateSession } from 'ember-loopback-customers-demo/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  visit('/');

  andThen(function () {
    assert.equal(currentURL(), '/');
  });
});

test('/users/new link is present when unauthenticated', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('[href="/users/new"]').length, 1);
  });
});

test('/users/new link is not present when authenticated', function (assert) {
  visit('/');
  authenticateSession(this.application);
  andThen(function () {
    assert.equal(find('[href="/users/new"]').length, 0);
  });
});
