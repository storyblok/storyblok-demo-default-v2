<script setup>
const props = defineProps({ blok: Object, layout: String, backgroundColor: String });

const desktopImage = computed(() => {
  if (props.blok.layout === 'stacked') {
    return getOptimizedImage(props.blok?.image, 2000, props.blok.preserve_image_aspect_ratio ? 0 : 750);
  }
  else {
    return getOptimizedImage(props.blok?.image, 1000, props.blok.preserve_image_aspect_ratio ? 0 : 1200);
  }
},
);

const mobileImage = computed(() => getOptimizedImage(props.blok?.image, 672, props.blok.preserve_image_aspect_ratio ? 0 : 448));
</script>

<template>
  <div class="relative" :class="layout === 'split' ? 'px-4 md:px-8 py-12 md:pt-20 lg:p-0' : 'px-4 md:px-8 lg:px-0 translate-y-12 md:translate-y-24'">
    <div class="relative z-10">
      <DecorationImageTopLeft v-if="blok.image_decoration" class="absolute left-0 top-0 origin-top-left translate-x-[-20px] translate-y-[-25px] scale-50 md:translate-x-[-40px] md:translate-y-[-50px] md:scale-100" />
      <DecorationImageBottomRight v-if="blok.image_decoration" class="absolute bottom-0 right-0 origin-bottom-right translate-x-[25px] translate-y-[25px] scale-50 md:translate-x-[50px] md:translate-y-[55px] md:scale-100" />
      <img v-if="desktopImage" class="invisible hidden h-auto w-full rounded-lg lg:visible lg:block" :src="desktopImage" :alt="blok.image.alt" />
      <img v-if="mobileImage" class="h-auto w-full rounded-lg lg:invisible lg:hidden" :src="mobileImage" :alt="blok.image.alt" />
    </div>
    <div v-if="layout === 'split'" class="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-[200%] -translate-x-1/2 content-[''] lg:invisible lg:hidden" :class="backgroundColor"></div>
  </div>
</template>
