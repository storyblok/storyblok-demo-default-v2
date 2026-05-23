<script setup lang="ts">
import type { SiteConfig } from '#storyblok'

const props = defineProps<{ siteConfig: SiteConfig }>()

const textColor = computed(() => {
  return props.siteConfig.footer_light ? 'text-primary-dark' : 'text-white'
})

const backgroundColor = computed(() => {
  return props.siteConfig.footer_light ? 'bg-primary-background' : 'bg-primary-dark'
})
</script>

<template>
  <footer class="relative w-full" :class="backgroundColor">
    <div class="container grid gap-12 pt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      <div class="flex flex-col items-start sm:col-span-2 md:col-span-3 lg:col-span-2">
        <Headline
          v-if="siteConfig.footer_headline"
          :headline="siteConfig.footer_headline"
          size="small"
          :index="1"
          :color="textColor"
        />
      </div>
    </div>
    <div class="container grid gap-12 pb-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      <div class="flex flex-col items-start sm:col-span-2 md:col-span-3 lg:col-span-2">
        <div>
          <div
            v-if="siteConfig.footer_about"
            class="prose prose-lg mb-8 text-sm lg:text-base"
            :class="textColor"
          >
            <StoryblokRichText :doc="siteConfig.footer_about" />
          </div>
          <SocialIcons
            :x="siteConfig.x"
            :instagram="siteConfig.instagram"
            :youtube="siteConfig.youtube"
            :facebook="siteConfig.facebook"
            :text-color="textColor"
          />
        </div>
      </div>
      <FooterNav
        v-if="siteConfig.footer_nav_1?.length"
        :nav="siteConfig.footer_nav_1"
        :headline="siteConfig.footer_nav_1_headline"
        :text-color="textColor"
      />
      <FooterNav
        v-if="siteConfig.footer_nav_2?.length"
        :nav="siteConfig.footer_nav_2"
        :headline="siteConfig.footer_nav_2_headline"
        :text-color="textColor"
      />
      <FooterNav
        v-if="siteConfig.footer_nav_3?.length"
        :nav="siteConfig.footer_nav_3"
        :headline="siteConfig.footer_nav_3_headline"
        :text-color="textColor"
      />
    </div>
    <div v-if="siteConfig.footer_decoration" class="container relative z-10">
      <div class="h-px w-full bg-gray-500" />
      <img
        src="~/assets/images/made-with-love.svg"
        width="120"
        class="pointer-events-none mx-auto block py-9"
        alt="Made with love by the Storyblok team!"
      />
    </div>
    <Decoration3
      v-if="siteConfig.footer_decoration"
      fill="highlight-1"
      class="pointer-events-none absolute bottom-0 right-0 z-0"
    />
  </footer>
</template>
