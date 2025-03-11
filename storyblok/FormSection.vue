<script setup>
import ContactForm from '../components/ContactForm.vue';
import NewsletterForm from '../components/NewsletterForm.vue';

const props = defineProps({ blok: Object });

const showMessage = ref(false);

const submit = () => {
  showMessage.value = true;
  setTimeout(() => {
    showMessage.value = false;
  }, 4000);
};

const selectedForm = computed(() => {
  switch (props.blok.form) {
    case 'newsletter':
      return NewsletterForm;
    case 'contact':
    default:
      return ContactForm;
  }
});
</script>

<template>
  <section
    v-editable="blok"
    class="page-section form-section bg-white"
  >
    <div
      class="container"
    >
      <div class="relative overflow-hidden rounded-xl bg-primary-dark p-24">
        <div class="relative z-10 flex flex-col items-center space-y-12 text-center">
          <Headline v-if="blok.headline" color="text-white" :headline="blok.headline" />
          <div class="relative mx-auto flex items-center space-x-8">
            <div>
              <component
                :is="selectedForm"
                :button="blok?.button && blok?.button[0]"
              />
            </div>
            <div>
              <Button v-if="blok.button.length && blok.button[0]" :button="blok.button[0]" @click.prevent="submit" />
            </div>
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
