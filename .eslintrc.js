module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@babel'],
  ignorePatterns: ['storybook-static/', 'build/'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
