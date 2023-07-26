<template>
  <ButtonLarge
    class="bg-mainOrange"
    text="Mein Profil"
    @click="router.push(`/profile/${userStore.user.userId}`)"
  />
  <ButtonLarge
    class="bg-secondary"
    text="Hilfe"
    @click="appStore.sendMessage(21, true)"
  />
  <ButtonLarge
    class="bg-secondary"
    text="FAQ"
    @click="
      () => {
        router.push('/faq');
      }
    "
  />
  <ButtonLarge
    v-if="userType === 'ADMIN'"
    text="Admin"
    class="bg-mainOrange"
    @click="
      () => {
        router.push('/admin');
      }
    "
  />
</template>

<script setup>
import ButtonLarge from "@/components/util/buttons/ButtonLarge.vue";
import { useRouter } from "vue-router";
import { useAppStore } from "@/stores/app";
import { useUserStore } from "@/stores/user";

const appStore = useAppStore();
const userStore = useUserStore();
const router = useRouter();

defineProps({ userType: String });
</script>

<style lang="scss" scoped></style>
