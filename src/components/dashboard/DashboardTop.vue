<template>
  <div class="mt-8 grid w-full grid-cols-3 items-center gap-8">
    <!--Text-Elements-->
    <div class="order-2 col-span-3 text-center md:col-span-2 md:text-left">
      <h2 class="text-mainOrange">Hallo {{ userName }}</h2>
      <h4>Dies ist dein Dashboard!</h4>
      <p>
        Hier findest du die wichtigsten Funktionen von nachhilfe.wien. Solltest
        du noch Fragen oder Anregungen haben, zögere bitte nicht, uns
        <a href="#">eine Nachricht zu schreiben!</a>
      </p>
      <div class="mt-4 flex justify-center gap-4 md:justify-start">
        <ButtonLarge class="bg-mainBlue" text="Kontakt" />
        <ButtonLarge
          class="bg-mainBlue"
          text="FAQ"
          @click="
            () => {
              router.push('/faq');
            }
          "
        />
        <ButtonLarge
          v-if="userStore.user.userType === 'ADMIN'"
          text="Admin"
          class="bg-mainOrange"
          @click="
            () => {
              router.push('/admin');
            }
          "
        />
      </div>
    </div>

    <!--Image-Element-->
    <div
      class="order-1 col-span-3 flex items-center justify-center overflow-hidden rounded-full md:order-3 md:col-span-1 md:-translate-y-1/4 md:scale-75"
      style="width: 200px; height: 200px"
    >
      <a href="#">
        <img
          :src="topPictureSource"
          alt="a users profile picture"
          class="h-full w-full object-cover"
          @click="
            () => {
              router.push('/settings');
            }
          "
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import ButtonLarge from "@/components/util/buttons/ButtonLarge.vue";
import { useRouter } from "vue-router";
import { computed } from "vue";
import image from "@/assets/images/dashboard/default-profile-picture.jpg";

const router = useRouter();
const userStore = useUserStore();
const userName = userStore.user.firstName;
const topPictureSource = computed(() => {
  return userStore.user.image === null ? image : userStore.user.image;
});
</script>

<style lang="scss" scoped></style>
