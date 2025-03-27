<script setup>
const props = defineProps({ blok: Object, index: Number });

const headConfig = computed(() => ({
  style: [
    {
      children: props.blok.background_color !== 'white' ? `:root { --nav-background-color: var(--${props.blok.background_color})};` : '',
    },
  ],
}));

useHead(headConfig);
</script>

<template>
  <section
    v-editable="blok"
    class="relative"
    :class="[`bg-${blok.background_color}`, blok.layout === 'split' ? 'overflow-hidden pt-20 lg:pb-16 lg:pt-20' : 'pt-16 lg:pt-32']"
  >
    <div
      v-if="blok.layout === 'stacked'"
      class="container relative z-20 mb-12 lg:mb-20"
    >
      <HeroContent :blok="blok" />
      <HeroImage :blok="blok" :layout="blok.layout" />
    </div>
    <div v-else-if="blok.layout === 'split'" class="container relative z-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-32">
      <HeroContent :blok="blok" />
      <HeroImage :blok="blok" :layout="blok.layout" :background-color="`bg-${blok.secondary_background_color}`" />
    </div>
    <div v-if="blok.layout === 'split'" class="pointer-events-none invisible absolute left-1/2 top-0 z-10 hidden h-full w-1/2 content-[''] lg:visible lg:block" :class="`bg-${blok.secondary_background_color}`"></div>
  </section>
</template>
