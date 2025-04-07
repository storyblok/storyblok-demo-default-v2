<script setup>
const props = defineProps({ blok: Object, index: Number });

const optimizedImage = computed(() => getOptimizedImage(props.blok?.image, 1200));

const showMessage = ref(false);

const submit = () => {
  showMessage.value = true;
  setTimeout(() => {
    showMessage.value = false;
  }, 4000);
};
</script>

<template>
  <section
    v-editable="blok"
    class="page-section contact-form-section relative"
  >
    <div class="container relative z-10 grid items-center gap-12 lg:min-h-[600px] lg:grid-cols-2 lg:gap-32">
      <div class="relative">
        <Headline v-if="blok.headline" :index="index" :headline="blok.headline" />
        <div
          v-if="blok.text"
          class="prose prose-lg mb-6"
        >
          <StoryblokRichText :doc="blok.text" />
        </div>
        <form action="" class="flex flex-col gap-6">
          <div class="grid grid-cols-2 gap-8">
            <div>
              <label for="name" class="mb-2 block font-semibold">Full name</label>
              <input
                id="name"
                name="name"
                type="name"
                placeholder="Your name"
                class="w-full rounded-lg border border-gray-300 px-6 py-4 text-primary-dark transition-all focus:outline-none"
                required
              />
            </div>
            <div>
              <label for="email" class="mb-2 block font-semibold">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="enjoy@storyblok.com"
                class="w-full rounded-lg border border-gray-300 px-6 py-4 text-primary-dark transition-all focus:outline-none"
                required
              />
            </div>
            <div class="col-span-2">
              <label for="message" class="mb-2 block font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                class="h-40 w-full resize-none rounded-lg border border-gray-300 px-6 py-4 text-primary-dark transition-all focus:outline-none"
                placeholder="A joyful message"
                required
              ></textarea>
            </div>
            <div class="col-span-2">
              <label for="options" class="mb-2 block font-semibold">How can we help you?</label>
              <div class="flex flex-wrap gap-4">
                <label class="cursor-pointer">
                  <input type="checkbox" name="options" value="option1" class="peer hidden" />
                  <div class="rounded-lg border border-gray-300  px-6 py-4 text-primary-dark transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                    Brand
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="checkbox" name="options" value="option2" class="peer hidden" />
                  <div class="rounded-lg border border-gray-300  px-6 py-4 text-primary-dark transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                    Strategy
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="checkbox" name="options" value="option3" class="peer hidden" />
                  <div class="rounded-lg border border-gray-300  px-6 py-4 text-primary-dark transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                    Website
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="checkbox" name="options" value="option1" class="peer hidden" />
                  <div class="rounded-lg border border-gray-300  px-6 py-4 text-primary-dark transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                    Marketing
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="checkbox" name="options" value="option2" class="peer hidden" />
                  <div class="rounded-lg border border-gray-300  px-6 py-4 text-primary-dark transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                    Design
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="checkbox" name="options" value="option3" class="peer hidden" />
                  <div class="rounded-lg border border-gray-300  px-6 py-4 text-primary-dark transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                    Development
                  </div>
                </label>
                <label class="cursor-pointer">
                  <input type="checkbox" name="options" value="option3" class="peer hidden" />
                  <div class="rounded-lg border border-gray-300  px-6 py-4 text-primary-dark transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                    Partnership
                  </div>
                </label>
              </div>
            </div>
          </div>
          <Button v-if="blok.button.length && blok.button[0]" :button="blok.button[0]" @click.prevent="submit" />
        </form>
        <Transition name="fade">
          <div
            v-if="showMessage"
            class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-12"
          >
            Thank you! We'll be in touch.
          </div>
        </Transition>
      </div>
      <div class="invisible hidden h-full items-end text-white lg:visible lg:flex">
        <div>
          <p v-if="blok.quote" class="text-xl font-semibold lg:text-2xl xl:text-3xl 2xl:text-4xl">{{ blok.quote }}</p>
          <p v-if="blok.name" class="mt-6 text-xl font-semibold">{{ blok.name }}</p>
          <p v-if="blok.position" class="text-xl">{{ blok.position }}</p>
        </div>
      </div>
    </div>
    <div class="before:left:0 pointer-events-none invisible absolute left-1/2 top-0 z-0 hidden h-full w-1/2 before:absolute before:top-0 before:size-full before:bg-black/40 before:content-[''] lg:visible lg:block ">
      <img v-if="optimizedImage" class="size-full object-cover" :src="optimizedImage" :alt="blok.image.alt" />
    </div>
    <div class="overflow-none relative mt-12 flex min-h-[600px] items-end py-12 lg:invisible lg:hidden">
      <div class="container relative z-10 text-white">
        <p v-if="blok.quote" class="text-xl font-semibold lg:text-2xl xl:text-3xl 2xl:text-4xl">{{ blok.quote }}</p>
        <p v-if="blok.name" class="mt-6 text-xl font-semibold">{{ blok.name }}</p>
        <p v-if="blok.position" class="text-xl">{{ blok.position }}</p>
      </div>
      <div class="absolute left-0 top-0 z-0 size-full before:absolute before:top-0 before:size-full before:bg-black/40 before:content-['']">
        <img v-if="optimizedImage" class="size-full object-cover" :src="optimizedImage" :alt="blok.image.alt" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
