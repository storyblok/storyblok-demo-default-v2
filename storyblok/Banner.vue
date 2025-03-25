<script setup>
const props = defineProps({ blok: Object, referenced: Boolean });

const isSvg = computed(() => {
  if (!props.blok.background_image?.filename) {
    return false;
  }
  const detectFileExtension = props.blok.background_image?.filename.split('.');
  return detectFileExtension[detectFileExtension.length - 1] === 'svg';
});

const optimizedImage = computed(() => {
  if (isSvg.value) {
    return props.blok.background_image?.filename;
  }
  return getOptimizedImage(props.blok.background_image, 1600);
});

const showVideo = computed(() => {
  if (
    props.blok.background_image?.filename
    && !props.blok.background_video?.filename
  ) {
    return false;
  }
  else if (props.blok.background_video?.filename) {
    return true;
  }
  return false;
});

const imageClasses = computed(() => {
  let output = 'pointer-events-none absolute bottom-0 z-0';
  if (props.blok.background_image_cover) {
    output += ' left-0 size-full object-cover';
    return output;
  }
  switch (props.blok.background_image_alignment) {
    case 'center':
      output += ' left-1/2 -translate-x-1/2';
      break;
    case 'right':
      output += ' right-0';
      break;
    case 'left':
    default:
      output += ' left-0';
  }
  switch (props.blok.background_image_width) {
    case '50':
      output += ' w-9/12 md:w-1/2';
      break;
    case '75':
      output += ' w-9/12';
      break;
    case '100':
    default:
      output += ' w-full';
  }
  return output;
});

const overlay = computed(() => {
  if (showVideo.value || (optimizedImage.value && props.blok.background_image_cover)) {
    return true;
  }
  return false;
});
</script>

<template>
  <section
    v-editable="blok"
    class="page-section banner-section relative flex min-h-[600px] items-center  overflow-hidden"
    :class="[`bg-${blok?.background_color}`, { 'pointer-events-none': referenced }]"
  >
    <div class="container relative z-20 flex" :class="[{ 'justify-center text-center': blok.text_alignment === 'center' }, { 'text-white': overlay }]">
      <div class="relative z-30 max-w-3xl">
        <Headline v-if="blok.headline" :headline="blok.headline" :color="overlay ? 'text-white' : ''" />
        <Lead v-if="blok.lead">{{ blok.lead }}</Lead>
        <div v-if="blok?.buttons?.length" class="flex flex-col gap-4 sm:flex-row" :class="blok.text_alignment === 'center' ? 'justify-center' : 'justify-start items-start'">
          <Button
            v-for="button in blok.buttons"
            :key="button._uid"
            :button="button"
          />
        </div>
      </div>
    </div>
    <div v-if="overlay" class="absolute left-0 top-0 z-10 size-full bg-black/30"></div>
    <video
      v-if="showVideo"
      :src="blok.background_video.filename"
      :alt="blok.background_video.alt"
      class="absolute left-0 top-0 z-0 size-full object-cover"
      autoplay
      muted
      loop
    ></video>
    <img
      v-else-if="optimizedImage"
      :src="optimizedImage"
      :alt="blok.background_image?.alt"
      :class="imageClasses"
    />
  </section>
</template>
