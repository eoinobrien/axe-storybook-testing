module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: ['eslint:recommended'],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ["@babel"],
  rules: {}
};
