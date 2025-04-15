export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute();
  const inEditor = computed(() => !!route.query._storyblok);

  if (inEditor) {
    nuxtApp.vueApp.config.globalProperties.$router.beforeEach((to, from, next) => {
      next(false);
    });
  }
});
