<template>
  <button type="button" class="text-white rounded-full px-8 py-4 text-p">
    {{ text }}</button>
</template>

<script setup>

const props = defineProps(['text']);
</script>

<style lang="scss" scoped>

</style>