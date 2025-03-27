<script setup>
const props = defineProps({ article: Object, slug: String });

const optimizedImage = computed(() =>
  getOptimizedImage(props.article?.image, 400, 400),
);
</script>

<template>
  <div
    v-if="article"
    class="article-card border-medium flex flex-col gap-6 border-b pb-12 md:grow md:flex-row md:justify-between"
  >
    <img
      v-if="optimizedImage"
      :src="optimizedImage"
      :alt="article.image && article.image.alt"
      width="200"
      height="200"
      class="aspect-square size-[200px] rounded-xl md:order-1"
    />
    <div>
      <CategoriesList v-if="article.categories.length" :categories="article.categories" class="mb-4 flex gap-4 lg:flex-col xl:flex-row" />
      <h3 v-if="article.headline" class="font-display text-2xl font-black">
        {{ article.headline }}
      </h3>
      <ReadMoreLink :href="`/${slug}`" />
    </div>
  </div>
</template>

<style scoped>
.article-card:nth-child(odd):nth-last-child(2),
.article-card:last-child {
  @apply lg:border-none;
}

.article-card:last-child {
  @apply border-none;
}
</style>
