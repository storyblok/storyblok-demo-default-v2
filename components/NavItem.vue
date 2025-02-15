<script setup>
const props = defineProps({ item: Object, reducedFontWeight: Boolean });

const url = computed(() => {
  if (!props.item.link.url) {
    return '';
  }
  switch (props.item.link.linktype) {
    case 'story':
      return `/${props.item.link.story?.full_slug}`;
    case 'email':
      return `mailto:${props.item.link.email}`;
    case 'url':
    case 'asset':
    default:
      return props.item.link.url;
  }
});
</script>

<template>
  <NuxtLink
    v-editable="item"
    :to="url"
    class="relative flex h-full cursor-pointer items-center text-base transition-colors"
    :class="props.reducedFontWeight ? 'font-light' : 'font-medium'"
  >
    {{ item.label }}
  </NuxtLink>
</template>
