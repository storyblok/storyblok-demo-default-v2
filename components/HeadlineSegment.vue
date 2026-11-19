<script setup>
defineProps({ headlineSegment: Object });
</script>

<template>
  <span v-editable="headlineSegment" v-field="'text'" :class="`text-${headlineSegment.highlight}`">{{ headlineSegment.text }}</span>
</template>
