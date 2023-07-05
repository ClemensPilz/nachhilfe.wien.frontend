<template>
  <button type="button" class="text-white rounded-full shadow-lg px-4 py-2 text-p">
    {{ text }}</button>
</template>

<script setup>

const props = defineProps(['text']);
</script>

<style lang="scss" scoped>

</style>