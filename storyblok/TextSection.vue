<script setup>
defineProps({ blok: Object, index: Number });
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
      <Headline v-if="blok.headline" :headline="blok.headline" :index="index" />
      <div
        v-if="blok.text"
        :class="{ 'mx-auto': blok.text_alignment === 'center' }"
        class="prose prose-lg mb-6"
      >
        <StoryblokRichText :doc="blok.text" />
      </div>
      <div v-if="blok?.buttons?.length" class="flex flex-col gap-4 sm:flex-row" :class="blok.text_alignment === 'center' ? 'justify-center' : 'justify-start items-start'">
        <Button
          v-for="button in blok.buttons"
          :key="button._uid"
          :button="button"
        />
      </div>
    </div>
  </section>
</template>
