module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true
  },
  rules: {
    semi: ['error', 'never'], // 不加分号
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'no-useless-escape': 0,
    'no-empty': 0,
    'comma-dangle': ['error', 'never'] // 不要拖尾逗号
  }
}
