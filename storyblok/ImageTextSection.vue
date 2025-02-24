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
        <div v-if="blok.image.filename" class="relative rounded-xl bg-gray-200 bg-cover bg-center bg-no-repeat p-16" :style="`background: url('${blurredImage}');`">
          <svg class="absolute left-0 top-0 translate-x-[20px] translate-y-[15px]" xmlns="http://www.w3.org/2000/svg" width="71" height="59" viewBox="0 0 71 59" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M60.3247 28.4238C61.747 22.842 63.9679 17.4201 66.159 12.1817C66.6345 11.0555 67.9265 10.5005 68.9971 11.018C70.1118 11.461 70.6188 12.7544 70.1866 13.8055C68.0588 18.8804 65.8867 24.1292 64.544 29.4569C64.2627 30.5951 63.0765 31.3119 61.906 31.0369C60.7363 30.7623 60.0442 29.5625 60.3247 28.4238Z" fill="#FFFFFF" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M45.2756 23.4876C44.4674 18.6709 44.2043 13.6606 43.9784 8.8019C43.9326 7.75558 44.5678 6.82212 45.3906 6.79368C46.2182 6.69095 46.9257 7.47658 46.9757 8.44859C47.1915 13.1576 47.4324 18.0167 48.213 22.6082C48.3833 23.5869 47.8629 24.602 47.0516 24.8547C46.2408 25.1075 45.4465 24.4664 45.2756 23.4876Z" fill="#FFFFFF" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M36.3913 36.9162C27.8299 27.4608 20.5069 16.9513 11.6911 7.65434C10.8655 6.82349 10.9019 5.43673 11.7682 4.62066C12.6353 3.80463 14.0113 3.80078 14.8317 4.71813C23.6743 14.0167 31.0233 24.5278 39.6114 33.9848C40.4111 34.9009 40.3401 36.2852 39.4505 37.0999C38.5669 37.8281 37.1909 37.8323 36.3913 36.9162Z" fill="#FFFFFF" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.28499 52.9677C7.50066 53.2277 12.7163 53.4871 17.9329 53.7471C19.1275 53.7471 20.05 54.7874 19.9919 56.0005C19.9329 57.2137 18.916 58.0797 17.7204 58.0797C12.4961 57.8197 7.27264 57.5603 2.04917 57.3003C0.854496 57.2137 -0.0618873 56.1737 0.00313506 54.9605C0.0681574 53.8341 1.09118 52.881 2.28499 52.9677Z" fill="#FFFFFF" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4144 33.5522C14.7806 36.4169 19.1472 39.2811 23.5142 42.1463C24.5444 42.7511 24.8132 44.1153 24.149 45.132C23.484 46.1484 22.1685 46.3804 21.1375 45.7751C16.7638 42.906 12.3905 40.0378 8.01756 37.1691C7.03116 36.4896 6.76741 35.1288 7.43766 34.1155C8.06403 33.177 9.42874 32.8731 10.4144 33.5522Z" fill="#FFFFFF" />
          </svg>
          <img
            v-if="!fixedHeightImages"
            :src="optimizedImage"
            :alt="blok.image.alt"
            class="pointer-events-none rounded-lg"
          />
          <img
            v-if="fixedHeightImages"
            :src="fixedHeightImages.mobile"
            :alt="blok.image.alt"
            class="pointer-events-none rounded-lg md:invisible md:hidden"
          />
          <img
            v-if="fixedHeightImages"
            :src="fixedHeightImages.tablet"
            :alt="blok.image.alt"
            class="pointer-events-none invisible hidden rounded-lg md:visible md:block lg:invisible lg:hidden"
          />
          <img
            v-if="fixedHeightImages"
            :src="fixedHeightImages.desktop"
            :alt="blok.image.alt"
            class="pointer-events-none invisible hidden rounded-lg lg:visible lg:block"
          />
        </div>
      </div>
    </div>
  </section>
</template>
