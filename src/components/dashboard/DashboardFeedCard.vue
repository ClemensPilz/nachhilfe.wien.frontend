<template>
  <div
    class="flex w-full flex-col gap-2 overflow-hidden rounded-3xl text-center shadow-xl"
  >
    <slot name="image" />
    <div class="mx-4 mb-4">
      <h4>{{ title }}</h4>
      <p class="font-bold">{{ subtitle }}</p>
      <p>{{ text }}</p>
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  text: String,
  left: Boolean,
});
</script>

<style lang="scss" scoped></style>
