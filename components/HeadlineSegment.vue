<script setup>
const props = defineProps({ headlineSegment: Object });

const classes = computed(() => {
  let classes = '';

  switch (props.headlineSegment.highlight) {
    case 'color_1':
      classes = 'text-red-500';
      break;
    case 'color_2':
      classes = 'text-green-500';
      break;
    case 'color_3':
      classes = 'text-blue-500';
      break;
    case 'none':
    default:
      classes = '';
  }

  return classes;
});
</script>

<template>
  <span :class="classes">{{ headlineSegment.text }}</span>
</template>
