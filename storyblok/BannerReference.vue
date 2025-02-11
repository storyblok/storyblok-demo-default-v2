<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

defineProps({ blok: Object });

const modules = [Navigation];
</script>

<template>
  <section
    v-editable="blok"
    class="page-section banner-reference-section bg-white"
  >
    <Swiper
      :slides-per-view="1"
      :space-between="50"
      :navigation="true"
      :auto-height="true"
      :modules="modules"
      class="swiper"
    >
      <SwiperSlide v-for="banner in blok.banners" :key="banner.uuid">
        <Banner
          v-if="banner.content"
          :blok="banner.content"
          :referenced="true"
        />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
.swiper {
  --swiper-theme-color: var(--medium);
}
</style>
