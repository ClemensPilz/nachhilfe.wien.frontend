<template>

  <div class="container mx-auto max-w-6xl">

    <!--Nav-->
    <nav-bar />

    <PublicProfile :profile="profile" :key="userId"/>

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

async function getUserProfile(id) {
  try {
    const response = await axios({
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      method: 'get',
      url: `${userStore.url}/user/${id}`
    });
    profile.value = response.data;
    console.log('---')
    console.log(profile.value.feedbacks)
  } catch (e) {
    console.log(e);
  }
}

onMounted(() => getUserProfile(userId));


</script>

<style lang="scss" scoped>

</style>