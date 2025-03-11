<script setup>
const props = defineProps({ blok: Object });

const optimizedImage = computed(() =>
  getOptimizedImage(props.blok.column_1_image, 800, 1000),
);
</script>

<template>
  <section
    v-editable="blok"
    class="page-section two-columns-section bg-white"
  >
    <div class="container grid gap-12 lg:min-h-[600px] lg:grid-cols-3">
      <div class="relative overflow-hidden rounded-xl lg:col-span-2" :class="`bg-${blok.column_1_background_color}`">
        <div class="relative z-10 grid h-full md:grid-cols-2">
          <div class="flex flex-col justify-between p-10">
            <div>
              <Headline v-if="blok.column_1_headline" size="small" :headline="blok.column_1_headline" />
              <div v-if="blok.column_1_text_1" class="prose flex grow">
                <StoryblokRichText :doc="blok.column_1_text_1" />
              </div>
            </div>
            <div>
              <div v-if="blok.column_1_text_2" class="prose">
                <StoryblokRichText :doc="blok.column_1_text_2" />
              </div>
              <div v-if="blok.column_1_button.length" class="mt-6">
                <Button
                  v-for="button in blok.column_1_button"
                  :key="button._uid"
                  :button="button"
                />
              </div>
            </div>
          </div>
          <div class="flex items-end justify-end pt-10">
            <img
              v-if="blok.column_1_image?.filename"
              :src="optimizedImage"
              :alt="blok.column_1_image?.alt"
              class="rounded-tl-xl"
            />
          </div>
        </div>
        <Decoration1 class="absolute bottom-0 left-0 z-0" :fill="blok.column_1_decoration_color" />
      </div>
      <div class="relative overflow-hidden rounded-xl" :class="`bg-${blok.column_2_background_color}`">
        <div class="relative z-10 flex h-full flex-col justify-between p-10">
          <Headline v-if="blok.column_2_headline" size="small" :headline="blok.column_2_headline" />
          <div>
            <div v-if="blok.column_2_text_1" class="prose">
              <StoryblokRichText :doc="blok.column_2_text_1" />
            </div>
            <div v-if="blok.column_2_button.length" class="mt-6">
              <Button
                v-for="button in blok.column_2_button"
                :key="button._uid"
                :button="button"
              />
            </div>
          </div>
        </div>
        <Decoration1 class="absolute bottom-0 left-0 z-0" :fill="blok.column_2_decoration_color" />
      </div>
    </div>
  </section>
</template>
