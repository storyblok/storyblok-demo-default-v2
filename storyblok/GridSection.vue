<script setup>
const props = defineProps({ blok: Object });

const gridCardColor = computed(() => {
  return props.blok.background_color === 'light' ? 'bg-white' : 'bg-light';
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
      <div class="grid grid-cols-2 md:grid-cols-4">
        <div class="md:col-span-3">
          <Headline v-if="blok.headline" :headline="blok.headline" />
          <Lead v-if="blok.lead">
            {{ blok.lead }}
          </Lead>
        </div>
        <div v-if="blok.button.length" class="text-right">
          <Button
            v-for="button in blok.button"
            :key="button._uid"
            :button="button"
          />
        </div>
      </div>
      <div :class="[gridClasses, { 'md:!mt-0': !blok.headline && !blok.lead }]">
        <StoryblokComponent
          v-for="card in blok.cards"
          :key="card._uid"
          :card="card"
          :background-color="gridCardColor"
          :blok="card"
        />
      </div>
    </div>
  </section>
</template>
