<template>
  <div class="border-t bg-white px-8 py-2 pt-4">
    <FooterInfo v-if="!userStore.isAuthenticated" />
    <FooterCopyright />
  </div>
</template>

<script setup>
import FooterCopyright from "@/components/global/FooterCopyright.vue";
import FooterInfo from "@/components/global/FooterInfo.vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
