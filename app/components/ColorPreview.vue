<script setup lang="ts">
defineProps<{ color: string }>()
</script>

<template>
  <div class="text-center">
    <div
      class="flex aspect-square w-full items-center justify-center rounded-3xl shadow-sm"
      :class="`bg-${color}`"
    />
    <span class="text-sm text-primary-dark">{{ color }}</span>
  </div>
</template>
