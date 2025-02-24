<script setup>
const props = defineProps({ blok: Object });

const optimizedImage = computed(() =>
  getOptimizedImage(props.blok.column_1_image, 800, 1000),
);
</script>

<template>
  <!-- <pre>{{ blok }}</pre> -->
  <section
    v-editable="blok"
    class="page-section two-columns-section"
    :class="`bg-${blok.background_color}`"
    :style="[`--column-1-background-color: ${blok.column_1_background_color.value};`, `--column-2-background-color: ${blok.column_2_background_color.value}`]"
  >
    <div class="container grid min-h-[600px] grid-cols-3 gap-12">
      <div class="relative col-span-2 overflow-hidden rounded-xl bg-[--column-1-background-color]">
        <div class="relative z-10 grid h-full grid-cols-2">
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
          <div class="flex items-end justify-end ">
            <img
              v-if="blok.column_1_image?.filename"
              :src="optimizedImage"
              :alt="blok.column_1_image?.alt"
              class="w-10/12 rounded-tl-xl"
            />
          </div>
        </div>
        <Decoration1 class="absolute bottom-0 left-0 z-0" :fill="blok.column_1_decoration_color.value" />
      </div>
      <div class="relative overflow-hidden rounded-xl bg-[--column-2-background-color]">
        <div class="relative z-10 flex h-full flex-col justify-between p-10">
          <Headline v-if="blok.column_2_headline" size="small" :headline="blok.column_2_headline" />
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
        <Decoration1 class="absolute bottom-0 left-0 z-0" :fill="blok.column_2_decoration_color.value" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* section .container div:first-child {
  @apply bg-[--column-1background-color];
} */
</style>
