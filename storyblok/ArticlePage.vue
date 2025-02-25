<script setup>
const props = defineProps({ blok: Object });

const optimizedArticleImage = computed(() =>
  getOptimizedImage(props.blok.image, 1600, 800),
);
</script>

<template>
  <article v-editable="blok">
    <div class="container">
      <header>
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <CategoriesList v-if="blok.categories.length" :categories="blok.categories" class="mt-12 flex justify-center space-x-4" />
          <h1
            v-if="blok.headline"
            class="mb-4 mt-12 font-display text-2xl font-bold leading-tight sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight"
          >
            {{ blok.headline }}
          </h1>
        </div>

        <img
          v-if="optimizedArticleImage"
          :src="optimizedArticleImage"
          :alt="blok.image.alt"
          class="pointer-events-none rounded-xl"
        />
      </header>
      <main class="prose prose-lg mx-auto my-12">
        <StoryblokRichText :doc="blok.text" />
      </main>
    </div>
  </article>
</template>
