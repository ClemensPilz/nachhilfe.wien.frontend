<template>
  <ButtonLarge
    class="bg-secondary"
    text="Kontakt"
    @click="
      () => {
        router.push('/about');
      }
    "
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

const router = useRouter();

defineProps({ userType: String });
</script>

<style lang="scss" scoped></style>
