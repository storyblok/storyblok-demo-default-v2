<script setup>
defineProps({ blok: Object });

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
    class="page-section form-section bg-white"
  >
    <div
      class="container"
    >
      <div class="relative overflow-hidden rounded-xl bg-primary-dark p-8 md:p-12 xl:p-24">
        <div class="relative z-10 flex flex-col items-center space-y-6 text-center lg:space-y-12">
          <Headline v-if="blok.headline" color="text-white" :headline="blok.headline" size="small" />
          <div class="relative mx-auto flex flex-col items-center gap-8 md:flex-row">
            <form action="" class="flex flex-col gap-4 md:flex-row">
              <label for="email" class="sr-only">Your email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="enjoy@storyblok.com"
                class="rounded-lg bg-white px-6 py-4 text-primary-dark transition-all focus:outline-none"
                required
              />
              <Button v-if="blok.button.length && blok.button[0]" :button="blok.button[0]" @click.prevent="submit" />
            </form>
            <Transition name="fade">
              <div
                v-if="showMessage"
                class="absolute left-1/2 top-0 block w-full -translate-x-1/2 -translate-y-12 text-white"
              >
                Thank you! We'll be in touch.
              </div>
            </Transition>
          </div>
        </div>
        <Decoration3 fill="highlight-1" class="absolute bottom-0 right-0 z-0" />
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
