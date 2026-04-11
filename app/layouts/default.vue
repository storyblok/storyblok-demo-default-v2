<script setup lang="ts">
const siteConfig = await getSiteConfig()

const cssVariables = computed(() => {
  const theme: Record<string, string> = {}

  if (siteConfig.value) {
    const content = siteConfig.value.content

    if (content.use_custom_fonts) {
      if (content.custom_font_display) theme['--font-family-display'] = content.custom_font_display
      if (content.custom_font_body) theme['--font-family-body'] = content.custom_font_body
    }

    if (content.use_custom_colors) {
      theme['--color-primary-highlight'] = content.primary_highlight_color?.color
      theme['--color-highlight-1'] = content.highlight_1_color?.color
      theme['--color-highlight-2'] = content.highlight_2_color?.color
      theme['--color-highlight-3'] = content.highlight_3_color?.color
      theme['--color-primary-background'] = content.primary_background_color?.color
      theme['--color-background-1'] = content.background_1_color?.color
      theme['--color-background-2'] = content.background_2_color?.color
      theme['--color-background-3'] = content.background_3_color?.color
      theme['--color-background-4'] = content.background_4_color?.color
      theme['--color-background-5'] = content.background_5_color?.color
      theme['--color-background-6'] = content.background_6_color?.color
      theme['--color-background-7'] = content.background_7_color?.color
      theme['--color-background-8'] = content.background_8_color?.color
      theme['--color-background-9'] = content.background_9_color?.color
      theme['--color-background-10'] = content.background_10_color?.color
      theme['--color-primary-dark'] = content.primary_dark_color?.color
      theme['--headline-color'] = content.colored_headlines
        ? content.primary_highlight_color?.color
        : content.primary_dark_color?.color
    }

    if (content.disable_rounded_corners) {
      theme['--radius-sm'] = '0'
      theme['--radius-default'] = '0'
      theme['--radius-md'] = '0'
      theme['--radius-lg'] = '0'
      theme['--radius-xl'] = '0'
      theme['--radius-2xl'] = '0'
      theme['--radius-3xl'] = '0'
    }
  }

  if (!Object.keys(theme).length) return ''

  return `:root {\n${Object.entries(theme)
    .map(([k, v]) => `${k}: ${v};`)
    .join('\n')}\n}`
})

const viewingSiteConfig = useState('viewingSiteConfig')
const { customParent } = useRuntimeConfig().public

onMounted(() => {
  useStoryblokBridge(siteConfig.value.id, (evStory) => (siteConfig.value = evStory), {
    preventClicks: true,
    customParent,
  })
})

useStyleTag(cssVariables)

useHead(() => ({
  htmlAttrs: { lang: 'en' },
}))

const mobileNavOpen = ref(false)

const route = useRoute()
watch(route, () => {
  mobileNavOpen.value = false
})
</script>

<template>
  <main>
    <Header
      :logo="siteConfig.content.header_logo"
      :nav="siteConfig.content.header_nav"
      :buttons="siteConfig.content.header_buttons"
      :light="siteConfig.content.header_light"
      @toggle-mobile-nav="mobileNavOpen = !mobileNavOpen"
    />
    <MobileNav :mobile-nav="siteConfig.content.header_nav" :mobile-nav-open="mobileNavOpen" />
    <div v-if="viewingSiteConfig && siteConfig.content.use_custom_colors" class="container py-12">
      <h2 class="mb-8 text-4xl font-black text-[--headline-color]">Color Preview</h2>
      <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
        <ColorPreview color="background-10" />
        <ColorPreview color="primary-dark" />
      </div>
    </div>
    <div
      v-if="viewingSiteConfig && siteConfig.content.use_custom_fonts"
      class="container py-12 text-primary-dark"
    >
      <h2 class="mb-4 text-4xl font-black text-[--headline-color]">Typography Preview</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <slot />
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
@reference "~/assets/css/tailwind.css";

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
