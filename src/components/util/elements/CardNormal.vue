<template>
  <div
      class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      {{ props.title }}
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      {{ props.content }}
    </p>
    <button
        type="button" :class="props.buttonBg"
        class="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-darkPrimary focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
      {{ props.buttonText }}
    </button>
  </div>
</template>

<script setup>

import {Ripple, initTE} from 'tw-elements'
import {computed, onMounted} from "vue";

onMounted(() => initTE({Ripple}))

const props = defineProps({
  title: String,
  content: String,
  buttonText: String,
  buttonBg: String
})

</script>

<style lang="scss" scoped>

</style>