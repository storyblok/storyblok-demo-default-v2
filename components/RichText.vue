<script setup>
defineProps({ text: Object });
</script>

<template>
  <!-- <pre>{{ text }}</pre> -->
  <div class="prose prose-lg">
    <StoryblokRichText :doc="text" />
  </div>
</template>

<style>
.prose ul li p {
  @apply m-0 p-0;
}
</style>
