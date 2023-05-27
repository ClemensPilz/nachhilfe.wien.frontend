<template>
    <div class="exitButton" @click="$emit('exit')">X</div>
    <form class="loginForm">

        <!--Input Fields-->
        <input type="email" name="email" v-model="email" placeholder="E-Mail">
        <div class="error">{{ errors.email }}</div>

        <input type="password" name="password" v-model="password" placeholder="Passwort">
        <div class="error">{{ errors.password }}</div>

        <!--Submit-->
        <FormButton v-if="meta.valid" text="Login" @click="login"/>
        <FormButtonInactive v-else text="Login" />
    </form>

</template>


<script setup>

import {useForm} from "vee-validate";
import FormButton from "@/components/util/FormButton.vue";
import FormButtonInactive from "@/components/util/FormButtonInactive.vue";

function login(){
    console.log('login');
}

const emits = defineEmits(['exit']);

const validationSchema = {
    email(value) {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
            return "Bitte eine gültige E-Mail-Adresse eingeben"
        }
        return true
    },

    password(value) {
        if (value.trim().length < 8) {
            return "Passwort muss mindestens 8 Zeichen lang sein"
        }
        return true;
    }
}

const {meta, errors, useFieldModel} = useForm({
    validationSchema: validationSchema,
    initialValues: {
        email: '',
        password: ''
    }
})

const [email, password] = useFieldModel(['email', 'password']);

</script>

<style lang="scss" scoped>

.exitButton {
    @apply w-fit ml-auto p-5 text-white  hover:cursor-pointer select-none
}

.loginForm {
  @apply flex flex-col space-y-3 items-center p-4 w-fit mx-auto
}

input {
    @apply text-gray-200 m-2 py-1 px-2 rounded-lg focus:outline-none bg-gray-500 appearance-none
}

.error {
    @apply text-xs text-red-600 italic
}

</style>