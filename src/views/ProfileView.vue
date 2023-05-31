<template>

    <nav>
        <NavBar />
    </nav>
    <div class="container mx-auto flex flex-wrap">

        <PublicProfile :profile="profile"/>
        <PublicComments :profile="profile"/>

    </div>


</template>

<script setup>

import {useRoute} from "vue-router";
import PublicProfile from "@/components/profile/PublicProfile.vue";
import PublicComments from "@/components/profile/PublicComments.vue";
import axios from "axios";
import {onMounted, ref} from "vue";
import NavBar from "@/components/util/NavBar.vue";

const route = useRoute();
const userId = route.params.userId;
const profile = ref();

async function getUserProfile(userId) {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3000/user'
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