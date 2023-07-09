<template>
  <div class="container max-w-3xl mx-auto px-2 mt-6 md:px-0 bg-white">


    <section id="userData" class="mb-12">

      <div class="headline-large text-center">Meine Userdaten</div>
      <div class="mb-2 paragraph-small text-center">Deine Basisdaten anpassen</div>

      <!--Name and mail-->
      <BasicSettings/>

      <!--Password-->
      <div class="mt-4 md:mt-0 md:text-right">
        <ButtonSecondary text="Passwort ändern" @click="changePassword"/>
      </div>

      <!--Profile picture-->
      <div class="mt-4 headline">Mein Profilbild ändern</div>
      <div class="mb-2 paragraph-small">Erlaubte Formate: <span class="italic">jpg, png. Maximal 2mb</span></div>
      <ImageSettings/>

    </section>


    <!--Teachers only-->
    <section id="teacherData" v-if="userStore.user.userType === 'TEACHER'" class="border-t-2 pt-8">

      <div class="headline-large text-center">Lehrer-Bereich</div>
      <div class="mb-2 paragraph-small text-center">Nachhilfe anbieten</div>

      <div class="mt-4 headline">Meine Angebote</div>
      <CoachingSettings/>

      <div class="mt-4 headline">Meine Bezirke</div>
      <div class="mb-2 paragraph-small">Wo bietest du Nachhilfe an?</div>
      <DistrictSettings/>

    </section>

  </div>
</template>

<script setup>
import NavBar from "@/components/global/NavBar.vue";
import ImageSettings from "@/components/profile/image/ImageSettings.vue";
import {useUserStore} from "@/stores/user";
import ButtonSecondary from "@/components/util/elements/ButtonSecondary.vue";
import BasicSettings from "@/components/settings/BasicSettings.vue";
import DistrictSettings from "@/components/profile/districts/DistrictSettings.vue";
import CoachingSettings from "@/components/profile/coaching/CoachingSettings.vue";

const userStore = useUserStore();

function changePassword() {
  alert('Diese Funktion steht noch nicht zur Verfügung.');
}

</script>

<style lang="scss" scoped>

</style>