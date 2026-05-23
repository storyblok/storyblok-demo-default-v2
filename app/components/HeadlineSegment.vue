<script setup lang="ts">
import type { HeadlineSegment } from '#storyblok'
defineProps<{ headlineSegment: HeadlineSegment }>()
</script>

<template>
  <span v-editable="headlineSegment" :class="`text-${headlineSegment.highlight}`">{{
    headlineSegment.text
  }}</span>
</template>
