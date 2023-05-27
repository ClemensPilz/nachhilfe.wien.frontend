<template>
    <div class="absolute scale-y-110 w-full h-full bg-zinc-900 bg-opacity-95 z-40">
        <div class="mt-20 mx-auto text-center">
            <slot />
        </div>
    </div>
</template>

<script setup>


import LoginForm from "@/components/authentification/LoginForm.vue";
</script>

<style lang="scss" scoped>



</style>