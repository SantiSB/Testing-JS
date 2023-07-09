module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // Sirve para usar dependencias de desarrollo
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
