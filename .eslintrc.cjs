module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['standard-with-typescript', 'plugin:react/recommended', "prettier",  "eslint:recommended",],
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
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    globals: {
        React: 'writable'
    },
    plugins: ['react'],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": true
            }
        }], //нужно писать коменты для https://eslint.org/docs/latest/rules/require-jsdoc
        "react/react-in-jsx-scope": "off",

        "no-unused-vars": "off" //не использованные переменные warn
    }
};
