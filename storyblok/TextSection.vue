<script setup>
defineProps({ blok: Object });
</script>

<template>
  <section
    v-editable="blok"
    class="page-section text-section"
    :class="`bg-${blok.background_color}`"
  >
    <div class="container" :class="{ 'text-center': blok.text_alignment === 'center' }">
      <Eyebrow v-if="blok.eyebrow">
        {{ blok.eyebrow }}
      </Eyebrow>
      <Headline v-if="blok.headline" :headline="blok.headline" />
      <div
        v-if="blok.text"
        :class="{ 'mx-auto': blok.text_alignment === 'center' }"
        class="prose prose-lg mb-6"
      >
        <StoryblokRichText :doc="blok.text" />
      </div>
      <div v-if="blok.buttons.length" class="flex gap-4" :class="blok.text_alignment === 'center' ? 'justify-center' : ''">
        <Button
          v-for="button in blok.buttons"
          :key="button._uid"
          :button="button"
        />
      </div>
    </div>
  </section>
</template>
