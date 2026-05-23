<script setup lang="ts">
import type { PersonalizedSection } from '#storyblok'
import type { SbBlokData } from '@storyblok/js'

const props = defineProps<{ blok: PersonalizedSection }>()

const route = useRoute()

const visitedPaths = useCookie<string[]>('visitedPaths', { default: () => [] })
const visitor = ref('new_visitor')

if (route.query.path && !visitedPaths.value.includes(route.query.path as string)) {
  // add current path to cookie array
  visitedPaths.value?.push(route.query.path as string)
} else {
  // user already visited this path
  visitor.value = 'returning_visitor'
}

const show = computed(() =>
  // if in Visual Editor, allow previewing of content for both scenarios, otherwise show content depending on cookie value
  route.query._storyblok ? props.blok.preview : visitor.value
)
</script>

<template>
  <div v-if="show === 'new_visitor'">
    <StoryblokComponent
      v-for="currentBlok in blok.new_visitor_blocks"
      :key="currentBlok._uid"
      :blok="currentBlok as SbBlokData"
    />
  </div>
  <div v-else>
    <StoryblokComponent
      v-for="currentBlok in blok.returning_visitor_blocks"
      :key="currentBlok._uid"
      :blok="currentBlok as SbBlokData"
    />
  </div>
</template>
