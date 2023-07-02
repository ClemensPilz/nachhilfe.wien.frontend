<template>
  <NavBar/>
  <div class="container max-w-3xl mx-auto px-2 mt-6 md:px-0 bg-white">


    <section id="userData" class="mb-12">

      <h5 class="text-xl text-center font-medium leading-tight text-darkPrimary">Meine Userdaten</h5>
      <h6 class="mb-2 text-center text-md font-thin text-primary">Deine Basisdaten anpassen</h6>

      <!--Name and mail-->
      <BasicSettings/>

      <!--Password-->
      <div class="text-right">
        <ButtonSecondary text="Passwort ändern" @click="changePassword"/>
      </div>

      <!--Profile picture-->
      <h5 class="text-lg mt-4 leading-tight text-darkPrimary">Mein Profilbild ändern</h5>
      <h6 class="mb-2 text-md font-thin text-primary">Erlaubte Formate: <span class="italic">jpg, png. Maximal 2mb</span></h6>
      <ImageSettings/>

    </section>


    <!--Teachers only-->
    <section id="teacherData" v-if="userStore.user.userType === 'TEACHER'" class="border-t-2 pt-8">

      <h5 class="text-xl text-center font-medium leading-tight text-darkPrimary">Lehrer-Bereich</h5>
      <h6 class="mb-2 text-center text-md font-thin text-primary">Biete Nachhilfe an und lege fest, in welchen Bezirken du verfügbar bist</h6>

      <h5 class="text-lg mt-4 leading-tight text-darkPrimary">Manage Coachings</h5>
      <CoachingSettings/>

      <h5 class="text-lg mt-4 leading-tight text-darkPrimary">Manage Districts</h5>
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