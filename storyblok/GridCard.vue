<script setup>
const props = defineProps({ blok: Object, backgroundColor: String });

const optimizedIcon = computed(() => {
  const isSvg = props.blok.icon?.filename.slice(-3) === 'svg';
  const optimize = isSvg ? '' : `/m/${props.blok?.icon_width}x0`;
  return props.blok.icon?.filename + optimize;
});

const optimizedImage = computed(() => getOptimizedImage(props.blok?.image, 800));
</script>

<template>
  <div
    v-editable="blok"
    class="grid-blok relative flex size-full max-w-sm grow flex-col overflow-hidden rounded-lg p-6 lg:max-w-none"
    :class="[blok.border ? 'border-medium border' : backgroundColor, { 'row-span-2': blok.row_span === '2' }, blok.icon.filename ? 'justify-between' : 'justify-end']"
  >
    <img v-if="optimizedImage" :src="optimizedImage" :alt="blok.background_image.alt" class="absolute left-0 top-0 z-0 size-full object-cover" />
    <div v-if="optimizedImage" class="absolute left-0 top-0 z-10 size-full bg-black/40"></div>
    <img
      v-if="blok.icon.filename"
      :src="optimizedIcon"
      :alt="blok.icon.alt"
      :width="blok.icon_width"
      class="pointer-events-none relative z-10 mb-6"
    />
    <div class="relative z-20" :class="{ 'text-white': optimizedImage }">
      <p v-if="blok.bold_text" class="mb-3 text-4xl font-black">{{ blok.bold_text }}</p>
      <h3 v-if="blok.label" class="mb-3 font-display text-xl font-black">
        {{ blok.label }}
      </h3>
      <p v-if="blok.text" class="leading-relaxed">{{ blok.text }}</p>
      <div v-if="blok.button.length" class="mt-4">
        <Button
          v-for="button in blok.button"
          :key="button._uid"
          :button="button"
        />
      </div>
    </div>
  </div>
</template>
