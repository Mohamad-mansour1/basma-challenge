module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/prop-types': 'off',
    'no-empty-pattern': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-console': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'ignore' },
    ],
    'no-empty-function': 'off',
    'max-lines': ['error', { max: 1000, skipComments: true }],

    'require-await': 'error',
    eqeqeq: 'error',
    'no-unneeded-ternary': 'error',
  },
}
