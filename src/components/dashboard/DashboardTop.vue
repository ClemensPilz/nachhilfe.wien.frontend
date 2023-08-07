<template>
  <div class="mt-8 grid w-full grid-cols-3 items-center gap-8">
    <!--Text-Elements-->
    <div class="order-2 col-span-3 text-center md:col-span-2 md:text-left">
      <h2 class="text-mainOrange">Hallo {{ userName }}</h2>
      <h4>Dies ist dein Dashboard!</h4>
      <p>
        Hier findest du die wichtigsten Funktionen von nachhilfe.wien. Solltest
        du noch Fragen oder Anregungen haben, zögere bitte nicht, uns eine
        Nachricht zu schreiben!
      </p>
      <div class="mt-4 flex justify-center gap-4 md:justify-start">
        <DashboardTopButtons :userType="userType" />
      </div>
    </div>

    <!--Image-Element-->
    <div
      class="order-1 col-span-3 flex items-center justify-center overflow-hidden md:order-3 md:col-span-1"
    >
      <DashboardTopPicture
        :userImage="userImage"
        class="hover:cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup>
import DashboardTopPicture from "@/components/dashboard/DashboardTopPicture.vue";
import DashboardTopButtons from "@/components/dashboard/DashboardTopButtons.vue";

const props = defineProps({
  userType: String,
  userImage: String,
  userName: String,
});
</script>

<style lang="scss" scoped></style>
