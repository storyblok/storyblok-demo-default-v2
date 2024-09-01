export default async function () {
  const route = useRoute()
  const story = ref()
  const storyblokApi = useStoryblokApi()
  const nestedSiteConfig = ref(false)

  if (route.query.path) {
    const folderPath = route.query.path.match('^(.*[\\/])')
    console.log(folderPath[0])
    try {
      const { data } = await storyblokApi.get(
        `cdn/stories/${folderPath[0]}site-config`,
        {
          version: getVersion(),
          resolve_links: 'url',
        },
      )
      story.value = data.story
      nestedSiteConfig.value = true
    } catch (error) {
      nestedSiteConfig.value = false
    }
  }

  if (!nestedSiteConfig.value) {
    const { data } = await storyblokApi.get('cdn/stories/site-config', {
      version: getVersion(),
      resolve_links: 'url',
    })
    story.value = data.story
  }

  return story
}
