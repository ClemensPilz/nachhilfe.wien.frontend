<template>
    <div>
        <h1>Hello User {{route.params.userId}}</h1>
    </div>

    <br>
    <div class="container mx-auto flex flex-wrap">

    <PublicProfile class="w-full md:w-2/3" :userId="parseInt(userId)" />
    <PublicComments class="w-full md:w-1/3" />
    </div>


</template>

<script setup>

import {useRoute} from "vue-router";
import PublicProfile from "@/components/profile/PublicProfile.vue";
import PublicComments from "@/components/profile/PublicComments.vue";

const route = useRoute();
const userId = route.params.userId;

</script>

<style lang="scss" scoped>

</style>