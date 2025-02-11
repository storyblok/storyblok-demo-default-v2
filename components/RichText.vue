<script setup>
const props = defineProps({ text: Object });

const richText = computed(() => renderCustomRichText(props.text));
</script>

<template>
  <div class="prose prose-lg" v-html="richText"></div>
</template>

<style>
.prose ul li p {
  @apply m-0 p-0;
}
</style>
