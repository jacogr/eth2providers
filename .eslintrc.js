// @flow

module.exports = {
  extends: ['semistandard'],
  env: {
    'jest': true
  },
  globals: {
    'expect': true
  },
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'curly': ['error', 'all'],
    'newline-after-var': ['error', 'always'],
    'no-alert': 'error',
    'no-debugger': 'error',
    'no-duplicate-imports': ['error', {
      'includeExports': true
    }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 0,
    'one-var-declaration-per-line': ['error', 'always'],
    'padded-blocks': ['error', {
      'blocks': 'never',
      'classes': 'never',
      'switches': 'never'
    }]
  }
};
