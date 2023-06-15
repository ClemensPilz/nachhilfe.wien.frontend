
<template>
  <header></header>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import {onMounted} from "vue";
import axios from "axios";
import {useUserStore} from "@/stores/user";

const userStore = useUserStore();


async function initApp() {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token');

    try {
      const response = await userStore.auth({'token': token});

    } catch (e) {
      console.log(e);
    }

  }
}

onMounted(() => initApp());

</script>

<style scoped></style>
