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
          <H1Headline
            v-if="blok.headline"
          >
            {{ blok.headline }}
          </H1Headline>
        </div>
        <div class="relative">
          <DecorationImageTopRight class="absolute right-0 top-0 translate-x-[40px] translate-y-[-50px]" />
          <img
            v-if="optimizedArticleImage"
            :src="optimizedArticleImage"
            :alt="blok.image.alt"
            class="h-auto w-full rounded-xl"
          />
        </div>
      </header>
      <main class="prose prose-lg mx-auto my-12">
        <StoryblokRichText :doc="blok.text" />
      </main>
    </div>
  </article>
</template>
