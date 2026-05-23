<script setup lang="ts">
import type { FeaturedArticlesSection, ArticlePage } from '#storyblok'
import type { ISbStoryData } from '@storyblok/js'

const props = defineProps<{
  blok: FeaturedArticlesSection
  index: number
}>()

const resolvedArticles = computed(
  () => props.blok.articles?.filter((a): a is ISbStoryData<ArticlePage> => typeof a !== 'string') ?? []
)

const gridClasses = computed(() => getGridClasses(props.blok.cols))
</script>

<template>
  <section
    v-editable="blok"
    class="page-section featured-articles-section"
    :class="`bg-${blok.background_color}`"
  >
    <div class="container">
      <Headline v-if="blok.headline" :headline="blok.headline" :index="index" class="text-center" />
      <Lead v-if="blok.lead" class="text-center">
        {{ blok.lead }}
      </Lead>
      <div v-if="blok.articles" :class="gridClasses">
        <ArticleCardVertical
          v-for="article in resolvedArticles"
          :key="article.uuid"
          :article="article.content"
          :slug="article.full_slug"
        />
      </div>
    </div>
  </section>
</template>
