<script setup>
defineProps({ blok: Object, index: Number });
</script>

<template>
  <div class="max-w-3xl" :class="blok.text_alignment === 'center' ? 'mx-auto text-center' : ''">
    <Eyebrow v-if="blok.eyebrow">{{ blok.eyebrow }}</Eyebrow>
    <Headline v-if="blok.headline" size="large" :headline="blok.headline" :index="index" />
    <Lead v-if="blok.text">{{ blok.text }}</Lead>
    <div v-if="blok?.buttons?.length" class="flex flex-col gap-4 sm:flex-row" :class="blok.text_alignment === 'center' ? 'justify-center' : 'justify-start items-start'">
      <Button
        v-for="button in blok.buttons"
        :key="button._uid"
        :button="button"
      />
    </div>
  </div>
</template>
