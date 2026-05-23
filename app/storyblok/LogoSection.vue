<script setup lang="ts">
import type { LogoSection } from '#storyblok'

defineProps<{ blok: LogoSection }>()
</script>

<template>
  <section v-editable="blok" class="page-section logos-section bg-white">
    <div class="container text-center">
      <Lead v-if="blok.lead">
        {{ blok.lead }}
      </Lead>
      <ul
        v-if="blok.logos?.length"
        class="mt-8 flex flex-wrap items-center justify-center gap-8 md:mt-16 md:gap-16"
      >
        <li v-for="logo in blok.logos" :key="logo.id" class="max-w-20 shrink-0 md:max-w-28">
          <img v-if="logo.filename" :src="logo?.filename" :alt="logo.alt || ''" />
        </li>
      </ul>
    </div>
  </section>
</template>
