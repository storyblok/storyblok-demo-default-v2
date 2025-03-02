<script setup>
import getGridClasses from '~~/composables/getGridClasses';

const props = defineProps({ blok: Object });

const gridClasses = computed(() => getGridClasses(props.blok.cols));
</script>

<template>
  <section
    v-editable="blok"
    class="page-section featured-articles-section"
    :class="`bg-${blok.background_color}`"
  >
    <div class="container">
      <Headline v-if="blok.headline" :headline="blok.headline" class="text-center" />
      <Lead v-if="blok.lead" class="text-center">
        {{ blok.lead }}
      </Lead>
      <div v-if="blok.articles" :class="gridClasses">
        <ArticleCardVertical
          v-for="article in blok.articles"
          :key="article.uuid"
          :article="article.content"
          :slug="article.full_slug"
        />
      </div>
    </div>
  </section>
</template>
