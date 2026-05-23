<script setup lang="ts">
import type { HeroSection } from '#storyblok'
const props = defineProps<{ blok: HeroSection; index: number }>()

useStyleTag(
  computed(() =>
    props.blok.background_color !== 'white'
      ? `:root { --nav-background-color: var(--color-${props.blok.background_color})} `
      : ''
  )
)
</script>

<template>
  <section
    v-editable="blok"
    class="relative"
    :class="[
      `bg-${blok.background_color}`,
      blok.layout === 'split' ? 'overflow-hidden pt-20 lg:pb-16 lg:pt-20' : 'pt-16 lg:pt-32',
    ]"
  >
    <div v-if="blok.layout === 'stacked'" class="container relative z-20 mb-12 lg:mb-20">
      <HeroContent :blok="blok" :index="index" />
      <HeroImage :blok="blok" />
    </div>
    <div
      v-else-if="blok.layout === 'split'"
      class="container relative z-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-32"
    >
      <HeroContent :blok="blok" :index="index" />
      <HeroImage :blok="blok" :background-color="`bg-${blok.secondary_background_color}`" />
    </div>
    <div
      v-if="blok.layout === 'split'"
      class="pointer-events-none invisible absolute left-1/2 top-0 z-10 hidden h-full w-1/2 content-[''] lg:visible lg:block"
      :class="`bg-${blok.secondary_background_color}`"
    />
  </section>
</template>
