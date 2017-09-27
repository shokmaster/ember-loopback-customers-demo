import { moduleFor, test } from 'ember-qunit';

moduleFor('route:customers/index', 'Unit | Route | customers/index', {
  // Specify the other units that are required for this test.
  needs: ['service:session']
});

test('it exists', function(assert) {
  assert.expect(1);
  let route = this.subject();
  assert.ok(route);
});
