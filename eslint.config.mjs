import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

import typescriptParser from '@typescript-eslint/parser';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginTypescript from '@typescript-eslint/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        ignores: [
            '.next/**',
            '.cache/**',
            'package-lock.json',
            'public/**',
            'node_modules/**',
            'next-env.d.ts',
            'next.config.ts',
            'yarn.lock',
            '**/*.d.ts',
        ],
    },

    ...compat.extends(
        'next/core-web-vitals',
        'next/typescript',
        'prettier',
        'next',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ),

    ...compat.env({
        browser: true,
        es2021: true,
        node: true,
    }),

    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            ecmaVersion: 2021,
            sourceType: 'module',
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        plugins: {
            prettier: pluginPrettier,
            react: pluginReact,
            'react-hooks': pluginReactHooks,
            '@typescript-eslint': pluginTypescript,
        },
        rules: {
            // JavaScript
            'prefer-const': 'warn',
            'no-var': 'warn',
            'no-unused-vars': 'warn',
            'object-shorthand': 'warn',
            'quote-props': ['warn', 'as-needed'],

            // TypeScript
            '@typescript-eslint/array-type': ['warn', { default: 'array' }],
            '@typescript-eslint/consistent-type-assertions': [
                'warn',
                {
                    assertionStyle: 'as',
                    objectLiteralTypeAssertions: 'never',
                },
            ],

            // React
            'react/jsx-fragments': ['warn', 'syntax'],
            'react/jsx-filename-extension': [
                'warn',
                { extensions: ['ts', 'tsx'] },
            ],
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',

            // Prettier
            'prettier/prettier': 'warn',

            // Tailwind
            'tailwindcss/classnames-order': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
