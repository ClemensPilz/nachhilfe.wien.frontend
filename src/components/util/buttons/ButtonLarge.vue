<template>
  <button type="button" class="text-white h-fit w-fit rounded-full shadow-lg px-8 py-4 text-p hover:shadow-xl hover:bg-opacity-80">
    {{ text }}</button>
</template>

<script setup>

const props = defineProps(['text']);
</script>

<style lang="scss" scoped>

</style>