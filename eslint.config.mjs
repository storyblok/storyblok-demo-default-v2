import { storyblokLintConfig } from '@storyblok/eslint-config';
import tailwind from 'eslint-plugin-tailwindcss';

export default storyblokLintConfig(
  {
    rules: {
      'no-undef': 'off', // TODO: find a solution for Nuxt composables
      'no-console': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
);
