<script setup lang="ts">
const props = defineProps<{ product: { id: string } }>()

interface Product {
  id: number
  sku: string
  name: string
  slug: string
  type: string
  image: string
  description: string
  price: number
  currency: string
  available: boolean
}

// In a real-world scenario, you would fetch product details from a store API.
const { data: fetchedProduct, error } = await useFetch<Product>(`/api/products/${props.product.id}`)
</script>

<template>
  <div
    class="relative flex size-full max-w-sm grow flex-col overflow-hidden rounded-lg bg-white lg:max-w-none"
  >
    <div v-if="fetchedProduct">
      <img
        v-if="fetchedProduct.image"
        :src="fetchedProduct.image"
        :alt="fetchedProduct.name"
        class="aspect-square object-cover"
      />
      <div class="p-6">
        <h3 v-if="fetchedProduct.name" class="mb-3 font-display text-xl font-black">
          {{ fetchedProduct.name }}
        </h3>
        <p v-if="fetchedProduct.description" class="leading-relaxed">{{ fetchedProduct.description }}</p>
        <div class="mt-4 text-lg font-semibold">
          <span v-if="fetchedProduct.available && fetchedProduct.price && fetchedProduct.currency"
            >{{ fetchedProduct.price }} {{ fetchedProduct.currency }}</span
          >
          <span v-else class="text-pink-700">Sold out</span>
        </div>
      </div>
    </div>
    <div v-else-if="error">Product not found.</div>
  </div>
</template>
