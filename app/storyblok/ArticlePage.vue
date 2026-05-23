<script setup lang="ts">
import type { ISbStoryData } from '@storyblok/js'
import type { ArticlePage, Banner } from '#storyblok'

const props = defineProps<{ blok: ArticlePage }>()

const optimizedArticleImage = computed(() => getOptimizedImage(props.blok.image, 1600, 800))
</script>

<template>
  <article v-editable="blok">
    <div class="container">
      <header>
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <CategoriesList
            v-if="blok?.categories?.length"
            :categories="blok.categories"
            class="mt-12 flex justify-center space-x-4"
          />
          <H1Headline v-if="blok.headline">
            {{ blok.headline }}
          </H1Headline>
        </div>
        <div v-if="optimizedArticleImage" class="px-4 lg:px-0">
          <div class="relative">
            <DecorationImageTopRight
              class="absolute right-0 top-0 origin-top-right translate-x-5 translate-y-6.25 scale-50 md:translate-x-10 md:-translate-y-12.5 md:scale-100"
            />
            <img
              :src="optimizedArticleImage"
              :alt="blok.image?.alt ?? ''"
              class="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </header>
      <main v-if="blok.text" class="prose prose-lg mx-auto my-12">
        <StoryblokRichText :doc="blok.text" />
      </main>
    </div>
    <Banner
      v-if="blok?.call_to_action?.length"
      :blok="(blok.call_to_action[0] as ISbStoryData<Banner>)?.content"
      :index="1"
      :referenced="true"
    />
  </article>
</template>
