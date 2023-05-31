<template>
    <div>
        <h1>Hello User {{route.params.userId}}</h1>
    </div>


</template>

<script setup>

import {useRoute} from "vue-router";

const route = useRoute();

</script>

<style lang="scss" scoped>

</style>