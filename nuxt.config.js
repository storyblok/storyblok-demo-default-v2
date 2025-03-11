import mkcert from 'vite-plugin-mkcert';

export default defineNuxtConfig({
  modules: [
    [
      '@storyblok/nuxt',
      {
        /*
        If you would like to use this as a template for your project, simply provide the access token here.
        Also please remove line 13 (usePlugin) as well as the file plugins/storyblok.js.
        */
        // accessToken: process.env.STORYBLOK_TOKEN,
        usePlugin: false,
      },
    ],
    '@nuxtjs/tailwindcss',
  ],

  ssr: false,
  css: ['@/assets/css/fonts.css'],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      templateToken: process.env.STORYBLOK_TOKEN,
      customParent: process.env.STORYBLOK_CUSTOM_PARENT,
      shopifyDomain: process.env.SHOPIFY_DOMAIN,
      shopifyToken: process.env.SHOPIFY_TOKEN,
    },
  },

  devServer: {
    https: true,
  },

  devtools: { enabled: process.env.NUXT_DEVTOOLS_ENABLED === 'true' },

  vite: {
    plugins: [mkcert()],
  },

});
