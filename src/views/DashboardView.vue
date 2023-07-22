<template>
  <div class="container mx-auto max-w-7xl px-4 pb-4">
    <DashboardTop
      :userType="userType"
      :userImage="userImage"
      :userName="userName"
      class="pb-10"
    />

    <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <DashboardFeed />
    </div>
  </div>
</template>

<script setup>
import DashboardTop from "@/components/dashboard/DashboardTop.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { computed } from "vue";
import DashboardFeed from "@/components/dashboard/DashboardFeed.vue";
const router = useRouter();
const userStore = useUserStore();

const userType = computed(() => {
  return userStore.user.userType || "none";
});

const userImage = computed(() => {
  return userStore.user.image || "none";
});

const userName = computed(() => {
  return userStore.user.firstName;
});
</script>

<style lang="scss" scoped>
a {
  @apply text-mainBlue underline underline-offset-4;
}

img {
  @apply object-cover;
}
</style>
