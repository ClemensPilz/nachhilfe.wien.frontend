<template>
  <div class="flex justify-between">
    <div
      class="font-small italic text-primary hover:cursor-pointer"
      @click="
        () => {
          router.push('/imprint');
        }
      "
    >
      Impressum
    </div>
    <div class="font-small text-secondary">Copyright 2023</div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="scss" scoped></style>
