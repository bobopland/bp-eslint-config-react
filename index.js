module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  extends: [
    'airbnb/hooks',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-props-no-spreading': 'off',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  settings: { react: { version: 'detect' } },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: ['react', 'jest', '@typescript-eslint'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'airbnb/hooks',
        'plugin:jest/recommended',
        'prettier',
        'prettier/react',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
      ],
      rules: {
        '@typescript-eslint/typedef': [
          'error',
          {
            arrayDestructuring: true,
            arrowParameter: true,
            memberVariableDeclaration: true,
            objectDestructuring: true,
            parameter: true,
            propertyDeclaration: true,
            variableDeclaration: true,
            variableDeclarationIgnoreFunction: false,
          },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: false,
            allowTypedFunctionExpressions: false,
            allowHigherOrderFunctions: false,
            allowDirectConstAssertionInArrowFunctions: false,
            allowConciseArrowFunctionExpressionsStartingWithVoid: false,
          },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'typeLike',
            format: ['PascalCase'],
            leadingUnderscore: 'allow',
          },
        ],
        'prettier/prettier': ['error'],
        'react/jsx-props-no-spreading': 'off',
        'no-underscore-dangle': 'off',
      },
      env: {
        browser: true,
        es6: true,
        jest: true,
      },
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      settings: { react: { version: 'detect' } },
    },
  ],
};
