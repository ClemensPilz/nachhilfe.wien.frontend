<template>
    <form class="loginForm" @submit="testForm">
        <MyInput name="vorname"/>
        <MyInput name="nachname"/>
        <button v-if="meta.valid">Submit</button>
        <div>
            Value is: {{formValue}}
        </div>
    </form>
</template>

<script setup>

import MyInput from "@/components/Login/MyInput.vue";
import {useForm} from "vee-validate";


const simpleSchema = {
    vorname(value) {
        if (value.trim().length < 4) {
            return "Must be four characters or more."
        }
        return true;
    },

    nachname(value) {
        if (value.trim().length < 7) {
            return "Must be seven characters or more."
        }

        return true;
    }
}

const { meta } = useForm({
    validationSchema: simpleSchema,
    initialValues: {
        nachname: '',
        vorname: ''
    }
})

</script>

<style lang="scss" scoped>

.loginForm {
    @apply flex flex-col space-y-3 items-center
}

</style>