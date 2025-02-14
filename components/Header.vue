<script setup>
const props = defineProps({
  logo: Object,
  autoNav: Boolean,
  autoNavFolder: String,
  nav: Object,
  buttons: Object,
  light: Boolean,
});

const folderStories = ref(null);

const getFolderStories = async () => {
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get('cdn/stories', {
    version: getVersion(),
    level: props.autoNavFolder ? 2 : 1,
    excluding_slugs: 'site-config,error-404',
    excluding_fields: 'body',
    starts_with: props.autoNavFolder,
    per_page: 5,
  });
  folderStories.value = !props.autoNavFolder
    ? data.stories.filter(
        story => story.parent_id === 0 || story.parent_id === null,
      )
    : data.stories;
};

getFolderStories();

watch(
  () => props.autoNavFolder,
  () => getFolderStories(),
);

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
          :class="logoScale"
        />
      </NuxtLink>
      <nav class="main-nav invisible ml-auto mr-12 hidden h-full lg:visible lg:block">
        <ul v-if="!autoNav" class="h-full">
          <li v-for="item in nav" :key="item._uid" class="h-full">
            <NavItem
              class="nav-item"
              :class="light ? 'text-dark' : 'text-white'"
              :item="item"
            />
          </li>
        </ul>
        <ul v-else>
          <li v-for="story in folderStories" :key="story.uuid">
            <NuxtLink
              :to="story.full_slug"
              class="nav-item cursor-pointer transition-colors"
              :class="light ? 'text-dark' : 'text-white'"
            >
              {{ story.name }}
            </NuxtLink>
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
    :auto-nav="autoNav"
    :folder-stories="folderStories"
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
