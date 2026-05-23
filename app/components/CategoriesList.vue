<script setup lang="ts">
import type { ArticlePage } from '#storyblok'

defineProps<{ categories: ArticlePage['categories'] }>()
</script>

<template>
  <ul>
    <li v-for="cat in categories" :key="typeof cat === 'string' ? cat : cat.uuid">
      <NuxtLink
        v-if="typeof cat !== 'string'"
        :to="`/${cat.full_slug}`"
        class="focus-ring flex items-center space-x-2"
      >
        <img
          v-if="cat.content?.icon?.filename"
          :src="cat.content.icon.filename"
          :alt="cat.content.icon.alt || cat.slug"
          width="24"
        />
        <span class="hover:text-secondary text-primary-dark transition-all">
          {{ cat.name }}
        </span>
      </NuxtLink>
    </li>
  </ul>
</template>
