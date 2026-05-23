<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
// @ts-expect-error - no types for CSS imports
import 'swiper/css'
// @ts-expect-error - no types for CSS imports
import 'swiper/css/navigation'

import type { ISbStoryData } from '@storyblok/js'
import type { BannerReference, Banner } from '#storyblok'

const props = defineProps<{ blok: BannerReference }>()

const banners = computed(() => (props.blok.banners ?? []) as ISbStoryData<Banner>[])

const modules = [Navigation]
</script>

<template>
  <Swiper
    v-editable="blok"
    :slides-per-view="1"
    :space-between="50"
    :navigation="true"
    :auto-height="true"
    :modules="modules"
    class="swiper"
  >
    <SwiperSlide v-for="(banner, index) in banners" :key="banner.uuid">
      <Banner v-if="banner.content" :index="index" :blok="banner.content" :referenced="true" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.swiper {
  --swiper-theme-color: var(--medium);
}
</style>
