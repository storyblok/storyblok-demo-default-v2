<script setup>
defineProps({
  mobileNav: Object,
  mobileNavOpen: Boolean,
});
</script>

<template>
  <Transition name="slide">
    <nav
      v-if="mobileNavOpen"
      class="bg-opacity-/80 fixed top-0 z-[99] flex h-screen w-[calc(100%-120px)] min-w-[240px] max-w-[400px] flex-col justify-center bg-white p-8 shadow-lg backdrop-blur-lg"
    >
      <h2 class="mb-4 font-display text-2xl font-black">
        Navigation
      </h2>
      <ul class="flex flex-col space-y-4 text-lg">
        <li v-for="item in mobileNav" :key="item._uid">
          <NavItem :item="item" />
        </li>
      </ul>
    </nav>
  </Transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s cubic-bezier(0.1, 0.76, 0.58, 0.98);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
