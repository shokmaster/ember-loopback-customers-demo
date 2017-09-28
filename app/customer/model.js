import Model from 'ember-data/model';
import attr from 'ember-data/attr';

/**
 * A simple customer model.
 *
 * @module
 * @augments ember-data/model
 */
export default Model.extend({
  // =properties

  /**
   * Customer name.
   *
   * @type {?String} */
  name: attr('string'),

  /**
   * Customer email address.
   *
   * @type {?String} */
  email: attr('string'),

  /**
   * Customer postal code.
   *
   * @type {?String} */
  postalCode: attr('string'),

  /**
   * Volume of sales to this customer, in USD.
   *
   * @type {?Number}
   * @default 0
   */
  salesVolume: attr('number', {defaultValue: 0})
});
