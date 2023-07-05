<template>
  <FormModal ref="loginModalRef" >
    <CardLarge class="m-0">
      <template v-slot:content>
        <LoginForm @close="closeFormModal"/>
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
      <li class="text-mainBlue" @click="openFormModal">
        Login
      </li>
    </ul>
  </nav>
</template>

<script setup>

import FormModal from "@/components/util/modals/FormModal.vue";
import CardLarge from "@/components/util/cards/CardLarge.vue";

import {ref} from "vue";
import LoginForm from "@/components/util/forms/LoginForm.vue";

const loginModalRef = ref(null);

function openFormModal() {
  loginModalRef.value.openModal();
}function closeFormModal() {
  loginModalRef.value.closeModal();
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

</style>