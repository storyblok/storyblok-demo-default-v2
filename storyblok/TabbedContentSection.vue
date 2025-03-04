<script setup>
defineProps({ blok: Object });

const activeTab = ref(0);

const setActiveTab = (index) => {
  activeTab.value = index;
};
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
      <ul class="border-medium relative mb-8 flex w-full flex-col rounded-lg border p-1 lg:flex-row">
        <li
          v-for="(entry, index) in blok.entries"
          :key="entry._uid"
          class="w-full"
        >
          <button
            class="w-full cursor-pointer rounded-md px-6 py-3 text-center text-lg"
            :class="index === activeTab ? 'bg-primary-dark text-white' : 'text-primary-dark'"
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
