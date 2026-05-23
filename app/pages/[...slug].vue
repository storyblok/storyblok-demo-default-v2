<script setup lang="ts">
import type { ISbStoryData, ISbStoriesParams, SbBlokData } from '@storyblok/js'
import type { ContentType } from '#storyblok'

const slug = await getSlug()
const processedSlug = await getProcessedSlug(slug)
const language = await getLanguage(slug)
const releaseId = await getReleaseId()
const resolveRelations = [
  'banner-reference.banners',
  'featured-articles-section.articles',
  'article-page.categories',
  'article-page.author',
  'article-page.call_to_action',
  'testimonials-section.testimonials',
]

const story = ref<ISbStoryData<ContentType> | null>(null)
const storyblokApi = useStoryblokApi()

const apiParams: ISbStoriesParams = {
  version: getVersion(),
  language,
  fallback_lang: 'default',
  resolve_relations: resolveRelations,
  resolve_links: 'url',
  from_release: releaseId ? String(releaseId) : undefined,
}

const { customParent } = useRuntimeConfig().public

try {
  try {
    const { data } = await storyblokApi.get(`cdn/stories/${processedSlug}`, apiParams)
    story.value = data.story
  } catch (error: unknown) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'status' in error &&
      (error as { status: number }).status === 404
    ) {
      const { data } = await storyblokApi.get('cdn/stories/error-404', apiParams)
      story.value = data.story
    }
  }

  onMounted(() => {
    if (!story.value) return
    useStoryblokBridge(
      story.value?.id,
      (evStory) => (story.value = evStory as ISbStoryData<ContentType>),
      {
        resolveRelations,
        customParent,
        preventClicks: true,
      }
    )
  })
} catch (error) {
  console.log(error)
}

const viewingSiteConfig = ref(story.value?.content.component === 'site-config')
const _viewingSiteConfigState = useState('viewingSiteConfig', () => viewingSiteConfig.value)

useHead({
  title: story.value?.content.meta_title ?? 'Brand New Day',
  meta: [
    {
      name: 'description',
      content:
        (story.value?.content.meta_description as string) ??
        'A Demo Day for Your New Storyblok Project.',
    },
  ],
})
</script>

<template>
  <StoryblokComponent
    v-if="story && !viewingSiteConfig"
    :blok="story.content as SbBlokData"
    :uuid="story.uuid"
  />
</template>
