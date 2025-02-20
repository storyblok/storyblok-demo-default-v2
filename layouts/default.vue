<script setup>
const defaultFontFamilies = {
  '--font-family-display': 'ABCMarfa, sans-serif',
  '--font-family-body': 'ABCMarfa, sans-serif',
};

const defaultColors = {
  '--primary': '#9beaaf',
  '--secondary': '#9987f0',
  '--light': '#f6f7f8',
  '--medium': '#DBDDE2',
  '--dark': '#1f1f1f',
};

const defaultBorderRadiuses = {
  '--rounded_sm': '4px',
  '--rounded_default': '6px',
  '--rounded_md': '8px',
  '--rounded_lg': '10px',
  '--rounded_xl': '15px',
  '--rounded_2xl': '20px',
  '--rounded_3xl': '25px',
  '--rounded_full': '9999px',
};

const siteConfig = await getSiteConfig();

const cssVariables = computed(() => {
  if (!siteConfig.value) {
    return {
      ...defaultFontFamilies,
      ...defaultColors,
      ...defaultBorderRadiuses,
    };
  }

  const theme = {
    ...defaultFontFamilies,
    ...defaultColors,
    ...defaultBorderRadiuses,
  };

  if (siteConfig.value.content.use_custom_fonts) {
    if (siteConfig.value.content.custom_font_display) {
      theme['--font-family-display']
        = siteConfig.value.content.custom_font_display;
    }
    if (siteConfig.value.content.custom_font_body) {
      theme['--font-family-body'] = siteConfig.value.content.custom_font_body;
    }
  }
  else {
    Object.assign(theme, defaultFontFamilies);
  }
  if (siteConfig.value.content.use_custom_colors) {
    theme['--primary'] = siteConfig.value.content.primary.color;
    theme['--secondary'] = siteConfig.value.content.secondary.color;
    theme['--light'] = siteConfig.value.content.light.color;
    theme['--medium'] = siteConfig.value.content.medium.color;
    theme['--dark'] = siteConfig.value.content.dark.color;
    if (siteConfig.value.content.colored_headlines) {
      theme['--headline-color'] = siteConfig.value.content.primary.color;
    }
    else {
      theme['--headline-color'] = siteConfig.value.content.dark.color;
    }
  }
  else {
    Object.assign(theme, defaultColors);
    if (siteConfig.value.content.colored_headlines) {
      theme['--headline-color'] = defaultColors['--primary'];
    }
    else {
      theme['--headline-color'] = defaultColors['--dark'];
    }
  }
  if (siteConfig.value.content.disable_rounded_corners) {
    for (const key in theme) {
      if (key.startsWith('--rounded_')) {
        theme[key] = 0;
      }
    }
  }
  else {
    Object.assign(theme, defaultBorderRadiuses);
  }
  return theme;
});

const isInEditor = await inEditor();

const viewingSiteConfig = useState('viewingSiteConfig');
const { customParent } = useRuntimeConfig().public;

onMounted(() => {
  useStoryblokBridge(
    siteConfig.value.id,
    evStory => (siteConfig.value = evStory),
    {
      preventClicks: true,
      customParent,
    },
  );
});
</script>

<template>
  <!-- Apply classes using useHead instead -->
  <main :style="cssVariables" class="font-body" :class="{ 'in-editor': isInEditor }">
    <Header
      :logo="siteConfig.content.header_logo"
      :nav="siteConfig.content.header_nav"
      :buttons="siteConfig.content.header_buttons"
      :light="siteConfig.content.header_light"
    />
    <div
      v-if="viewingSiteConfig && siteConfig.content.use_custom_colors"
      class="container py-12"
    >
      <Headline>Color Preview</Headline>
      <div
        class="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        <ColorPreview color="primary" />
        <ColorPreview color="secondary" />
        <ColorPreview color="light" />
        <ColorPreview color="medium" />
        <ColorPreview color="dark" />
      </div>
    </div>
    <div
      v-if="viewingSiteConfig && siteConfig.content.use_custom_fonts"
      class="container py-12 text-dark"
    >
      <Headline>Typography Preview</Headline>
      <Subheadline class="mb-4">Lorem ipsum dolor sit amet</Subheadline>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <slot></slot>
    <Footer
      :headline="siteConfig.content.footer_headline"
      :text-color="siteConfig.content.footer_text_color"
      :background-color="siteConfig.content.footer_background_color"
      :logo="siteConfig.content.footer_logo"
      :about="siteConfig.content.footer_about"
      :navs="{
        nav_1_headline: siteConfig.content.footer_nav_1_headline,
        nav_2_headline: siteConfig.content.footer_nav_2_headline,
        nav_3_headline: siteConfig.content.footer_nav_3_headline,
        nav_1: siteConfig.content.footer_nav_1,
        nav_2: siteConfig.content.footer_nav_2,
        nav_3: siteConfig.content.footer_nav_3,
      }"
      :x="siteConfig.content.x"
      :instagram="siteConfig.content.instagram"
      :youtube="siteConfig.content.youtube"
      :facebook="siteConfig.content.facebook"
    />
  </main>
</template>

<style>
/* body {
  @apply pt-32;
}
 */

html {
  --nav-background-color: #ffffff;
}
body > div > main {
  @apply text-dark;
}

main.in-editor a,
main.in-editor button {
  @apply pointer-events-none;
}

section.page-section {
  @apply py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32;
}

section.page-section.no-padding {
  @apply py-0;
}

section.page-section.bg-white + section.page-section.bg-white,
section.page-section.bg-light + section.page-section.bg-light {
  @apply pt-0;
}

section.hero-section + section.text-section.overlap-preceding-hero {
  @apply -mb-16 py-0 sm:-mb-20 md:-mb-24 lg:-mb-28;
}

section.hero-section + section.text-section.overlap-preceding-hero > .container {
  @apply -translate-y-24;
}

section.banner-section.padding:first-child {
  @apply pt-0;
}

.overlay-15::before {
  content: '';
  @apply absolute left-0 top-0 z-10 h-full w-full;
  background-color: rgba(0, 0, 0, 0.15);
  background-blend-mode: overlay;
}

.overlay-30::before,
.overlay-pattern-1::before {
  content: '';
  @apply absolute left-0 top-0 z-10 h-full w-full;
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: overlay;
}

.overlay-pattern-1::after {
  content: '';
  @apply absolute left-0 top-0 z-20 h-full w-full;
  background-image: url('~/assets/images/plus-pattern.svg');
  background-repeat: repeat;
}
</style>
