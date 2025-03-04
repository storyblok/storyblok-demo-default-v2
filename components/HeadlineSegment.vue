<script setup>
defineProps({ headlineSegment: Object });
</script>

<template>
  <span v-editable="headlineSegment" :class="`text-${headlineSegment.highlight}`">{{ headlineSegment.text }}</span>
</template>
