<template>
  <NavBar class="md:mb-12 max-w-6xl mx-auto"/>
  <div class="container max-w-3xl mx-auto px-2 md:px-0 bg-white">


    <section id="userData">

      <h5 class="mb-2 text-xl font-medium leading-tight text-darkPrimary">Meine Userdaten</h5>
      <BasicSettings/>
      <div class="text-right">
        <ButtonSecondary text="Passwort ändern"/>
      </div>
      <h5 class="text-lg mt-4 leading-tight text-darkPrimary">Mein Profilbild ändern</h5>
      <ImageSettings/>

    </section>


    <!--Teachers only-->
    <section id="teacherData" v-if="userStore.user.userType === 'TEACHER'">

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

</script>

<style lang="scss" scoped>

</style>