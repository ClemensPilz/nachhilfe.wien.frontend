<template>
  <FormModal ref="loginModalRef">
    <CardLarge class="m-0">
      <template v-slot:content>
        <LoginForm @close="closeLoginModal" />
      </template>
    </CardLarge>
  </FormModal>

  <FormModal ref="registrationModalRef">
    <CardLarge class="m-0">
      <template v-slot:content>
        <RegistrationForm @close="closeRegistrationModal" />
      </template>
    </CardLarge>
  </FormModal>

  <div class="relative w-full bg-background">
    <nav>
      <!--Logo-->
      <img
        src="@/assets/images/logos/nachhilfewien-logo.svg"
        alt="Logo von nachhilfe.wien"
        class="w-1/6 hover:cursor-pointer"
        @click="
          () => {
            router.push('/');
          }
        "
      />

      <!--Desktop-Nav-Items-->
      <div v-if="userStore.isAuthenticated" class="hidden sm:block">
        <ul>
          <NavigationBarLinks />
        </ul>
      </div>

      <!--Mobile-Hamburgerbutton-->
      <div
        v-if="userStore.isAuthenticated"
        class="block w-full text-right sm:hidden"
      >
        <span @click="showMobile = !showMobile">Hello Oida</span>
      </div>

      <!--Login-Buttons if user is not authenticated-->
      <ul v-if="!userStore.isAuthenticated">
        <li class="text-mainBlue" @click="openLoginModal">Login</li>
        <li class="text-mainBlue" @click="openRegistrationModal">Register</li>
      </ul>
    </nav>
  </div>

  <!--Mobile-Nav-Items-->
  <div
    class="bottom-0 flex min-h-screen w-full flex-col bg-mainBlue sm:hidden"
    :class="{ block: showMobile, hidden: !showMobile }"
    @click="showMobile = false"
  >
    Hello sers
    <NavigationBarLinks />
  </div>
</template>

<script setup>
import FormModal from "@/components/util/modals/FormModal.vue";
import CardLarge from "@/components/util/cards/CardLarge.vue";

import { ref, watch } from "vue";
import LoginForm from "@/components/util/forms/LoginForm.vue";
import RegistrationForm from "@/components/util/forms/RegistrationForm.vue";
import router from "@/router";
import { useUserStore } from "@/stores/user";
import NavigationBarLinks from "@/components/global/NavigationBarLinks.vue";

const loginModalRef = ref(null);
const registrationModalRef = ref(null);
const userStore = useUserStore();
const showMobile = ref(false);

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

watch(
  () => userStore.showRegistrationModal,
  (newVal) => {
    if (newVal) {
      openRegistrationModal();
    } else {
      closeRegistrationModal();
    }
  },
);
</script>

<style lang="scss" scoped>
nav {
  @apply mx-auto flex
  max-w-7xl items-center
  justify-between bg-background px-8 pb-16
  pt-8;
}

#logo {
  @apply text-mainOrange;
}

ul {
  @apply flex gap-8 text-xl
  md:gap-12;
}

li {
  @apply hover:cursor-pointer;
}

.router-link-active {
  @apply underline decoration-secondary underline-offset-4;
}
</style>
