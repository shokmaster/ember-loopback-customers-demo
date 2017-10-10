module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    "ember/use-ember-get-and-set": 0,
    "ember/alias-model-in-controller": 0,
    "ember/named-functions-in-promises": [2, {
      allowSimpleArrowFunction: true
    }],
    "ember/order-in-routes": [2, {
      order: [
        'service',
        'inherited-property',
        'property',
        'single-line-function',
        'multi-line-function',
        'beforeModel',
        'model',
        'afterModel',
        'serialize',
        'redirect',
        'activate',
        'setupController',
        'renderTemplate',
        'resetController',
        'deactivate',
        ['method', 'empty-method'],
        'actions'
      ]
    }]
  }
};
