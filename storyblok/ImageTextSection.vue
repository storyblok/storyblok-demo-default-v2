<script setup>
const props = defineProps({ blok: Object });

const optimizedImages = computed(() => {
  return {
    mobile: getOptimizedImage(props.blok.image, 600, props.blok.preserve_image_aspect_ratio ? 0 : 300),
    tablet: getOptimizedImage(props.blok.image, 1000, props.blok.preserve_image_aspect_ratio ? 0 : 500),
    desktop: getOptimizedImage(props.blok.image, 1000, props.blok.preserve_image_aspect_ratio ? 0 : 1250),
  };
});

const blurredImage = computed(() => getOptimizedImage(props.blok.image, 1000, 0, ':blur(60):brightness(20)'));
</script>

<template>
  <section
    v-editable="blok"
    class="page-section image-text-section"
    :class="`bg-${blok.background_color}`"
  >
    <div
      class="container grid items-center gap-6 sm:gap-10 md:gap-12 lg:grid-cols-2"
    >
      <div>
        <div v-if="blok.image.filename" class="relative rounded-xl bg-cover bg-center bg-no-repeat p-8 md:p-16" :style="`background: url('${blurredImage}'); background-size: cover; background-repeat: no-repeat; background-position: center;`">
          <DecorationImageTopLeft class="absolute left-0 top-0 origin-top-left translate-x-[-20px] translate-y-[-25px] scale-50 md:translate-x-[25px] md:translate-y-[20px] md:scale-100" />
          <img
            v-if="optimizedImages"
            :src="optimizedImages.mobile"
            :alt="blok.image.alt"
            class="rounded-lg md:invisible md:hidden"
          />
          <img
            v-if="optimizedImages"
            :src="optimizedImages.tablet"
            :alt="blok.image.alt"
            class="invisible hidden rounded-lg md:visible md:block lg:invisible lg:hidden"
          />
          <img
            v-if="optimizedImages"
            :src="optimizedImages.desktop"
            :alt="blok.image.alt"
            class="invisible hidden rounded-lg lg:visible lg:block"
          />
        </div>
      </div>
      <div
        class="text-left"
        :class="[blok.reverse_mobile_layout ? 'order-first' : '', blok.reverse_desktop_layout ? 'lg:order-last' : 'lg:order-first']"
      >
        <Eyebrow v-if="blok.eyebrow">{{ blok.eyebrow }}</Eyebrow>
        <Headline v-if="blok.headline" size="small" :headline="blok.headline" />
        <div v-if="blok.text" class="prose prose-lg mb-6">
          <StoryblokRichText :doc="blok.text" />
        </div>
        <div v-if="blok?.buttons?.length" class="flex flex-col items-start justify-start gap-4 sm:flex-row">
          <Button
            v-for="button in blok.buttons"
            :key="button._uid"
            :button="button"
          />
        </div>
      </div>
    </div>
  </section>
</template>
