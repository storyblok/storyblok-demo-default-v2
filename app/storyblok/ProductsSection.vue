<script setup lang="ts">
import type { ProductsSection } from '#storyblok'

const props = defineProps<{ blok: ProductsSection }>()
const plugin = props.blok.plugin as { items: { id: string }[] }

const gridClasses = computed(() => getGridClasses())
</script>

<template>
  <section v-editable="blok" class="page-section products-section bg-primary-background">
    <div class="container">
      <Headline v-if="blok.headline" :headline="blok.headline" :index="1" class="text-center" />
      <Lead v-if="blok.lead" class="text-center">
        {{ blok.lead }}
      </Lead>
      <div
        v-if="plugin.items.length"
        :class="[gridClasses, { 'lg:mt-0!': !blok.headline && !blok.lead }]"
        class="place-items-center"
      >
        <Product v-for="product in plugin.items" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>
