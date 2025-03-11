<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div
    v-editable="blok"
    class="price-blok relative flex w-full max-w-md flex-col rounded-lg border bg-white p-6 text-primary-dark lg:max-w-none"
    :class="[
      blok.most_popular ? 'border-2 border-primary-dark' : 'border-medium']"
  >
    <div
      v-if="blok.most_popular"
      class="absolute right-0 top-0 inline-block -translate-x-4 translate-y-4 rounded-lg bg-[#FFE6AA] px-3 py-1 text-[#913F0F]"
    >
      Most popular
    </div>
    <h3 class="mb-4 font-display text-3xl font-black">{{ blok.headline }}</h3>
    <div v-if="blok.text_1" class="prose">
      <StoryblokRichText :doc="blok.text_1" />
    </div>
    <span v-if="blok.price" class="mt-4 text-4xl font-black">${{ blok.price }}<span class="text-2xl font-medium">/month</span></span>
    <div v-if="blok.button.length" class="my-6">
      <Button
        v-for="button in blok.button"
        :key="button._uid"
        :button="button"
      />
    </div>
    <div v-if="blok.text_2" class="prose">
      <StoryblokRichText :doc="blok.text_2" />
    </div>
  </div>
</template>
