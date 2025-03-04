import { apiPlugin, StoryblokVue } from '@storyblok/vue';
import { defineNuxtPlugin, useRoute, useRuntimeConfig } from '#app';

export default defineNuxtPlugin(({ vueApp }) => {
  const config = useRuntimeConfig();
  const route = useRoute();

  vueApp.use(StoryblokVue, {
    ...config.public.storyblok,
    accessToken: route.query.token || config.public.templateToken,
    use: [apiPlugin],
  });
});
