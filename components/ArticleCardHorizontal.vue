<script setup>
const props = defineProps({ article: Object, slug: String });

const optimizedImage = computed(() =>
  getOptimizedImage(props.article?.image, 400, 400),
);
</script>

<template>
  <NuxtLink
    v-if="article"
    :to="`/${slug}`"
    class="article-card flex grow justify-between space-x-12 border-b border-medium pb-12"
  >
    <div>
      <CategoriesList v-if="article.categories.length" :categories="article.categories" class="mb-4 flex space-x-4" />
      <h3 class="text-2xl font-black">
        {{ article.headline }}
      </h3>
      <ReadMoreButton />
    </div>

    <img
      v-if="optimizedImage"
      :src="optimizedImage"
      :alt="article.image && article.image.alt"
      class="pointer-events-none max-w-52 rounded-xl"
    />
  </NuxtLink>
</template>

<style scoped>
.article-card:nth-child(odd):nth-last-child(2),
.article-card:last-child {
  @apply border-none;
}
</style>
