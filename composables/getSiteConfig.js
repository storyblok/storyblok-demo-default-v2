export default async function () {
  const route = useRoute()
  const siteConfig = ref()
  const storyblokApi = useStoryblokApi()
  const nestedSiteConfig = ref(false)
  const apiParams = {
    version: getVersion(),
    resolve_links: 'url',
  }

  if (route.query.path) {
    const found = route.query.path.match('^(.*[\\/])')
    if (found) {
      const folderPath = found[0]
      try {
        const { data } = await storyblokApi.get(
          `cdn/stories/${folderPath}site-config`,
          apiParams,
        )
        siteConfig.value = data.story
        nestedSiteConfig.value = true
      } catch (error) {
        nestedSiteConfig.value = false
      }
    }
  }

  if (!nestedSiteConfig.value) {
    const { data } = await storyblokApi.get(
      'cdn/stories/site-config',
      apiParams,
    )
    siteConfig.value = data.story
  }

  return siteConfig
}
