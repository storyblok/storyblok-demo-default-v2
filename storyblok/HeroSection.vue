<script setup>
const props = defineProps({ blok: Object, index: Number });

const headConfig = computed(() => ({
  style: [
    {
      children: `:root { --nav-background-color: ${props.blok.background_color.value}; }`,
    },
  ],
}));

useHead(headConfig);
</script>

<template>
  <section
    v-editable="blok"
    class="relative"
    :class="[`bg-[${blok.background_color.value}]`, blok.layout]"
    :style="[`--background-color: ${blok.background_color.value};`, `--secondary-background-color: ${blok.secondary_background_color.value}`]"
  >
    <div
      v-if="blok.layout === 'stacked'"
      class="container relative z-20 mb-20"
    >
      <HeroContent :blok="blok" />
      <HeroImage :blok="blok" class="translate-y-20" />
    </div>
    <div v-else-if="blok.layout === 'split'" class="container relative z-20 grid grid-cols-2 items-center gap-32">
      <HeroContent :blok="blok" />
      <HeroImage :blok="blok" />
    </div>
  </section>
</template>

<style scoped>
section {
  @apply bg-[--background-color];
}
section.stacked {
  @apply pt-48;
}
section.split {
  @apply pt-56 pb-16;
}
section.split::after {
  @apply content-[''] absolute pointer-events-none z-10 top-0 left-1/2 w-[50%] h-full bg-[--secondary-background-color];
}
</style>
