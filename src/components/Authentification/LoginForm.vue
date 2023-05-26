<template>
    <form class="loginForm" @submit="">

        <!--Input Fields-->
        <input type="text" name="vorname" v-model="vorname" placeholder="vorname">
        <div>{{ errors.vorname }}</div>
        <input type="text" name="nachname" v-model="nachname" placeholder="nachname">
        <div>{{ errors.nachname }}</div>

        <!--Submit-->
        <button v-if="meta.valid">Submit</button>

    </form>
</template>

<script setup>

import {useForm} from "vee-validate";

const validationSchema = {
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

const {meta, errors, useFieldModel} = useForm({
    validationSchema: validationSchema,
    initialValues: {
        nachname: '',
        vorname: ''
    }
})

const [vorname, nachname] = useFieldModel(['vorname', 'nachname']);

</script>

<style lang="scss" scoped>

.loginForm {
  @apply flex flex-col space-y-3 items-center
}

</style>