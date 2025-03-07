<script setup>
const props = defineProps({
  headline: Array,
  footerLight: Boolean,
  decoration: Boolean,
  logo: Object,
  navs: Object,
  about: Object,
  x: Object,
  instagram: Object,
  youtube: Object,
  facebook: Object,
});

const textColor = computed(() => {
  return props.footerLight ? 'text-primary-dark' : 'text-white';
});

const backgroundColor = computed(() => {
  return props.footerLight ? 'bg-primary-background' : 'bg-primary-dark';
});
</script>

<template>
  <footer class="relative w-full" :class="backgroundColor">
    <div class="container grid gap-12 pt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      <div class="flex flex-col items-start sm:col-span-2 md:col-span-3 lg:col-span-2">
        <Headline v-if="headline" size="small" :color="textColor" :headline="headline" />
      </div>
    </div>
    <div
      class="container grid gap-12 pb-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
    >
      <div class="flex flex-col items-start sm:col-span-2 md:col-span-3 lg:col-span-2">
        <div>
          <div v-if="about" class="prose prose-lg mb-8 text-sm lg:text-base" :class="textColor">
            <StoryblokRichText :doc="about" />
          </div>
          <SocialIcons
            :x="x"
            :instagram="instagram"
            :youtube="youtube"
            :facebook="facebook"
            :text-color="textColor"
          />
        </div>
      </div>
      <div v-for="index in 3" :key="index">
        <h3
          class="mb-5 font-display text-xl font-semibold xl:text-2xl"
          :class="textColor"
        >
          {{ navs[`nav_${index}_headline`] }}
        </h3>
        <nav>
          <ul class="flex flex-col space-y-3 text-lg">
            <li v-for="item in navs[`nav_${index}`]" :key="item._uid">
              <NavItem
                :class="textColor"
                :item="item"
                :reduced-font-weight="true"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div v-if="decoration" class="container">
      <div
        class="h-px w-full bg-gray-500"
      ></div>
      <img
        src="~/assets/images/made-with-love.svg"
        width="120"
        class="pointer-events-none mx-auto block py-9"
        alt="Made with love by the Storyblok team!"
      />
    </div>
    <Decoration3 v-if="decoration" fill="highlight-1" class="pointer-events-none absolute bottom-0 right-0" />
  </footer>
</template>
