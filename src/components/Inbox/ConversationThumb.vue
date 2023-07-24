<template>
  <div>
    <div class="rounded-lg bg-lightPrimary p-4 shadow">
      {{ user.firstName }} {{ user.lastName }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ user: Object });
</script>

<style lang="scss" scoped></style>
