<template>
  <a
    :href="href"
    target="_blank"
    class="inline-flex items-center px-4 py-2 rounded-full bg-tomato text-white hover:bg-tomato-dark transition-colors duration-300 shadow-sm hover:shadow-md"
  >
    <slot></slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>