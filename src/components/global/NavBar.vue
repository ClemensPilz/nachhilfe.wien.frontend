<template>
  <!--@todo: echte Modals für Login/Registration, Nav fertigstellen-->

  <nav class="sticky top-0 z-[1000]">
    <!--Container-->
    <div class="w-full bg-lightPrimary shadow-xl px-4 md:pr-12 py-4 flex justify-between">

      <!--Branding-->
      <div class="text-xl text-accent">
        Nachhilfe.Wien
      </div>

      <!--Toggle-Button for Mobile Links-->
      <div class="text-xl text-accent md:hidden" @click="toggle">
        X
      </div>

      <!--Desktop-Links-->
      <div class="hidden md:flex space-x-2">
        <div class="text-right">
          <RouterLink to="/test">Home</RouterLink>
        </div>
        <div class="text-right">
          <RouterLink to="/profile/123">World</RouterLink>
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

import {onMounted} from "vue";
import {useRouter, useRoute} from "vue-router";

const route = useRoute;


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
  @apply text-accent
}


</style>