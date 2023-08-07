<template>
  <div class="max-h-screen overflow-scroll text-center">
    <slot> </slot>
    <h3 class="text-mainBlue">{{ title }}</h3>
    {{ text }}
    <ButtonRegular
      text="Zurück"
      class="mx-auto mt-2 block bg-primary"
      @click="
        () => {
          appStore.resetModals();
        }
      "
    />
  </div>
</template>

<script setup>
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import { useAppStore } from "@/stores/app.js";

const appStore = useAppStore();

defineProps({
  title: String,
  text: String,
});
</script>

<style lang="scss" scoped></style>
