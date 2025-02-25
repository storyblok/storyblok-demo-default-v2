<script setup>
const props = defineProps({
  headline: String,
  textColor: String,
  backgroundColor: String,
  logo: Object,
  navs: Object,
  about: Object,
  x: Object,
  instagram: Object,
  youtube: Object,
  facebook: Object,
});

const textColor = computed(() => {
  return props.textColor === 'light' ? 'text-white' : 'text-dark';
});

const backgroundColor = computed(() => {
  return `bg-${props.backgroundColor}`;
});
</script>

<template>
  <footer class="relative w-full" :class="backgroundColor">
    <div class="container grid gap-12 pt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      <div class="flex flex-col items-center sm:col-span-2 md:col-span-3 lg:col-span-2">
        <!-- <Headline v-if="headline" size="small" :color="textColor" :headline="headline" /> -->
      </div>
    </div>
    <div
      class="container grid gap-12 pb-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
    >
      <div class="flex flex-col items-center sm:col-span-2 md:col-span-3 lg:col-span-2">
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
          class="mb-5 font-display text-xl font-medium xl:text-2xl"
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
    <div class="container">
      <div
        class="h-px w-full bg-medium"
      ></div>
      <img
        src="~/assets/images/made-with-love.svg"
        width="120"
        class="pointer-events-none mx-auto block py-9"
        alt="Made with love by the Storyblok team!"
      />
    </div>
    <svg class="pointer-events-none absolute bottom-0 right-0" xmlns="http://www.w3.org/2000/svg" width="257" height="106" viewBox="0 0 257 106" fill="none">
      <path d="M281.881 182.686L229.412 194.068C227.867 194.404 226.612 196.097 226.96 197.377L239.301 241.06C245.829 263.014 211.96 288.53 194.69 274.67L160.982 247.084C160.009 246.275 158.083 246.978 157.221 248.454L127.693 298.849C112.697 324.177 76.0652 324.177 79.8763 298.849L87.7677 248.454C88.0039 246.978 86.5995 246.275 85.0254 247.084L30.8331 274.67C3.27306 288.535 -11.6482 263.014 11.1811 241.06L55.9574 197.377C57.2582 196.097 57.2582 194.4 55.9616 194.068L11.9475 182.686C-10.0202 176.965 5.51415 140.876 31.9723 135.159L84.3129 123.777C85.8415 123.442 87.1878 121.748 86.9392 120.468L78.9732 76.785C75.2947 54.831 109.164 29.3147 123.584 43.175L152.917 70.7607C153.791 71.5705 155.626 70.8671 156.504 69.3907L186.161 18.9961C200.912 -6.33204 233.277 -6.33204 229.222 18.9961L221.459 69.3907C221.239 70.8671 222.552 71.5705 224.027 70.7607L273.845 43.175C298.555 29.3106 313.476 54.831 293.497 76.785L253.095 120.468C251.898 121.748 251.985 123.446 253.265 123.777L297.155 135.159C319.367 140.88 308.103 176.969 281.886 182.686H281.881Z" fill="#D4FF92" />
    </svg>
  </footer>
</template>
