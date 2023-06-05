<template>
  <nav class="sticky top-0 z-[1000]">

    <!--Container-->
    <div class="w-full bg-white shadow-xl px-4 md:pr-12 py-4 flex justify-between items-center">

      <!--Branding-->
      <div class="hidden md:block text-xl font-bold text-white bg-primary p-1 px-2">
        Nachhilfe.Wien
      </div>

      <!--Links-->
      <div class="flex items-center space-x-4">
        <div class="routerLink">
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div class="routerLink">
          <RouterLink :to="`/profile/${userId}`">Settings</RouterLink>
        </div>
        <div class="routerLink">
          <RouterLink to="/messages">Messages</RouterLink>
        </div>
        <div class="routerLink">
          <RouterLink to="/search">Search</RouterLink>
        </div>
      </div>

      <!--Slot for Register and Login Buttons-->
      <div>
        <slot/>
      </div>
    </div>


  </nav>
</template>

<script setup>

import {computed} from "vue";

//get the user's ID from local storage
const userId = computed(() => {
  const id = localStorage.getItem('userId');
  if (id) {
    return id;
  } else {
    return 0;
  }
});

</script>
<style lang="scss" scoped>

.hiddenLinks {
  display: none;
}

.router-link-active {
  @apply text-accent underline underline-offset-4
}

.routerLink {
  @apply text-right text-primary font-bold text-sm md:text-base
}

</style>