<template>

  <div class="container mx-auto max-w-6xl">

    <!--Nav-->
    <nav-bar />

    <PublicProfile :profile="profile" :key="userId"/>

    <!--Link to userprofile 2 for testing purposes-->
    <ButtonAccent text="TestProfile" @click="test"></ButtonAccent>
  </div>


</template>

<script setup>

import {useRoute} from "vue-router";
import PublicProfile from "@/components/profile/PublicProfile.vue";
import PublicComments from "@/components/profile/PublicComments.vue";
import axios from "axios";
import {computed, onMounted, ref} from "vue";
import NavBar from "@/components/global/NavBar.vue";
import {useUserStore} from "@/stores/user";
import router from "@/router";
import ButtonAccent from "@/components/util/elements/ButtonAccent.vue";

const route = useRoute();
const userStore = useUserStore();
const userId = route.params.userId;
const profile = ref();

async function test() {
  await router.push('/profile/2');
  await getUserProfile(2);
}

async function getUserProfile(id) {
  try {
    const response = await axios({
      method: 'get',
      url: `${userStore.url}/user/${id}`
    });
    profile.value = response.data;
  } catch (e) {
    console.log(e);
  }
}

onMounted(() => getUserProfile(userId));


</script>

<style lang="scss" scoped>

</style>