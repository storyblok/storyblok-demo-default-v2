<script setup>
const props = defineProps({ blok: Object });

const optimizedImage = computed(() =>
  getOptimizedImage(props.blok.image, 800, 600),
);
</script>

<template>
  <section v-editable="blok" class="grid rounded-lg bg-primary-background p-4 text-primary-dark md:grid-cols-2 md:p-8">
    <img
      v-if="blok.image.filename"
      :src="optimizedImage"
      :alt="blok.image.alt"
      class="rounded-lg md:order-1"
    />
    <div class="md:order-0 pt-4 md:p-4 md:pr-8">
      <h3 v-if="blok.headline" class="mb-6 font-display text-3xl font-black md:visible md:block">{{ blok.headline }}</h3>
      <div v-if="blok.description" class="prose md:prose-lg"><StoryblokRichText :doc="blok.description" /></div>
      <Button
        v-for="button in blok.button"
        :key="button._uid"
        class="mt-6"
        :button="button"
      />
    </div>
  </section>
</template>
