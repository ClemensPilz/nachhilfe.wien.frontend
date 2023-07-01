<template>
  <div class="container max-w-6xl mx-auto bg-white">
    <NavBar class="md:mb-12"/>

    <!--Basic User-Data-->
    <section id="userData" class="max-w-3xl mx-auto">
      <h5 class="mb-2 text-xl font-medium leading-tight text-darkPrimary">Meine Userdaten</h5>
      <div v-if="!editFirstName"
      >Vorname: {{ userStore.user.firstName }}
        <PencilIcon class="h-6 inline" @click="editFirstName = true"/>
      </div>
      <div v-else>Ändern</div>
      <div>Nachname: {{ userStore.user.lastName }}</div>
      <div>E-Mail: {{ userStore.user.email }}</div>
      <ButtonSecondary text="Passwort ändern"/>

      <!--For Teachers: Coachings-->

      <!--Profile-Picture-->

      <ImageSettings/>
    </section>

  </div>
</template>

<script setup>
import NavBar from "@/components/global/NavBar.vue";
import ImageSettings from "@/components/profile/image/ImageSettings.vue";
import {ref} from "vue";
import {useUserStore} from "@/stores/user";
import ButtonSecondary from "@/components/util/elements/ButtonSecondary.vue";
import {PencilIcon} from "@heroicons/vue/24/outline";

const userStore = useUserStore();
const editFirstName = ref(false);


</script>

<style lang="scss" scoped>

</style>