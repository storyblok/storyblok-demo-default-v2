<script setup>
const props = defineProps({ button: Object, link: String });

const url = computed(() => {
  if (props.button.link.url !== '') {
    return '';
  }
  switch (props.button.link.linktype) {
    case 'story':
      return `/${props.button.link.story?.full_slug}`;
    case 'email':
      return `mailto:${props.button.link.email}`;
    case 'url':
    case 'asset':
    default:
      return props.button.link.url;
  }
});

const classes = computed(() => {
  let classes
    = `font-semibold inline-flex w-full sm:w-auto items-center justify-center tracking-wider cursor-pointer transition-all duration-300 rounded-md border border-2 border-${
      props.button.background_color}`;

  switch (props.button.size) {
    case 'small':
      classes += ' py-2 px-6';
      break;
    case 'large':
      classes += ' py-4 px-10';
      break;
    case 'medium':
    default:
      classes += ' py-3 px-8';
      break;
  }

  switch (props.button.style) {
    case 'ghost':
      classes
        += ` bg-transparent text-${
          props.button.background_color
        } hover:bg-${
          props.button.background_color
        } hover:text-${
          props.button.text_color}`;
      break;
    case 'default':
    default:
      classes
        += ` hover:scale-105 transform bg-${
          props.button.background_color
        } text-${
          props.button.text_color}`;
  }

  return classes;
});
</script>

<template>
  <NuxtLink
    v-editable="button"
    :to="url"
    :class="classes"
  >
    {{ button.label }}
  </NuxtLink>
</template>
