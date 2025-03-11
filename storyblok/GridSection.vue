<script setup>
const props = defineProps({ blok: Object });

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
      <div class="mb-12 grid lg:mb-0 lg:grid-cols-4 lg:gap-12">
        <div class="lg:col-span-3">
          <Headline v-if="blok.headline" :headline="blok.headline" />
          <Lead v-if="blok.lead">
            {{ blok.lead }}
          </Lead>
        </div>
        <div v-if="blok.button.length" class="shrink-0 lg:text-right">
          <Button
            v-for="button in blok.button"
            :key="button._uid"
            :button="button"
          />
        </div>
      </div>
      <div v-if="blok.cards.length" :class="[gridClasses, { 'lg:!mt-0': !blok.headline && !blok.lead }]">
        <StoryblokComponent
          v-for="card in blok.cards"
          :key="card._uid"
          :blok="card"
          :background-color="gridCardColor"
        />
      </div>
    </div>
  </section>
</template>
