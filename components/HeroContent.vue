<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div class="max-w-3xl" :class="blok.text_alignment === 'center' ? 'mx-auto text-center' : ''">
    <Eyebrow>{{ blok.eyebrow }}</Eyebrow>
    <Headline size="large">{{ blok.headline }}</Headline>
    <Lead>{{ blok.text }}</Lead>
    <div class="flex gap-4" :class="blok.text_alignment === 'center' ? 'justify-center' : ''">
      <Button
        v-for="button in blok.buttons"
        :key="button._uid"
        :button="button"
      />
    </div>
  </div>
</template>
