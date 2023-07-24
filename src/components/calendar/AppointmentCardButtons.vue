<template>
  <div
    :class="{
      'mb-2 block md:hidden ': display === 'mobile',
      'hidden md:block ': display === 'desktop',
    }"
  >
    <div
      v-if="userStore.user.userType === 'TEACHER'"
      class="mt-2 flex w-full justify-center md:justify-start lg:gap-2"
    >
      <div v-if="display === 'desktop'">
        <ButtonRegular
          text="Profil"
          class="bg-mainBlue"
          @click="router.push(`/profile/${appointmentDetails.studentId}`)"
        ></ButtonRegular>

        <ButtonRegular
          text="Nachricht"
          class="bg-mainOrange"
          @click="appStore.sendMessage(appointmentDetails.studentId, true)"
        ></ButtonRegular>
      </div>

      <div v-if="display === 'mobile'" class="flex gap-12">
        <UserIcon
          class="w-16 text-mainBlue"
          @click="router.push(`/profile/${appointmentDetails.studentId}`)"
        />

        <ChatBubbleOvalLeftEllipsisIcon
          class="w-16 text-mainOrange"
          @click="appStore.sendMessage(appointmentDetails.studentId, true)"
        />
      </div>
    </div>

    <div
      v-if="userStore.user.userType === 'STUDENT'"
      class="mt-2 flex justify-center lg:gap-2"
    >
      <div v-if="display === 'desktop'">
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
      <div v-if="display === 'mobile'" class="flex">
        <UserIcon
          class="w-16 text-mainBlue"
          @click="router.push(`/profile/${appointmentDetails.teacherId}`)"
        />

        <ChatBubbleOvalLeftEllipsisIcon
          class="w-16 text-mainOrange"
          @click="appStore.sendMessage(appointmentDetails.teacherId, true)"
        />
      </div>
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
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/vue/24/solid";

const userStore = useUserStore();
const appStore = useAppStore();
const props = defineProps(["appointmentDetails", "display"]);
</script>

<style lang="scss" scoped></style>
e
