import { defineNuxtConfig } from 'nuxt/config'

import mkcert from 'vite-plugin-mkcert'
import tailwindcss from '@tailwindcss/vite'

import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  compatibilityDate: '2026-04-08',
  devtools: { enabled: true },
  ssr: false,

  modules: [
    [
      '@storyblok/nuxt',
      {
        // IMPORTANT: this makes all content public, including draft content.
        // The SDK requires the access token to be exposed to the client.
        accessToken: process.env.STORYBLOK_TOKEN,
        apiOptions: {
          /** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
          region: 'eu',
          /** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
          endpoint: process.env.STORYBLOK_API_BASE_URL
            ? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
            : undefined,
        },
      },
    ],
    '@nuxt/eslint',
    '@vueuse/nuxt',
  ],

  css: ['~/assets/css/tailwind.css', '~/assets/css/fonts.css'],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  runtimeConfig: {
    public: {
      templateToken: process.env.STORYBLOK_TOKEN,
      customParent: process.env.STORYBLOK_CUSTOM_PARENT,
    },
  },

  devServer: {
    https: true,
  },

  vite: {
    plugins: [mkcert(), tailwindcss()],
  },

  typescript: {
    // customize tsconfig.app.json
    tsConfig: {
      include: ['.storyblok/types/**/*.d.ts'],
    },
  },

  alias: {
    '#storyblok': fileURLToPath(
      new URL('./.storyblok/types/<YOUR_SPACE_ID>/storyblok-components', import.meta.url)
    ),
  },
})
