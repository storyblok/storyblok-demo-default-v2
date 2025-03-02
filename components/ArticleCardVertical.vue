<script setup>
const props = defineProps({ article: Object, slug: String });

const optimizedImage = computed(() =>
  getOptimizedImage(props.article?.image, 800, 600),
);
</script>

<template>
  <NuxtLink
    v-if="article"
    :to="`/${slug}`"
    class="flex h-full flex-col"
  >
    <img
      v-if="optimizedImage"
      :src="optimizedImage"
      :alt="article.image && article.image.alt"
      class="pointer-events-none mb-6 rounded-xl"
    />
    <div class="flex h-full flex-col">
      <div class="flex grow flex-col space-y-4">
        <CategoriesList v-if="article.categories.length" :categories="article.categories" class="flex space-x-4" />
        <h3 class="text-2xl font-black">
          {{ article.headline }}
        </h3>
      </div>
      <ReadMoreButton />
    </div>
  </NuxtLink>
</template>
