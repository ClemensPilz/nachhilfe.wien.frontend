<template>
  <div
    class="block rounded-3xl shadow-lg bg-white p-6 border-2 border-secondary"
  >
    <h5 class="mb-2 text-xl font-medium leading-tight text-primary">
      {{ props.title }}
    </h5>
    <p class="mb-4 text-primary">
      {{ props.content }}
      <slot />
    </p>
    <button
      type="button"
      @click.stop="$emit('send')"
      @keydown.enter.stop=""
      class="inline-block rounded-3xl px-6 py-3 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out bg-mainBlue shadow-md hover:shadow-xl focus:outline-none focus:ring-0"
    >
      {{ props.buttonText }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  content: String,
  buttonText: String,
});

const emits = defineEmits(["send"]);
</script>

<style lang="scss" scoped></style>
