<template>
  <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-lightPrimary hover:shadow-xl focus:bg-lightPrimary focus:shadow-xl focus:outline-none focus:ring-0 active:bg-lightPrimary active:shadow-xl">
    {{ props.text }}
  </button>

</template>

<script setup>
import {
  Ripple,
  initTE,
} from "tw-elements";
import {onMounted} from "vue";

onMounted(() => initTE({ Ripple }));

const props = defineProps(['text']);

</script>

<style scoped>

</style>