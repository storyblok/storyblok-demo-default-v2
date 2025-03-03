<script setup>
defineProps({ blok: Object });
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
      <ul v-if="blok.testimonials.length" class="mt-12 grid gap-12 xl:grid-cols-3">
        <!-- {{ blok.testimonials }} -->
        <li v-for="testimonial in blok.testimonials" :key="testimonial._uid" class="max-w-sm rounded-lg bg-light p-12 xl:max-w-none">
          <blockquote class="text-lg">{{ testimonial.content.quote }}</blockquote>
          <div class="mt-8 flex items-center gap-4">
            <div class="size-16 overflow-hidden rounded-full bg-white"><img v-if="testimonial.content.photo?.filename" :src="getOptimizedImage(testimonial.content.photo, 64, 64)" :alt="testimonial.content.photo?.alt" width="60" height="60" /></div>
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
