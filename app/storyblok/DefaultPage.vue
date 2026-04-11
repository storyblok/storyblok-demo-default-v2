<script setup>
defineProps({ blok: Object, uuid: String });
</script>

<template>
  <div v-editable="blok">
    <ComponentCheck
      v-for="(currentBlok, index) in blok.body"
      :key="currentBlok._uid"
      :blok="currentBlok"
      :index="index"
    />
  </div>
</template>
