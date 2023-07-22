<template>
  <div
    :class="{
      'mb-2 block  md:hidden ': display === 'mobile',
      'hidden md:block ': display === 'desktop',
    }"
  >
    <div
      v-if="userStore.user.userType === 'TEACHER'"
      class="mt-2 flex justify-center lg:gap-2"
    >
      <UserIcon
        class="w-10 text-mainBlue"
        @click="router.push(`/profile/${appointmentDetails.studentId}`)"
      />

      <ChatBubbleOvalLeftIcon
        class="w-10 text-mainOrange"
        @click="appStore.sendMessage(appointmentDetails.studentId, true)"
      />
    </div>
    <div
      v-if="userStore.user.userType === 'STUDENT'"
      class="mt-2 flex justify-center lg:gap-2"
    >
      <ButtonRegular
        text="Profil"
        class="bg-mainBlue"
        @click="router.push(`/profile/${appointmentDetails.teacherId}`)"
      />
      <ButtonRegular
        text="Kontakt"
        class="bg-mainOrange"
        @click="appStore.sendMessage(appointmentDetails.teacherId, true)"
      />
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import { useUserStore } from "@/stores/user";
import { useAppStore } from "@/stores/app";
import { ChatBubbleOvalLeftIcon } from "@heroicons/vue/20/solid";
import { UserIcon } from "@heroicons/vue/20/solid";

const userStore = useUserStore();
const appStore = useAppStore();
const props = defineProps(["appointmentDetails", "display"]);
</script>

<style lang="scss" scoped></style>
e
