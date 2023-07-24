<template>
  <div class="flex items-end justify-between">
    <div class="flex w-fit flex-col">
      <img
        src="@/assets/images/logos/nachhilfewien-logo.svg"
        alt="nachhilfewien-logo"
        class="w-24"
      />
      <small>Ein codersbay.vienna projekt</small>
      <small class="font-thin">von René, Dominik und Clemens</small>
    </div>
    <FooterInfoSocials />
  </div>
</template>

<script setup>
import FooterInfoSocials from "@/components/global/FooterInfoSocials.vue";
</script>

<style lang="scss" scoped></style>
