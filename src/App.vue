
<template>
  <header></header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {onMounted} from "vue";


async function initApp() {
  console.log('init');
  if (localStorage.getItem('userId')) {
    const userId = localStorage.getItem('userId');

    //use Token to authentificate
    //save Enums in appStore and userInformation in userStore

  }
}

onMounted(() => initApp());

</script>

<style scoped></style>
