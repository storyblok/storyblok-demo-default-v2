<script setup>
const props = defineProps({ card: Object });

const optimizedImage = computed(() => getOptimizedImage(props.card?.image, 800));
</script>

<template>
  <div
    v-editable="card"
    class="image-card flex w-full flex-col"
  >
    <div
      class="mb-6 flex w-full justify-center rounded-lg px-3 pb-0 pt-12"
      :class="`bg-${card.background_color}`"
    >
      <img v-if="optimizedImage" :src="optimizedImage" :alt="card.image.alt" class="h-[360px] w-full object-cover object-top" />
    </div>
    <h3 class="mb-3 font-display text-xl font-black">
      {{ card.label }}
    </h3>
    <div class="leading-relaxed">{{ card.text }}</div>
  </div>
</template>
