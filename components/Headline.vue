<script setup>
const props = defineProps({ color: String, size: String });

const classes = computed(() => {
  let classes
    = 'font-display font-black mb-3 md:mb-6';

  if (props.size === 'small') {
    classes += ' text-2xl sm:text-3xl lg:text-4xl';
  }
  else {
    classes += ' text-3xl sm:text-4xl lg:text-5xl';
  }

  if (props.color) {
    classes += ` ${props.color}`;
  }
  else {
    classes += ' headline-color';
  }

  return classes;
});
</script>

<template>
  <h2 :class="classes">
    <slot></slot>
  </h2>
</template>

<style scoped>
h2.headline-color {
  color: var(--headline-color);
}
</style>
