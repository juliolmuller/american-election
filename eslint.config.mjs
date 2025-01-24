import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import importHelpers from 'eslint-plugin-import-helpers';
import prettier from 'eslint-plugin-prettier';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...fixupConfigRules(compat.extends('react-app', 'react-app/jest')),
  {
    files: ['**/*.js', '**/*.jsx', '**/*.mjs'],
    plugins: {
      'import-helpers': importHelpers,
      prettier,
    },
    rules: {
      eqeqeq: 'error',
      'import/no-anonymous-default-export': 'off',
      'import-helpers/order-imports': [
        'warn',
        {
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
          groups: ['module', ['/^~//'], ['parent', 'sibling', 'index']],
          newlinesBetween: 'always',
        },
      ],
      'prefer-arrow-callback': 'error',
      'no-console': [
        'error',
        {
          allow: ['info', 'error', 'warn'],
        },
      ],
      'prefer-const': 'error',
      'prefer-template': 'error',
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          printWidth: 100,
          singleQuote: true,
          trailingComma: 'all',
          lineEndings: 'lf',
        },
      ],
      'react/jsx-curly-brace-presence': [
        'warn',
        {
          props: 'never',
          children: 'never',
          propElementValues: 'always',
        },
      ],
    },
  },
];
