import { moduleForModel, test } from 'ember-qunit';

moduleForModel('customer', 'Unit | Model | customer', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('it has a `salesVolume` property that defaults to `0` on a new instance', function (assert) {
  const model = this.subject();
  assert.equal(model.get('salesVolume'), 0);
});
