<script setup>
defineProps({ categories: { type: Object, required: true } });
</script>

<template>
  <ul>
    <li v-for="cat in categories" :key="cat.uuid">
      <NuxtLink :to="`/${cat.full_slug}`" class="flex items-center space-x-2">
        <img v-if="cat.content?.icon?.filename" :src="cat.content?.icon?.filename" :alt="cat.content?.alt" width="24" />
        <span class="text-dark transition-all hover:text-secondary">
          {{ cat.name }}
        </span>
      </NuxtLink>
    </li>
  </ul>
</template>
