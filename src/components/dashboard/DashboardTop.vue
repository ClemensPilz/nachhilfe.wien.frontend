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
    <div class="order-1 col-span-3 overflow-hidden md:order-3 md:col-span-1">
      <a href="#"
        ><img
          src="@/assets/images/dashboard/default-profile-picture.jpg"
          alt="happy teacher"
          class="-my-20 h-auto rounded-full px-20 py-20 sm:-my-40 sm:px-40 sm:py-40 md:my-0 md:w-full md:px-0 md:py-0"
      /></a>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import ButtonLarge from "@/components/util/buttons/ButtonLarge.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();
const userName = userStore.user.firstName;
</script>

<style lang="scss" scoped></style>
