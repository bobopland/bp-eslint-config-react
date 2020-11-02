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
        '@bpoehland/eslint-config-basic',
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
                '@bpoehland/eslint-config-basic',
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
