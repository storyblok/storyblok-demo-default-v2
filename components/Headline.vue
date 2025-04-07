<script setup>
const props = defineProps({ headline: Object, color: String, size: String, index: Number });

const classes = computed(() => {
  let classes
    = 'font-display font-black mb-3 md:mb-6 text-3xl ';

  if (props.size === 'small') {
    classes += 'sm:text-3xl lg:text-4xl ';
  }
  else if (props.size === 'large') {
    classes += 'sm:text-5xl lg:text-6xl ';
  }
  else {
    classes += ' sm:text-4xl lg:text-5xl ';
  }

  if (props.color) {
    classes += `${props.color}`;
  }
  else {
    classes += 'text-[--headline-color]';
  }

  return classes;
});

const tag = computed(() => {
  return props.index === 0 ? 'h1' : 'h2';
});
</script>

<template>
  <component :is="tag" :class="classes">
    <HeadlineSegment
      v-for="headlineSegment in headline"
      :key="headlineSegment._uid"
      :headline-segment="headlineSegment"
    />
  </component>
</template>

<style scoped>
h1.headline-color,
h2.headline-color {
  color: var(--headline-color);
}
</style>
