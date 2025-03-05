<script setup>
const props = defineProps({ blok: Object, index: Number });

const headConfig = computed(() => ({
  style: [
    {
      children: `:root { --nav-background-color: var(--${props.blok.background_color})};`,
    },
  ],
}));

useHead(headConfig);
</script>

<template>
  <section
    v-editable="blok"
    class="relative"
    :class="[`bg-${blok.background_color}`, blok.layout === 'split' ? 'pb-16 pt-40' : ' pt-32']"
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
    <div v-if="blok.layout === 'split'" class="pointer-events-none absolute left-1/2 top-0 z-10 block h-full w-1/2 content-['']" :class="`bg-${blok.secondary_background_color}`"></div>
  </section>
</template>
