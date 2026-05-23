<script setup lang="ts">
import type { DefaultPage } from '#storyblok'
import type { SbBlokData } from '@storyblok/js'

defineProps<{ blok: DefaultPage; uuid: string }>()
</script>

<template>
  <div v-editable="blok">
    <ComponentCheck
      v-for="(currentBlok, index) in blok.body"
      :key="currentBlok._uid"
      :index="index"
      :blok="currentBlok as SbBlokData"
    />
  </div>
</template>
