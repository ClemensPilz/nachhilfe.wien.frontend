<template>
  <nav class="sticky top-0 z-[1000]">

    <!--Container-->
    <div class="w-full bg-white shadow-xl px-4 md:pr-12 py-4 flex justify-between items-center">

      <!--Branding-->
      <div class="text-xl font-bold text-white bg-primary p-1 px-2">
        Nachhilfe.Wien
      </div>

      <!--Toggle-Button for Mobile Links-->
      <div class="text-xl text-accent md:hidden" @click="toggle">
        X
      </div>

      <!--Desktop-Links-->
      <div class="hidden md:flex md:items-center space-x-4">
        <div class="routerLink">
          <RouterLink to="/test">Home</RouterLink>
        </div>
        <div class="routerLink">
          <RouterLink to="/profile/123">Profile</RouterLink>
        </div>
        <div class="routerLink">
          <RouterLink to="/messages">Messages</RouterLink>
        </div>
        <div class="routerLink">
          <RouterLink to="/search">Search</RouterLink>
        </div>
        <div>
          <LoginModalButton />
        </div>
        <div>
          <slot />
        </div>



      </div>
    </div>

    <!--Mobile-Links-->
    <div class="w-ful flex-col p-2 bg-neutral-100 shadow-xl hiddenLinks md:hidden" id="mobileLinks">
      <div class="text-right">
        <RouterLink to="/test">Home</RouterLink>
      </div>
      <div class="text-right">
        <RouterLink to="/profile/123">World</RouterLink>
      </div>
    </div>

  </nav>
</template>

<script setup>
import LoginModalButton from "@/components/authentification/LoginModalButton.vue";

function toggle() {
  const mobileLinks = document.getElementById("mobileLinks");
  mobileLinks.classList.toggle('hiddenLinks');
}

</script>
<style lang="scss" scoped>

.hiddenLinks {
  display: none;
}

.router-link-active {
  @apply text-accent underline underline-offset-4
}

.routerLink {
  @apply text-right text-primary font-bold
}

</style>