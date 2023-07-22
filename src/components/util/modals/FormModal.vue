<template>
  <div
    :class="
      isActive ? 'modalBg visible opacity-100' : 'modalBg invisible opacity-0'
    "
    @mousedown.self="appStore.resetModals()"
  >
    <div class="w-full sm:w-[500px]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
defineProps({ isActive: Boolean });
</script>

<style lang="scss" scoped>
.modalBg {
  @apply fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-all ease-in-out;
}
</style>
