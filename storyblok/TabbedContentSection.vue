<script setup>
const props = defineProps({ blok: Object });

const activeTab = ref(0);

const setActiveTab = (index) => {
  activeTab.value = index;
};

const tabWidth = computed(() => {
  return 100 / props.blok.entries.length;
});
</script>

<template>
  <section
    v-editable="blok"
    class="page-section tabbed-content-section container bg-white"
  >
    <div class="mb-12 text-center">
      <Headline v-if="blok.headline" :headline="blok.headline" />
      <Lead v-if="blok.lead">
        {{ blok.lead }}
      </Lead>
    </div>
    <div>
      <ul class="relative mb-8 flex flex-col rounded-lg border border-medium p-1 lg:flex-row" :style="{ '--tab-width': `${tabWidth}%` }">
        <li
          v-for="(entry, index) in blok.entries"
          :key="entry._uid"
        >
          <button
            class="w-full cursor-pointer rounded-md px-6 py-3 text-center text-lg text-dark"
            :data-active="index === activeTab"
            @click.prevent="setActiveTab(index)"
          >
            {{ entry.headline }}
          </button>
        </li>
      </ul>
      <section
        v-for="(entry, index) in blok.entries"
        :id="`entry-${entry._uid}`"
        :key="entry._uid"
      >
        <StoryblokComponent v-if="index === activeTab" :blok="entry" />
      </section>
    </div>
  </section>
</template>

<style scoped>
ul li button[data-active='true'] {
  @apply bg-dark text-white;
}

ul li {
  @screen lg {
    @apply w-[var(--tab-width)];
  }
}
</style>
