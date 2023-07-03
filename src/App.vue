
<template>
  <header></header>

  <RouterView :key="$route.fullPath" />
</template>

<script setup>
import { RouterView } from 'vue-router'
import {onMounted} from "vue";
import axios from "axios";
import {useUserStore} from "@/stores/user";
import router from "@/router";

const userStore = useUserStore();


async function initApp() {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token');

    try {
      const response = await userStore.auth({token});

    } catch (e) {
      console.log(e);
      await router.push('/');
    }

  } else {
    await router.push('/');
  }
}

onMounted(() => initApp());

</script>

<style scoped></style>
