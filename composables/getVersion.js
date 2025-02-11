export default function () {
  const route = useRoute();
  if (route.query._storyblok_published !== undefined) {
    return 'published';
  }
  else {
    return 'draft';
  }
}
