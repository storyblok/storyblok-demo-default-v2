<script setup>
const props = defineProps({ card: Object, backgroundColor: String });

const optimizedIcon = computed(() => {
  const isSvg = props.card.icon?.filename.slice(-3) === 'svg';
  const optimize = isSvg ? '' : `/m/${props.card?.icon_width}x0`;
  return props.card.icon?.filename + optimize;
});

const optimizedImage = getOptimizedImage(props.card?.background_image, 800);
</script>

<template>
  <div
    v-editable="card"
    class="grid-card relative flex size-full max-w-md flex-col overflow-hidden rounded-lg p-6 lg:max-w-none"
    :class="[backgroundColor, { 'row-span-2': card.row_span === '2' }, card.icon.filename ? 'justify-between' : 'justify-end']"
  >
    <img v-if="optimizedImage" :src="optimizedImage" :alt="card.background_image.alt" class="absolute left-0 top-0 z-0 size-full object-cover" />
    <img
      v-if="card.icon.filename"
      :src="optimizedIcon"
      :alt="card.icon.alt"
      :width="card.icon_width"
      class="pointer-events-none relative z-10 mb-6"
    />
    <div class="relative z-10" :class="{ 'text-light': optimizedImage }">
      <h3 class="mb-3 font-display text-xl font-black">
        {{ card.label }}
      </h3>
      <div class="font-light leading-relaxed">{{ card.text }}</div>
      <div v-if="card.button.length" class="mt-4">
        <Button
          v-for="button in card.button"
          :key="button._uid"
          :button="button"
        />
      </div>
    </div>
  </div>
</template>
