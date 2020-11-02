module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    extends: [
        'eslint:recommended',
        'airbnb',
        'airbnb/hooks',
        'prettier',
        'prettier/react',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    rules: {
        'react/jsx-props-no-spreading': 'off',
    },
    env: {
        browser: true,
        es2021: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 12,
                sourceType: 'module',
                project: './tsconfig.json',
            },
            plugins: ['react', 'prettier', '@typescript-eslint'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'airbnb-typescript',
                'airbnb/hooks',
                'prettier',
                'prettier/react',
                'prettier/@typescript-eslint',
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
                'no-underscore-dangle': 'off',
                'react/jsx-props-no-spreading': 'off',
            },
            env: {
                browser: true,
                es2021: true,
            },
            globals: {
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly',
            },
            settings: {
                react: {
                    version: 'detect'
                }
            },
        },
    ],
};
