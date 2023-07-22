<template>
  <div class="flex min-h-screen flex-col">
    <header>
      <NavigationBar />
    </header>

    <RouterView :key="$route.fullPath" class="flex-grow-1" />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import router from "@/router";
import NavigationBar from "@/components/global/NavigationBar.vue";

const userStore = useUserStore();

async function initApp() {
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    try {
      const response = await userStore.auth({ token });
      if (response.status !== -1) {
        await router.push("/dashboard");
      } else {
        await router.push("/");
      }
    } catch (e) {
      console.log(e);
      await router.push("/");
    }
  } else {
    await router.push("/");
  }
}
onMounted(() => initApp());
</script>

<style scoped></style>
