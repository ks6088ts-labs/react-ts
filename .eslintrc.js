module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
