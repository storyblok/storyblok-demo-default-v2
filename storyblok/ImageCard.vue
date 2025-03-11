<script setup>
const props = defineProps({ blok: Object });

const optimizedImage = computed(() => getOptimizedImage(props.blok?.image, 800));
</script>

<template>
  <div
    v-editable="blok"
    class="image-blok flex size-full flex-col"
  >
    <div
      class="mb-6 max-w-sm justify-center rounded-lg pb-0 pt-12 lg:max-w-none"
      :class="`bg-${blok.background_color}`"
    >
      <img v-if="optimizedImage" :src="optimizedImage" :alt="blok.image.alt" class="h-[360px] w-full object-cover object-top" />
    </div>
    <h3 class="mb-3 font-display text-xl font-black">
      {{ blok.label }}
    </h3>
    <div class="leading-relaxed">{{ blok.text }}</div>
  </div>
</template>
