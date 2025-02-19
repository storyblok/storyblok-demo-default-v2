<script setup>
const props = defineProps({ card: Object, backgroundColor: String });

const optimizedIcon = computed(() => {
  const isSvg = props.card.icon?.filename.slice(-3) === 'svg';
  const optimize = isSvg ? '' : `/m/${props.card?.icon_width}x0`;
  return props.card.icon?.filename + optimize;
});
</script>

<template>
  <div
    v-editable="card"
    class="flex size-full max-w-md flex-col rounded-lg p-6 lg:max-w-none"
    :class="backgroundColor"
  >
    <img
      v-if="card.icon.filename"
      :src="optimizedIcon"
      :alt="card.icon.alt"
      :width="card.icon_width"
      class="pointer-events-none mb-6"
    />
    <div class="flex grow flex-col">
      <div class="grow">
        <h3 class="mb-3 font-display text-xl font-black">
          {{ card.label }}
        </h3>
        <div class="font-light leading-relaxed">{{ card.text }}</div>
      </div>
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
