<template>
  <button
    type="button"
    class="text-p h-fit w-fit rounded-full px-8 py-4 text-white shadow-lg hover:bg-opacity-80 hover:shadow-xl"
  >
    <a :href="props.href" target="_blank">
      {{ text }}
    </a>
  </button>
</template>

<script setup>
const props = defineProps(["text", "href"]);
</script>

<style lang="scss" scoped></style>
