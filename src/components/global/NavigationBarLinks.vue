<template>
  <li>
    <RouterLink to="/dashboard">Home</RouterLink>
  </li>
  <li>
    <RouterLink to="/search">Suche</RouterLink>
  </li>
  <li>
    <RouterLink to="/calendar">Kalender</RouterLink>
  </li>
  <li>
    <RouterLink to="/inbox">Inbox</RouterLink>
  </li>
  <li>
    <RouterLink to="/settings">Settings</RouterLink>
  </li>
  <li class="text-mainOrange" @click="userStore.logout">Logout</li>
</template>

<script setup>
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
