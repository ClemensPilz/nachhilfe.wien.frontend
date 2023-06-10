<template>
  <div class="block rounded-lg bg-white p-6 shadow-lg">
    <h5 class="mb-2 text-xl font-medium leading-tight text-darkPrimary">
      {{ props.title }}
    </h5>
    <p class="mb-4 text-primary">
      {{ props.content }}
      <slot />
    </p>
    <button type="button" :class="props.buttonBg" @click="$emit('send')"
            class="inline-block rounded-xl px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-darkPrimary focus:outline-none focus:ring-0"
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

const emits = defineEmits(['send'])

</script>

<style lang="scss" scoped>

</style>