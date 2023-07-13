<template>
  <nav class="navBar" ref="navBar" id="navBar">

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
          <RouterLink to="/calendar">Calendar</RouterLink>
        </div>
        <div class="routerLink">
          <RouterLink :to="`/profile/${userId}`">Profile</RouterLink>
        </div>
        <div class="routerLink">
          <RouterLink to="/inbox">Inbox</RouterLink>
        </div>
        <div class="routerLink">
          <RouterLink to="/test">Test</RouterLink>
        </div>
        <div class="routerLink">
          <RouterLink to="/search">Search</RouterLink>
        </div>
        <div class="routerLink">
          <RouterLink to="/about">About Us</RouterLink>
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

import {computed, onBeforeUnmount, onMounted, ref} from "vue";

//get the user's ID from local storage
const userId = computed(() => {
  const id = localStorage.getItem('userId');
  if (id) {
    return id;
  } else {
    return 0;
  }
});

const navBar = ref();


function throttle(func, delay) {
  let lastCall = 0;
  return function() {
    let now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func.apply(this, arguments);
  };
}

let onScroll = throttle(() => {
  let navbar = document.getElementById('navBar');
  if(window.pageYOffset > 50) {
    navbar.classList.add('fade-navBar');
  } else {
    navbar.classList.remove('fade-navBar');
  }
}, 100)

onMounted(() => {
  window.addEventListener('scroll', onScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
})

</script>
<style lang="scss" scoped>

.navBar {
  transition: opacity 0.6s ease;
  @apply sticky top-0 z-[1000]
}

.fade-navBar {
  opacity: 0.7;
}
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