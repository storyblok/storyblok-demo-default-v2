export default async function () {
  const route = useRoute();

  const inEditor = computed(() => !!route.query._storyblok);
  return inEditor.value;
}
