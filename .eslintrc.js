module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['next', 'next/core-web-vitals', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    '@next/next/no-img-element': 'off',
  },
}
