<script setup>
defineProps({
  logo: Object,
  nav: Object,
  buttons: Object,
  light: Boolean,
});

const mobileNavOpen = ref(false);

const toggleMobileNav = () => {
  mobileNavOpen.value = !mobileNavOpen.value;
};

const route = useRoute();
watch(route, () => {
  mobileNavOpen.value = false;
});
</script>

<template>
  <header
    class="fixed left-0 top-0 z-[99] h-32 w-full border-b border-dark transition-all duration-300"
    :class="{ 'dark-bg': !light }"
  >
    <div
      class="mx-auto flex size-full max-w-screen-2xl items-center justify-between px-4 lg:justify-start lg:px-8"
    >
      <NuxtLink to="/" class="flex shrink-0">
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
              :class="light ? 'text-dark' : 'text-white'"
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
        :color="light ? 'bg-dark' : 'bg-light'"
        @click="toggleMobileNav"
      />
    </div>
  </header>
  <!-- <MobileNav
    :mobile-nav-open="mobileNavOpen"
    :header-nav="nav"
  /> -->
</template>

<style scoped>
header {
  @apply bg-[--nav-background-color];
}
/* header.bg-dark {
  @apply bg-dark;
} */

header nav.main-nav a.router-link-exact-active::after {
  @apply content-[''] absolute bottom-0 left-0 h-[5px] w-full bg-dark;
}

header nav.main-nav ul {
  @apply flex space-x-4 xl:space-x-8;
}

header nav.main-nav ul li .nav-item {
  @apply relative text-sm xl:text-base;
}
</style>
