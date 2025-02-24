<script setup>
defineProps({ blok: Object });
</script>

<template>
  <section
    v-editable="blok"
    class="page-section faq-section relative bg-light"
  >
    <div class="container relative z-10 grid gap-10 xl:grid-cols-2">
      <div>
        <Headline v-if="blok.headline" size="small" :headline="blok.headline" />
        <Lead v-if="blok.lead">
          {{ blok.lead }}
        </Lead>
      </div>
      <ul v-if="blok.faq_entries.length" class="">
        <li v-for="entry in blok.faq_entries" :key="entry._uid" class="border-b border-dark py-8 last:border-none">
          <details class="relative">
            <summary class="cursor-pointer list-none pr-6 text-xl font-medium">{{ entry.question }}</summary>
            <div v-if="entry.answer" class="prose mt-4">
              <StoryblokRichText :doc="entry.answer" />
            </div>
          </details>
        </li>
      </ul>
    </div>
    <Decoration2 class="absolute bottom-0 left-0 z-0" fill="#9987f0" />
  </section>
</template>

<style scroped>
details::after {
  content: '';
  @apply absolute top-0 right-0 inline-block w-8 h-8 bg-no-repeat bg-contain;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none"><path d="M12 14.5123L16 18.5123L20 14.5123" stroke="%231B243F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
}
details[open]::after {
  transform: rotate(180deg);
}
</style>
