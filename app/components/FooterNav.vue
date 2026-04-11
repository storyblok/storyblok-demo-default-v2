<script setup>
defineProps({
  headline: String,
  nav: { type: Object, required: true },
  textColor: String,
});
</script>

<template>
  <div>
    <h3
      class="mb-5 font-display text-xl font-semibold xl:text-2xl"
      :class="textColor"
    >
      {{ headline }}
    </h3>
    <nav>
      <ul class="flex flex-col space-y-3 text-lg">
        <li v-for="item in nav" :key="item._uid">
          <NavItem
            :class="textColor"
            :item="item"
            :reduced-font-weight="true"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>
