<template>
  <div class="bigImage ">
    <div class="imageOverlay">
      <div class="flex h-full items-center justify-center">
        <div class="text-white">
          <h2 class="mb-4 text-4xl bg-primary px-2 font-semibold text-white">nachhilfe.wien</h2>
          <h4 class="mb-6 text-xl font-semibold text-lightPrimary">Wir bringen dich auf Zack!</h4>
          <ButtonAccent text="Termin vereinbaren" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import ButtonAccent from "@/components/util/elements/ButtonAccent.vue";
</script>

<style lang="scss" scoped>
.bigImage {
  background-image: url("@/assets/images/home/title-desktop5.jpg");
  @apply relative overflow-hidden rounded-b-lg bg-cover bg-no-repeat p-12 text-center h-[400px];
}

.imageOverlay {
  background-color: rgba(0, 0, 0, 0.5);
  @apply absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed;
}
</style>