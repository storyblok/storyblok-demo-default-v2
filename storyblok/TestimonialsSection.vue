<script setup>
defineProps({ blok: Object });
const gridClasses = getGridClasses();
</script>

<template>
  <section
    v-editable="blok"
    class="page-section testimonials-section relative bg-white"
  >
    <div class="container ">
      <div class="text-center">
        <Headline v-if="blok.headline" :headline="blok.headline" />
        <Lead v-if="blok.lead">
          {{ blok.lead }}
        </Lead>
      </div>
      <ul v-if="blok.testimonials.length" :class="gridClasses">
        <li v-for="testimonial in blok.testimonials" :key="testimonial._uid" class="max-w-sm rounded-lg bg-primary-background p-6 xl:max-w-none xl:p-12">
          <blockquote class="text-lg">{{ testimonial.content.quote }}</blockquote>
          <div class="mt-8 flex items-center gap-4">
            <div class="aspect-square size-16 shrink-0 overflow-hidden rounded-full bg-white"><img v-if="testimonial.content.photo?.filename" :src="getOptimizedImage(testimonial.content.photo, 128, 128)" :alt="testimonial.content.photo?.alt" width="64" height="64" /></div>
            <div>
              <p class="font-black">{{ testimonial.content.name }}</p>
              <p>{{ testimonial.content.role }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
