<script setup>
import getGridClasses from '~~/composables/getGridClasses';

const props = defineProps({ blok: Object });

const gridClasses = computed(() => getGridClasses(props.blok.cols));
</script>

<template>
  <section
    v-editable="blok"
    class="page-section grid-section"
    :class="`bg-${blok.background_color}`"
  >
    <div class="container">
      <Headline v-if="blok.headline" :headline="blok.headline" class="text-center" />
      <div :class="gridClasses">
        <ArticleCard
          v-for="article in blok.articles"
          :key="article.uuid"
          :article="article.content"
          :slug="article.full_slug"
        />
      </div>
    </div>
  </section>
</template>
