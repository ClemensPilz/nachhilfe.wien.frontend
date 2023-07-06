<template>
  <FormModal ref="loginModalRef" >
    <CardLarge class="m-0">
      <template v-slot:content>
        <LoginForm @close="closeLoginModal"/>
      </template>
    </CardLarge>
  </FormModal>

  <FormModal ref="registrationModalRef" >
    <CardLarge class="m-0">
      <template v-slot:content>
        <RegistrationForm @close="closeRegistrationModal" />
      </template>
    </CardLarge>
  </FormModal>




  <nav>
    <h4 id="logo">logo</h4>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="search">Suche</RouterLink>
      </li>
      <li>
        <RouterLink to="dashboard">Hilfe</RouterLink>
      </li>
      <li class="text-mainBlue" @click="openLoginModal">
        Login
      </li>
      <li class="text-mainBlue" @click="openRegistrationModal">
        Register
      </li>

    </ul>
  </nav>
</template>

<script setup>

import FormModal from "@/components/util/modals/FormModal.vue";
import CardLarge from "@/components/util/cards/CardLarge.vue";

import {ref} from "vue";
import LoginForm from "@/components/util/forms/LoginForm.vue";
import RegistrationForm from "@/components/util/forms/RegistrationForm.vue";

const loginModalRef = ref(null);
const registrationModalRef = ref(null);

function openLoginModal() {
  loginModalRef.value.openModal();
}function closeLoginModal() {
  loginModalRef.value.closeModal();
}

function openRegistrationModal() {
  registrationModalRef.value.openModal();
}function closeRegistrationModal() {
  registrationModalRef.value.closeModal();
}


</script>

<style lang="scss" scoped>

nav {
  @apply max-w-7xl mx-auto
  items-center justify-between
  mb-20 pt-8 px-8 flex
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