module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'require-component-is': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
