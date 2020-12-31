module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /**
     * eslint rules
     * Document: https://eslint.org/docs/rules/
     *
     * eslint-plugin-prettier rules
     * Document: https://prettier.io/docs/en/options.html
     */

    // 未使用の変数、定数の警告を解除
    'no-unused-vars': 'off',

    // console.logの警告を解除
    'no-console': 'off',

    // 文字列リテラルと正規表現リテラルの中にある、不必要なエスケープ シーケンスの警告を解除
    'no-useless-escape': 'off',

    // thisを一切参照していないインスタンス メソッドの警告を解除
    'class-methods-use-this': 'off',

    // 宣言部分がキャメルケースになっていない場合の警告を解除
    camelcase: 'off',

    // ループ以外で++を利用した場合の警告を解除
    'no-plusplus': 'off',

    'consistent-this': ['error', 'self'],

    /**
     * typescript-eslint
     */
    // 未使用の変数、定数に対してのルール
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        // 未使用の変数、定数の警告を解除
        vars: 'all',

        // 未使用の引数の警告を解除
        args: 'none',
      },
    ],

    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
        allowedNames: ['self'], // Allow `const self = this`; `[]` by default
      },
    ],

    '@typescript-eslint/no-var-requires': 0,

    /**
     * eslint-plugin-prettier
     */
    'prettier/prettier': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
