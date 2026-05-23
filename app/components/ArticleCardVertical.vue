<script setup lang="ts">
import type { ArticlePage } from '#storyblok'

const props = defineProps<{ article: ArticlePage; slug: string }>()

const optimizedImage = computed(() => getOptimizedImage(props.article?.image, 800, 600))
</script>

<template>
  <div v-if="article" class="flex h-full flex-col">
    <img
      v-if="optimizedImage"
      :src="optimizedImage"
      :alt="article.image?.alt ?? ''"
      class="mb-6 rounded-xl sm:max-w-sm md:max-w-full"
    />
    <div class="flex h-full flex-col">
      <div class="flex grow flex-col space-y-4">
        <CategoriesList
          v-if="article.categories?.length"
          :categories="article.categories"
          class="flex space-x-4"
        />
        <h3 v-if="article.headline" class="font-display text-2xl font-black">
          {{ article.headline }}
        </h3>
      </div>
      <ReadMoreLink :href="`/${slug}`" :title="article.headline ?? 'Read more'" />
    </div>
  </div>
</template>
