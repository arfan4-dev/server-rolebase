// eslint.config.mjs

import eslint from '@eslint/js';

export default eslint.config({
    languageOptions: {
        parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname
        }
    },
    files: ['**/*.js'],
    extends: [eslint.configs.recommended],
    rules: {
        'no-console': 'error',
        'no-useless-catch': 0,
        quotes: ['error', 'single', { allowTemplateLiterals: true }]
    }
});
