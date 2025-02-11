import { storyblokLintConfig } from '@storyblok/eslint-config';

export default storyblokLintConfig({
  rules: {
    'no-undef': 'off', // TODO: find a solution for Nuxt composables
    'no-console': 'off',
  },
});
