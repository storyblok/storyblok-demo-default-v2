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
    class="article-card border-medium flex flex-col space-y-6 border-b pb-12 md:grow md:flex-row md:justify-between md:space-x-12 md:space-y-0"
  >
    <img
      v-if="optimizedImage"
      :src="optimizedImage"
      :alt="article.image && article.image.alt"
      class="max-w-52 rounded-xl md:order-1"
    />
    <div>
      <CategoriesList v-if="article.categories.length" :categories="article.categories" class="mb-4 flex space-x-4" />
      <h3 v-if="article.headline" class="font-display text-2xl font-black">
        {{ article.headline }}
      </h3>
      <ReadMoreButton />
    </div>
  </NuxtLink>
</template>

<style scoped>
.article-card:nth-child(odd):nth-last-child(2),
.article-card:last-child {
  @apply border-none;
}
</style>
