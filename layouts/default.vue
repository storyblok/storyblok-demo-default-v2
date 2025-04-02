<script setup>
const defaultFontFamilies = {
  '--font-family-display': 'ABCMarfa, sans-serif',
  '--font-family-body': 'ABCMarfa, sans-serif',
};

const defaultColors = {
  '--primary-highlight': '#8d60ff',
  '--highlight-1': '#80efac',
  '--highlight-2': '#786b2b',
  '--highlight-3': '#d4ff92',
  '--primary-background': '#F5F5F7',
  '--background-1': '#F4F2E9',
  '--background-2': '#e4ddb9',
  '--background-3': '#D9EEFF',
  '--background-4': '#D7E4F2',
  '--background-5': '#D9D4FC',
  '--background-6': '#F2F1D7',
  '--background-7': '#E0F0D2',
  '--background-8': '#FFE7D3',
  '--background-9': '#FFD5D3',
  '--background-10': '#D2FEC9',
  '--primary-dark': '#1F1F1F',
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
    theme['--primary-highlight'] = siteConfig.value.content.primary_highlight_color?.color;
    theme['--highlight-1'] = siteConfig.value.content.highlight_1_color?.color;
    theme['--highlight-2'] = siteConfig.value.content.highlight_2_color?.color;
    theme['--highlight-3'] = siteConfig.value.content.highlight_3_color?.color;
    theme['--primary-background'] = siteConfig.value.content.primary_background_color?.color;
    theme['--background-1'] = siteConfig.value.content.background_1_color?.color;
    theme['--background-2'] = siteConfig.value.content.background_2_color?.color;
    theme['--background-3'] = siteConfig.value.content.background_3_color?.color;
    theme['--background-4'] = siteConfig.value.content.background_4_color?.color;
    theme['--background-5'] = siteConfig.value.content.background_5_color?.color;
    theme['--background-6'] = siteConfig.value.content.background_6_color?.color;
    theme['--background-7'] = siteConfig.value.content.background_7_color?.color;
    theme['--background-8'] = siteConfig.value.content.background_8_color?.color;
    theme['--background-9'] = siteConfig.value.content.background_9_color?.color;
    theme['--primary-dark'] = siteConfig.value.content.primary_dark_color?.color;
    if (siteConfig.value.content.colored_headlines) {
      theme['--headline-color'] = siteConfig.value.content.primary_highlight_color?.color;
    }
    else {
      theme['--headline-color'] = siteConfig.value.content.primary_dark_color?.color;
    }
  }
  else {
    // TODO: enable colored headlines without changing colors
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
  const formattedVariables = Object.entries(theme)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n');

  return `:root {\n${formattedVariables}\n}`;
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

const headConfig = computed(() => ({
  style: [
    {
      children: cssVariables.value,
    },
  ],
}));

useHead(headConfig);

const mobileNavOpen = ref(false);

const route = useRoute();
watch(route, () => {
  mobileNavOpen.value = false;
});
</script>

<template>
  <main :class="{ 'in-editor': isInEditor }">
    <Header
      :logo="siteConfig.content.header_logo"
      :nav="siteConfig.content.header_nav"
      :buttons="siteConfig.content.header_buttons"
      :light="siteConfig.content.header_light"
      @toggle-mobile-nav="mobileNavOpen = !mobileNavOpen"
    />
    <MobileNav :mobile-nav="siteConfig.content.header_nav" :mobile-nav-open="mobileNavOpen" />
    <div
      v-if="viewingSiteConfig && siteConfig.content.use_custom_colors"
      class="container py-12"
    >
      <h2 class="mb-8 text-4xl font-black text-[--headline-color]">Color Preview</h2>
      <div
        class="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        <ColorPreview color="primary-highlight" />
        <ColorPreview color="highlight-1" />
        <ColorPreview color="highlight-2" />
        <ColorPreview color="highlight-3" />
        <ColorPreview color="primary-background" />
        <ColorPreview color="background-1" />
        <ColorPreview color="background-2" />
        <ColorPreview color="background-3" />
        <ColorPreview color="background-4" />
        <ColorPreview color="background-5" />
        <ColorPreview color="background-6" />
        <ColorPreview color="background-7" />
        <ColorPreview color="background-8" />
        <ColorPreview color="background-9" />
        <ColorPreview color="primary-dark" />
      </div>
    </div>
    <div
      v-if="viewingSiteConfig && siteConfig.content.use_custom_fonts"
      class="container py-12 text-primary-dark"
    >
      <h2 class="mb-4 text-4xl font-black text-[--headline-color]">Typography Preview</h2>
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
      :footer-light="siteConfig.content.footer_light"
      :decoration="siteConfig.content.footer_decoration"
      :logo="siteConfig.content.footer_logo"
      :about="siteConfig.content.footer_about"
      :nav-1-headline="siteConfig.content.footer_nav_1_headline"
      :nav-2-headline="siteConfig.content.footer_nav_2_headline"
      :nav-3-headline="siteConfig.content.footer_nav_3_headline"
      :nav-1="siteConfig.content.footer_nav_1"
      :nav-2="siteConfig.content.footer_nav_2"
      :nav-3="siteConfig.content.footer_nav_3"
      :x="siteConfig.content.x"
      :instagram="siteConfig.content.instagram"
      :youtube="siteConfig.content.youtube"
      :facebook="siteConfig.content.facebook"
    />
  </main>
</template>

<style>
:root {
  --nav-background-color: #ffffff;
}

body {
  @apply pt-32 text-primary-dark font-body;
}

section.page-section {
  @apply py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32;
}

section.page-section.bg-white + section.page-section.bg-white,
section.page-section.bg-primary-background + section.page-section.bg-primary-background {
  @apply pt-0;
}
section.page-section.contact-form-section:last-child {
  @media not all and screen(lg) {
    @apply pb-0;
  }
}
</style>
