<template>
  <div class="container max-w-3xl mx-auto px-2 mt-6 md:px-0 bg-white">
    <section id="userData" class="mb-12">
      <h2 class="text-center">Meine Userdaten</h2>
      <p class="mb-2 text-center">Deine Basisdaten anpassen</p>

      <!--Name and mail-->
      <BasicSettings />

      <!--Password-->
      <div class="mt-4 md:mt-0 md:text-right">
        <ButtonRegular
          class="bg-secondary"
          text="Passwort ändern"
          @click="changePassword"
        />
      </div>

      <!--Profile picture-->
      <h4>Mein Profilbild ändern</h4>
      <p>Erlaubte Formate: <span class="italic">jpg, png. Maximal 2mb</span></p>
      <ImageSettings />
    </section>

    <!--Teachers only-->
    <section
      id="teacherData"
      v-if="userStore.user.userType === 'TEACHER'"
      class="border-t-2 pt-8"
    >
      <h4>Lehrer-Bereich</h4>
      <p>Nachhilfe anbieten</p>

      <small class="mt-4">Meine Angebote: </small>
      <CoachingSettings />

      <p class="mt-4">Meine Bezirke</p>
      <small class="mb-2">Wo bietest du Nachhilfe an?</small>
      <DistrictSettings />
    </section>
  </div>
</template>

<script setup>
import ImageSettings from "@/components/settings/ImageSettings.vue";
import { useUserStore } from "@/stores/user";
import BasicSettings from "@/components/settings/BasicSettings.vue";
import DistrictSettings from "@/components/settings/DistrictSettings.vue";
import CoachingSettings from "@/components/settings/CoachingSettings.vue";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";

const userStore = useUserStore();

function changePassword() {
  alert("Diese Funktion steht noch nicht zur Verfügung.");
}
</script>

<style lang="scss" scoped></style>
