<template>
  <LoginModal>
    <CardLarge class="m-0">
      <template v-slot:content>
        <LoginForm />
      </template>
    </CardLarge>
  </LoginModal>

  <RegistrationModal>
    <CardLarge class="m-0">
      <template v-slot:content>
        <RegistrationForm />
      </template>
    </CardLarge>
  </RegistrationModal>

  <div class="relative w-full bg-background">
    <nav>
      <!--Logo-->
      <img
        src="@/assets/images/logos/nachhilfewien-logo.svg"
        alt="Logo von nachhilfe.wien"
        class="hidden w-1/6 hover:cursor-pointer sm:block"
        @click="
          () => {
            router.push('/');
          }
        "
      />
      <img
        src="@/assets/images/logos/nachhilfewien-logo.svg"
        alt="Logo von nachhilfe.wien"
        class="block w-1/3 hover:cursor-pointer sm:hidden"
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
        <ChevronDownIcon
          class="inline w-12 text-mainOrange transition-all duration-200 hover:cursor-pointer"
          :class="{ 'rotate-180': showMobile }"
          @click="showMobile = !showMobile"
        />
      </div>

      <!--Login-Buttons if user is not authenticated-->
      <ul v-if="!userStore.isAuthenticated">
        <li>
          <RouterLink to="/about">Our Team</RouterLink>
        </li>
        <li
          class="text-mainBlue"
          @click="appStore.loginModalActive = !appStore.loginModalActive"
        >
          Login
        </li>
        <li
          class="text-mainBlue"
          @click="
            appStore.registrationModalActive = !appStore.registrationModalActive
          "
        >
          Register
        </li>
      </ul>
    </nav>
  </div>

  <!--Mobile-Nav-Items-->
  <div
    class="bottom-0 flex w-full flex-col bg-white sm:hidden"
    :class="{ block: showMobile, hidden: !showMobile }"
    @click="showMobile = false"
  >
    <ul class="mx-8 my-6 flex flex-col items-end">
      <NavigationBarLinks />
    </ul>
  </div>
</template>

<script setup>
import CardLarge from "@/components/util/cards/CardLarge.vue";
import { ref } from "vue";
import LoginForm from "@/components/util/forms/LoginForm.vue";
import RegistrationForm from "@/components/util/forms/RegistrationForm.vue";
import router from "@/router";
import { useUserStore } from "@/stores/user";
import NavigationBarLinks from "@/components/global/NavigationBarLinks.vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { useAppStore } from "@/stores/app";
import LoginModal from "@/components/util/modals/LoginModal.vue";
import RegistrationModal from "@/components/util/modals/RegistrationModal.vue";

const userStore = useUserStore();
const appStore = useAppStore();
const showMobile = ref(false);
</script>

<style lang="scss" scoped>
nav {
  @apply mx-auto flex
  max-w-7xl items-center
  justify-between bg-background px-8 pb-4 pt-2 md:pb-16
  md:pt-8;
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
