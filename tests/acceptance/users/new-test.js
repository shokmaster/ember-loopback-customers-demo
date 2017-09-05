import { test } from 'qunit';
import moduleForAcceptance from 'ember-loopback-customers-demo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | users/new');

test('visiting /users/new', function (assert) {
  visit('/users/new');
  andThen(function () {
    assert.equal(currentURL(), '/users/new');
  });
});

test('navigating to /users/new', function (assert) {
  visit('/');
  click('[href="/users/new"]');
  andThen(function () {
    assert.equal(currentURL(), '/users/new');
  });
});

test('viewing validation errors', function (assert) {
  visit('/users/new');
  andThen(function () {
    assert.equal(server.schema.users.all().length, 0);
    assert.equal(currentURL(), '/users/new');
  });
  fillIn('[name="email"]', 'test@foo.com');
  fillIn('[name="emailConfirmation"]', 'example@baz.com');
  fillIn('[name="password"]', 'password1234');
  fillIn('[name="passwordConfirmation"]', 'passfoo');
  click('button[type="submit"]');
  andThen(function () {
    assert.equal(find('.is-invalid:visible').length, 3);
    assert.equal(find('.form-group:eq(1) .invalid-feedback').text(), 'must match Email');
    assert.equal(find('.form-group:eq(2) .invalid-feedback').text(), 'This is a very common password. Add another word or two. Uncommon words are better.');
    assert.equal(find('.form-group:eq(3) .invalid-feedback').text(), 'must match Password');
    assert.equal(server.schema.users.all().length, 0);
    assert.equal(currentURL(), '/users/new');
  });
});

test('saving valid new user instance and redirecting to /', function (assert) {
  visit('/users/new');
  andThen(function () {
    assert.equal(server.schema.users.all().length, 0);
    assert.equal(currentURL(), '/users/new');
  });
  andThen(function () {
    fillIn('[name="email"]', 'test@foo.com');
    fillIn('[name="emailConfirmation"]', 'test@foo.com');
    fillIn('[name="password"]', 'this is a password');
    fillIn('[name="passwordConfirmation"]', 'this is a password');
    click('button[type="submit"]');
  });
  andThen(function () {
    assert.equal(server.schema.users.all().length, 1);
    assert.equal(currentURL(), '/');
  });
});
