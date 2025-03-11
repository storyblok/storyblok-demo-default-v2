<script setup>
defineProps({ blok: Object });
</script>

<template>
  <section
    v-editable="blok"
    class="page-section faq-section relative bg-primary-background"
  >
    <div class="container relative z-10 grid gap-10 xl:grid-cols-2">
      <div>
        <Headline v-if="blok.headline" size="small" :headline="blok.headline" />
        <Lead v-if="blok.lead">
          {{ blok.lead }}
        </Lead>
      </div>
      <ul v-if="blok.faq_entries.length" class="">
        <li v-for="entry in blok.faq_entries" :key="entry._uid" class="border-b border-primary-dark py-8 last:border-none last:pb-0 last:pt-8">
          <details class="relative">
            <summary class="cursor-pointer list-none pr-6 text-xl font-medium">{{ entry.question }}</summary>
            <div v-if="entry.answer" class="prose mt-4">
              <StoryblokRichText :doc="entry.answer" />
            </div>
          </details>
        </li>
      </ul>
    </div>
    <Decoration2 class="absolute bottom-0 left-0 z-0" />
  </section>
</template>

<style scroped>
details::after {
  content: '';
  @apply absolute top-0 right-0 inline-block w-8 h-8 bg-no-repeat bg-contain;
  background-image: url('~/assets/images/chevron-down.svg');
}
details[open]::after {
  transform: rotate(180deg);
}
</style>
