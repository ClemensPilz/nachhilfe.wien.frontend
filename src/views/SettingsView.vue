<template>
  <div class="container mx-auto mt-6 max-w-3xl flex-grow bg-white px-2 md:px-0">
    <FormModal :is-active="appStore.deleteAccountModalActive">
      <CardLarge class="m-0">
        <template v-slot:content>
          <DeleteAccountForm />
        </template>
      </CardLarge>
    </FormModal>
    <section id="userData" class="mb-12">
      <h2 class="text-center">Meine Userdaten</h2>
      <p class="mb-2 text-center">Deine Basisdaten anpassen</p>

      <!--Name and mail-->
      <BasicSettings />

      <!--Password-->
      <div class="mt-4 md:mt-0 md:text-right">
        <ButtonRegular
          class="hidden bg-secondary"
          text="Passwort ändern"
          @click="changePassword"
        />
        <ButtonRegular
          v-if="userStore.user.userType !== 'ADMIN'"
          class="bg-secondary"
          text="Account löschen"
          @click="
            appStore.deleteAccountModalActive =
              !appStore.deleteAccountModalActive
          "
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
import { ref } from "vue";
import CardLarge from "@/components/util/cards/CardLarge.vue";
import FormModal from "@/components/util/modals/FormModal.vue";
import DeleteAccountForm from "@/components/util/forms/DeleteAccountForm.vue";
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
const userStore = useUserStore();
const openDelete = ref();

function changePassword() {
  alert("Diese Funktion steht noch nicht zur Verfügung.");
}
</script>

<style lang="scss" scoped></style>
