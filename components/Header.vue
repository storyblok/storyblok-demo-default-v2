<script setup>
defineProps({
  logo: Object,
  nav: Object,
  buttons: Object,
  light: Boolean,
});

defineEmits(['toggleMobileNav']);

const headerScrollClass = ref('');

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      headerScrollClass.value = 'scroll';
    }
    else {
      headerScrollClass.value = '';
    }
  });
});
</script>

<template>
  <header
    class="fixed left-0 top-0 z-[99] h-32 w-full border-b border-primary-dark transition-all duration-300"
    :class="[headerScrollClass, { 'bg-primary-dark': !light }]"
  >
    <div
      class="mx-auto flex size-full max-w-screen-2xl items-center justify-between px-4 lg:justify-start lg:px-8"
    >
      <NuxtLink v-if="logo?.filename" to="/" class="flex shrink-0" aria-label="Return to homepage">
        <img
          :src="logo.filename"
          :alt="logo.alt"
          class="pointer-events-none max-h-[80px] w-full max-w-[180px] origin-left object-contain transition-transform duration-700 xl:max-w-[250px]"
        />
      </NuxtLink>
      <nav class="main-nav invisible ml-auto mr-12 hidden h-full lg:visible lg:block">
        <ul class="h-full">
          <li v-for="item in nav" :key="item._uid" class="h-full">
            <NavItem
              class="nav-item"
              :class="light ? 'text-primary-dark' : 'text-white'"
              :item="item"
            />
          </li>
        </ul>
      </nav>
      <nav
        class="invisible ml-auto hidden md:visible md:mr-8 md:block lg:mx-0"
      >
        <ul class="flex items-center space-x-4 xl:space-x-8">
          <li v-for="button in buttons" :key="button._uid">
            <Button :button="button" />
          </li>
        </ul>
      </nav>
      <MobileNavToggle
        :color="light ? 'bg-primary-dark' : 'bg-primary-background'"
        @click="$emit('toggleMobileNav')"
      />
    </div>
  </header>
</template>

<style scoped>
header:not(.bg-primary-dark) {
  @apply bg-[--nav-background-color];
}
header.scroll:not(.bg-primary-dark) {
  @apply bg-white;
}

header nav.main-nav a.router-link-exact-active::after {
  @apply content-[''] absolute bottom-0 left-0 h-[5px] w-full bg-primary-dark;
}

header nav.main-nav ul {
  @apply flex space-x-4 xl:space-x-8;
}

header nav.main-nav ul li .nav-item {
  @apply relative text-sm xl:text-base;
}
</style>
