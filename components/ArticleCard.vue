<script setup>
const props = defineProps({ article: Object, slug: String });

const { query } = useRoute();

const inEditor = computed(() => {
  return !!query._storyblok;
});

const optimizedImage = computed(() =>
  getOptimizedImage(props.article?.image, 400),
);
</script>

<template>
  <NuxtLink
    v-if="article"
    :to="inEditor ? '' : `/${slug}`"
    class="group flex size-full max-w-md flex-col overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:max-w-full"
  >
    <div class="h-[210px] w-full overflow-hidden xl:h-[300px]">
      <img
        :src="optimizedImage"
        :alt="article.image && article.image.alt"
        class="pointer-events-none size-full object-cover transition-all duration-700 group-hover:scale-110"
      />
    </div>
    <div class="grow p-6 text-left">
      <h3 class="mb-3 font-display text-xl font-medium text-dark">
        {{ article.headline }}
      </h3>
      <div class="line-clamp-3 font-light leading-relaxed text-dark">
        {{ article.teaser }}
      </div>
    </div>
    <div class="flex justify-between px-6 py-3 text-dark">
      <span class="font-medium">Continue reading</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 transition-transform duration-500 group-hover:translate-x-3"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </div>
  </NuxtLink>
</template>
