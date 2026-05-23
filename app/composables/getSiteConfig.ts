import type { ISbStoryData, ISbStoriesParams } from '@storyblok/js'
import type { SiteConfig } from '#storyblok'

export default async function (): Promise<Ref<ISbStoryData<SiteConfig>>> {
  const folderPathTest = await getFolderPath()
  const releaseId = await getReleaseId()
  const siteConfig = ref<ISbStoryData<SiteConfig>>()
  const storyblokApi = useStoryblokApi()
  const nestedSiteConfig = ref(false)
  const apiParams: ISbStoriesParams = {
    version: getVersion() as 'draft' | 'published',
    resolve_links: 'url' as const,
    from_release: releaseId ? String(releaseId) : undefined,
  }

  if (folderPathTest) {
    try {
      const { data } = await storyblokApi.get(`cdn/stories/${folderPathTest}/site-config`, apiParams)
      siteConfig.value = data.story
      nestedSiteConfig.value = true
    } catch {
      nestedSiteConfig.value = false
    }
  }

  if (!nestedSiteConfig.value) {
    const { data } = await storyblokApi.get('cdn/stories/site-config', apiParams)
    siteConfig.value = data.story
  }

  return siteConfig as Ref<ISbStoryData<SiteConfig>>
}
