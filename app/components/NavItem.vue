<script setup lang="ts">
import type { NavItem } from '#storyblok'

const props = defineProps<{
  item: NavItem
  reducedFontWeight?: boolean
}>()

const url = computed(() => {
  const link = props.item.link

  if (link.linktype === 'story') {
    return `/${(link.story as { full_slug?: string })?.full_slug ?? ''}`
  }
  if (link.linktype === 'email') {
    return `mailto:${link.email}`
  }
  return link.url ?? ''
})
</script>

<template>
  <NuxtLink
    v-editable="item"
    :to="url"
    class="focus-ring relative flex h-full cursor-pointer items-center text-base transition-colors"
    :class="props.reducedFontWeight ? 'font-normal' : 'font-medium'"
  >
    {{ item.label }}
  </NuxtLink>
</template>
