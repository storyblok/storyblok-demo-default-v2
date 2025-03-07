<script setup>
const props = defineProps({ blok: Object });

const optimizedImage = computed(() => {
  if (props.blok.layout === 'stacked') {
    return getOptimizedImage(props.blok?.image, 2000, 750);
  }
  else {
    return getOptimizedImage(props.blok?.image, 1000, 800);
  }
},
);
</script>

<template>
  <div class="relative">
    <DecorationImageTopLeft v-if="blok.image_decoration" class="absolute left-0 top-0 translate-x-[-40px] translate-y-[-50px]" />
    <img class="h-auto w-full rounded-lg" :src="optimizedImage" :alt="blok.image.alt" />
  </div>
</template>
