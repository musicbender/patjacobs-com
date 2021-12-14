module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier/react'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        exmaVersion: 2018,
    },
    ignorePatterns: [
        "node_modules/",
        "test",
    ],
    plugins: [
        '@typescript-eslint', 
        'prettier',
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-curly-newline': [
            "error", 
            "consistent"
        ],
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/prefer-for-of': 'off',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/quotes': [
            'error',
            'single',
            {
                avoidEscape: true,
            },
        ],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        camelcase: 'off',
        '@typescript-eslint/camelcase': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        complexity: 'off',
        'constructor-super': 'error',
        'prefer-const': 'error',
        eqeqeq: ['error', 'smart'],
        'no-template-curly-in-string': 'error',
        'no-eval': 'error',
        'id-blacklist': [
            'error',
            'any',
            'number',
            'string',
            'boolean',
            'Undefined'
        ],
        'id-match': 'error',
        'max-classes-per-file': ['error', 1],
        'no-bitwise': 'off',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-debugger': 'error',
        'no-empty': 'error',
        'no-eval': 'error',
        'no-fallthrough': 'off',
        'no-invalid-this': 'off',
        'no-new-wrappers': 'error',
        'no-shadow': [
            'error',
            {
                hoist: 'all',
            },
        ],
        'no-throw-literal': 'error',
        'no-undef-init': 'error',
        'no-underscore-dangle': 'off',
        'no-unsafe-finally': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'object-shorthand': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': 'error',
        radix: 'error',
        'spaced-comment': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'off'
    }
};
