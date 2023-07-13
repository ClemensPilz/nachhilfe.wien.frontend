<template>
  <div class="container max-w-7xl mx-auto">
    <ProfileSearch @findUser="handleFindUser"/>
    <ProfileFound />
  </div>
</template>

<script setup>

import ProfileSearch from "@/components/administrator/ProfileSearch.vue";
import ProfileFound from "@/components/administrator/ProfileFound.vue";
import {useAdminStore} from "@/stores/admin";

const adminStore = useAdminStore();

const handleFindUser = () => {
  console.log(adminStore.foundUser);
}
</script>

<style lang="scss" scoped>

</style>