<template>
  <FormModal ref="loginModalRef">
    <CardLarge class="m-0">
      <template v-slot:content>
        <LoginForm @close="closeLoginModal"/>
      </template>
    </CardLarge>
  </FormModal>

  <FormModal ref="registrationModalRef">
    <CardLarge class="m-0">
      <template v-slot:content>
        <RegistrationForm @close="closeRegistrationModal"/>
      </template>
    </CardLarge>
  </FormModal>

  <div class="w-full bg-background">
  <nav>
    <img src="@/assets/images/logos/nachhilfewien-logo.svg" alt="Logo von nachhilfe.wien" class="w-1/6 hover:cursor-pointer" @click="() => {router.push('/')}">
    <ul v-if="userStore.isAuthenticated">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/search">Suche</RouterLink>
      </li>
      <li>
        <RouterLink to="/inbox">Inbox</RouterLink>
      </li>
      <li>
        <RouterLink to="/settings">Settings</RouterLink>
      </li>
      <li class="text-mainOrange" @click="userStore.logout">
        Logout
      </li>
    </ul>

    <ul v-else>
      <li v-if="!(userStore.isAuthenticated)" class="text-mainBlue" @click="openLoginModal">
        Login
      </li>
      <li v-if="!(userStore.isAuthenticated)" class="text-mainBlue" @click="openRegistrationModal">
        Register
      </li>
    </ul>
  </nav>
  </div>
</template>

<script setup>

import FormModal from "@/components/util/modals/FormModal.vue";
import CardLarge from "@/components/util/cards/CardLarge.vue";

import {ref, watch} from "vue";
import LoginForm from "@/components/util/forms/LoginForm.vue";
import RegistrationForm from "@/components/util/forms/RegistrationForm.vue";
import router from "@/router";
import {useUserStore} from "@/stores/user";

const loginModalRef = ref(null);
const registrationModalRef = ref(null);
const userStore = useUserStore();

function openLoginModal() {
  loginModalRef.value.openModal();
}

function closeLoginModal() {
  loginModalRef.value.closeModal();
}

function openRegistrationModal() {
  registrationModalRef.value.openModal();
}

function closeRegistrationModal() {
  registrationModalRef.value.closeModal();
}

watch(() => userStore.showRegistrationModal, (newVal) => {
  if (newVal) {
    openRegistrationModal();
  } else {
    closeRegistrationModal();
  }
});


</script>

<style lang="scss" scoped>

nav {
  @apply max-w-7xl mx-auto
  items-center justify-between
  pb-16 pt-8 px-8 flex
  bg-background
}

#logo {
  @apply text-mainOrange
}

ul {
  @apply flex gap-8 md:gap-12
  text-xl
}

li {
  @apply hover:cursor-pointer
}

.router-link-active {
  @apply underline decoration-secondary underline-offset-4
}

</style>