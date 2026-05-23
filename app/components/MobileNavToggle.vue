<script setup lang="ts">
defineProps<{ color: string }>()

const active = ref(false)

const toggle = () => {
  active.value = !active.value
}

const route = useRoute()
watch(route, () => {
  active.value = false
})
</script>

<template>
  <button class="focus-ring cursor-pointer lg:invisible lg:hidden" :class="{ active }" @click="toggle">
    <span class="sr-only">Toggle navigation</span>
    <div class="bar1 my-1 h-0.5 w-7 transition-all" :class="color" />
    <div class="bar2 my-1 h-0.5 w-7 transition-all" :class="color" />
    <div class="bar3 my-1 h-0.5 w-7 transition-all" :class="color" />
  </button>
</template>

<style scoped>
@reference "~/assets/css/tailwind.css";

button.active .bar1 {
  @apply translate-y-0.75 rotate-45;
}

button.active .bar2 {
  @apply hidden;
}

button.active .bar3 {
  @apply -translate-y-0.75 -rotate-45;
}
</style>
