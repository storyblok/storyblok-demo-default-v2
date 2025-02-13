<script setup>
const props = defineProps({ blok: Object, index: Number });

/* const verticalAlignment = computed(() => {
  return `items-${props.blok.vertical_alignment}`;
}); */

const optimizedImage = computed(() =>
  getOptimizedImage(props.blok?.image, 1000),
);
</script>

<template>
  <section
    v-editable="blok"
    class="relative py-36"
    :class="[`bg-[${blok.background_color.value}]`]"
    :style="[`--background-color: ${blok.background_color.value};`, `--secondary-background-color: ${blok.secondary_background_color.value}`]"
  >
    <div
      v-if="blok.layout === 'stacked'"
      class="container relative z-20"
    >
      <pre>{{ blok.background_color }}</pre>
      <p>{{ blok.eyebrow }}</p>
      <Headline>{{ blok.headline }}</Headline>
      <div>{{ blok.text }}</div>
      <img :src="optimizedImage" alt="" />
    </div>
    <div v-else-if="blok.layout === 'split'" class="container relative z-20 grid grid-cols-2 gap-24">
      <div>
        Col 1
      </div>
      <div :style="{ }">
        <img :src="optimizedImage" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  @apply bg-[--background-color];
}
section::after {
  @apply content-[''] absolute pointer-events-none z-10 top-0 left-1/2 w-[50%] h-full bg-[--secondary-background-color];
}
</style>
