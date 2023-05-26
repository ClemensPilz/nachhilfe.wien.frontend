<template>
    <div class="absolute scale-y-110 w-full h-full bg-zinc-800 bg-opacity-70 z-40">
        <div class="mt-20 mx-auto text-center">
            <button @click="$emit('clicked')">Login</button>
            <LoginForm />
        </div>
    </div>
</template>

<script setup>


import LoginForm from "@/components/Authentification/LoginForm.vue";
</script>

<style lang="scss" scoped>



</style>