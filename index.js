module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    extends: [
        '@bpoehland/eslint-config-basic',
        'airbnb',
        'airbnb/hooks',
        'prettier/react',
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
            plugins: ['react', '@typescript-eslint'],
            extends: [
                '@bpoehland/eslint-config-basic',
                'airbnb-typescript',
                'airbnb/hooks',
                'prettier/react',
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
