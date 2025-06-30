/** @type {import('stylelint').Config} */
module.exports = {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-prettier-scss',
    ],
    plugins: ['stylelint-scss', 'stylelint-plugin-tailwindcss'],
    rules: {
        'selector-class-pattern': null,

        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'layer',
                    'variants',
                    'responsive',
                    'screen',
                    'theme',
                    'custom-variant',
                ],
            },
        ],

        'tailwindcss/classnames-order': 'warn',
        'tailwindcss/no-custom-classname': null,
    },
};
