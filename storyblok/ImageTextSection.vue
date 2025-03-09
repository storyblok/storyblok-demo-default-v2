<script setup>
const props = defineProps({ blok: Object });

const fixedHeightImages = computed(() => {
  if (props.blok.image_layout !== 'fixed-height') {
    return false;
  }
  return {
    mobile: getOptimizedImage(props.blok.image, 600, 300),
    tablet: getOptimizedImage(props.blok.image, 1000, 500),
    desktop: getOptimizedImage(props.blok.image, 1000, 1250),
  };
});

const optimizedImage = computed(() => getOptimizedImage(props.blok.image, 1000));
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
      <div
        class="order-last text-left"
        :class="blok.reverse_layout ? '' : 'lg:order-first'"
      >
        <Eyebrow v-if="blok.eyebrow">{{ blok.eyebrow }}</Eyebrow>
        <Headline v-if="blok.headline" size="small" :headline="blok.headline" />
        <div v-if="blok.text" class="prose prose-lg mb-6">
          <StoryblokRichText :doc="blok.text" />
        </div>
        <div v-if="blok.buttons.length" class="flex gap-4">
          <Button
            v-for="button in blok.buttons"
            :key="button._uid"
            :button="button"
          />
        </div>
      </div>
      <div>
        <div v-if="blok.image.filename" class="relative rounded-xl bg-cover bg-center bg-no-repeat p-16" :style="`background: url('${blurredImage}');`">
          <DecorationImageTopLeft class="absolute left-0 top-0 translate-x-[20px] translate-y-[15px]" />
          <img
            v-if="!fixedHeightImages"
            :src="optimizedImage"
            :alt="blok.image.alt"
            class="rounded-lg"
          />
          <img
            v-if="fixedHeightImages"
            :src="fixedHeightImages.mobile"
            :alt="blok.image.alt"
            class="rounded-lg md:invisible md:hidden"
          />
          <img
            v-if="fixedHeightImages"
            :src="fixedHeightImages.tablet"
            :alt="blok.image.alt"
            class="invisible hidden rounded-lg md:visible md:block lg:invisible lg:hidden"
          />
          <img
            v-if="fixedHeightImages"
            :src="fixedHeightImages.desktop"
            :alt="blok.image.alt"
            class="invisible hidden rounded-lg lg:visible lg:block"
          />
        </div>
      </div>
    </div>
  </section>
</template>
