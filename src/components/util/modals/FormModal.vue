<template>
  <div
    :class="
      isActive ? 'modalBg opacity-100 visible' : 'modalBg opacity-0 invisible'
    "
    @mousedown.self="closeModal"
  >
    <div class="w-full sm:w-[500px]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isActive = ref(false);

const openModal = () => {
  isActive.value = true;
};
function closeModal() {
  isActive.value = false;
}

const openDelete = ref();


defineExpose({ openModal, closeModal });
</script>

<style lang="scss" scoped>
.modalBg {
  @apply fixed z-50 inset-0 flex items-center justify-center transition-all ease-in-out bg-black bg-opacity-50;
}
</style>
