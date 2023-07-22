<template>
  <div class="container mx-auto mt-6 max-w-3xl flex-grow bg-white px-2 md:px-0">
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
        <ButtonRegular
            v-if="userStore.user.userType != 'ADMIN'"
            class="bg-secondary"
            text="Account löschen"
            @click="openDelete=true"
        />
        <DeleteAcceptionModal title="User löschen" :openDelete="openDelete"  @update:openDelete="v => openDelete = v">
          <p>User wirklich löschen?</p>
        </DeleteAcceptionModal>
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
import axios from "axios";
import router from "@/router";
import DeleteAcceptionModal from "@/components/util/modals/DeleteAcceptionModal.vue";
import {ref} from "vue";

const userStore = useUserStore();
const openDelete = ref();


function changePassword() {
  alert("Diese Funktion steht noch nicht zur Verfügung.");
}


</script>

<style lang="scss" scoped></style>
