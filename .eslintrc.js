module.exports = {
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-unused-vars': [2, {args: 'none'}]
            }
        }
    ],

    extends: [
        'plugin:react/recommended',
        'airbnb',
        "prettier",
        "prettier/react"
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    env: {
        "jest/globals": true,
        "browser": true,
        "node": true

    },
    plugins: [
        'jest',
        'react',
        '@typescript-eslint',
    ],
    rules: {
        //    "no-extra-parens": [2, "all"],
        "max-len": [2, 120, 4, {"ignoreUrls": true}],
        // "no-unused-variable": [1, {"ignore-pattern": ["^_"], "ignore-decorated": true}],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "no-unused-vars": "off",
        "react/jsx-filename-extension": [1, {"extensions": [".tsx", ".jsx"]}],
        'import/no-unresolved': [
            'error',
            {
                'ignore': ['\.svg']
            }
        ]

    },
};
