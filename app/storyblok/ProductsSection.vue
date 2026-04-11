<script setup>
defineProps({ blok: Object })

const gridClasses = computed(() => getGridClasses())
</script>

<template>
  <section v-editable="blok" class="page-section products-section bg-primary-background">
    <div class="container">
      <Headline v-if="blok.headline" :headline="blok.headline" :index="blok.index" class="text-center" />
      <Lead v-if="blok.lead" class="text-center">
        {{ blok.lead }}
      </Lead>
      <div
        v-if="blok.plugin.items.length"
        :class="[gridClasses, { 'lg:mt-0!': !blok.headline && !blok.lead }]"
        class="place-items-center"
      >
        <Product v-for="product in blok.plugin.items" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>
