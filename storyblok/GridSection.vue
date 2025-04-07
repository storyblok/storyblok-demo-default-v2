<script setup>
const props = defineProps({ blok: Object, index: Number });

const gridCardColor = computed(() => {
  return props.blok.background_color === 'primary-background' ? 'bg-white' : 'bg-primary-background';
});

const gridClasses = computed(() => getGridClasses(props.blok.cols));
</script>

<template>
  <section
    v-editable="blok"
    class="page-section grid-section"
    :class="`bg-${blok.background_color}`"
  >
    <div class="container">
      <Headline v-if="blok.headline" :headline="blok.headline" :index="index" class="text-center" />
      <Lead v-if="blok.lead" class="text-center">
        {{ blok.lead }}
      </Lead>
      <div v-if="blok.cards.length" :class="[gridClasses, { 'lg:!mt-0': !blok.headline && !blok.lead }]" class="place-items-center">
        <StoryblokComponent
          v-for="card in blok.cards"
          :key="card._uid"
          :blok="card"
          :background-color="gridCardColor"
        />
      </div>
      <div v-if="blok.button.length" class="mt-12 flex justify-center">
        <Button
          v-for="button in blok.button"
          :key="button._uid"
          :button="button"
        />
      </div>
    </div>
  </section>
</template>
