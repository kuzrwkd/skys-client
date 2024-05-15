module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: ['next/core-web-vitals', 'airbnb', 'airbnb-typescript', 'prettier'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['*.js'],
  rules: {
    'no-unused-vars': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'never',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
