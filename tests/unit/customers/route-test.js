import { moduleFor, test } from 'ember-qunit';

moduleFor('route:customers', 'Unit | Route | customers', {
  // Specify the other units that are required for this test.
  needs: ['model:customer', 'service:session']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('it should call `findAll` on its `store` service with `customer` as an argument from the `model` method', function (assert) {
  assert.expect(2);
  let route = this.subject({
    store: {
      findAll(modelName) {
        assert.ok(true, 'should call `findAll` on store service');
        assert.equal(modelName, 'customer', 'should pass `customer` as an argument');
      }
    }
  });
  route.model();
});
