<template>
  <div class="w-full grid grid-cols-2 items-center mt-8 gap-8">
    <!--Text-Elements-->
    <div class="col-span-2 md:col-span-1">
      <h2 class="text-mainOrange">Hallo {{ userName }}</h2>
      <h4>Dies ist dein Dashboard!</h4>
      <p>
        Hier findest du die wichtigsten Funktionen von nachhilfe.wien. Solltest
        du noch Fragen oder Anregungen haben, zögere bitte nicht, uns
        <a href="#">eine Nachricht zu schreiben!</a>
      </p>
      <ButtonLarge class="bg-mainBlue mt-4" text="Kontakt" />
      <ButtonLarge
        class="bg-mainBlue mt-4"
        text="FAQ"
        @click="
          () => {
            router.push('/faq');
          }
        "
      />
    </div>

    <!--Image-Element-->
    <div class="col-span-2 md:col-span-1 overflow-hidden">
      <a href="#"
        ><img
          src="@/assets/images/dashboard/happy-teacher.jpg"
          alt="happy teacher"
          class="w-full h-auto rounded-full"
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
