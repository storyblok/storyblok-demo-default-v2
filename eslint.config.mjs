import withNuxt from './.nuxt/eslint.config.mjs'

// TODO: TYPESCRIPT SUPPORT
export default withNuxt({
  rules: {
    'no-undef': 'off', // TODO: find a solution for Nuxt composables
    'no-console': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'vue/multi-word-component-names': 'off',
  },
})
