<script setup>
defineProps({ card: Object });
</script>

<template>
  <div
    v-editable="card"
    class="price-card relative flex w-full max-w-md flex-col rounded-lg border bg-white p-6 text-primary-dark lg:max-w-none"
    :class="[
      card.most_popular ? 'border-2 border-dark' : 'border-medium']"
  >
    <div
      v-if="card.most_popular"
      class="absolute right-0 top-0 inline-block -translate-x-4 translate-y-4 rounded-lg bg-[#FFE6AA] px-3 py-1 text-[#913F0F]"
    >
      Most popular
    </div>
    <h3 class="mb-4 font-display text-3xl font-black">{{ card.headline }}</h3>
    <div v-if="card.text_1" class="prose">
      <StoryblokRichText :doc="card.text_1" />
    </div>
    <span v-if="card.price" class="mt-4 text-4xl font-black">${{ card.price }}<span class="text-2xl font-medium">/month</span></span>
    <div v-if="card.button.length" class="my-6">
      <Button
        v-for="button in card.button"
        :key="button._uid"
        :button="button"
      />
    </div>
    <div v-if="card.text_2" class="prose">
      <StoryblokRichText :doc="card.text_2" />
    </div>
  </div>
</template>
