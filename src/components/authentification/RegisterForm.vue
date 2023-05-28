<template>
    <div class="exitButton" @click="$emit('exit')">X</div>
    <form class="loginForm">

        <!--Input Fields-->
        <input type="email" name="email" v-model="email" placeholder="E-Mail">
        <div class="error">{{ errors.email }}</div>

        <input type="text" name="firstname" v-model="firstname" placeholder="Vorname">
        <div class="error">{{ errors.firstname }}</div>

        <input type="text" name="lastname" v-model="lastname" placeholder="Nachname">
        <div class="error">{{ errors.lastname }}</div>

        <input type="text" name="username" v-model="username" placeholder="Username">
        <div class="error">{{ errors.username }}</div>

        <input type="date" name="birthdate" v-model="birthdate" placeholder="Geburtsdatum">
        <div class="error">{{ errors.birthdate }}</div>

        <input type="text" name="description" v-model="description" placeholder="Über mich...">
        <div class="error">{{ errors.description }}</div>

        <input type="password" name="password" v-model="password" placeholder="Passwort">
        <div class="error">{{ errors.password }}</div>

        <div class="border-y-2 border-gray-200 flex flex-col space-y-2 items-center py-6 my-6">
        <label class="text-black" for="type">Ich möchte...</label>
        <select class="typeSelect" v-model="type" name="type" id="type">
            <option value="student">Nachhilfe erhalten</option>
            <option value="teacher">Selbst unterrichten</option>
        </select>
        </div>

        <FormButton v-if="meta.valid" text="Register" @click="register"/>
        <FormButtonInactive v-else text="Register" />
    </form>

</template>


<script setup>

import {useForm} from "vee-validate";
import FormButton from "@/components/util/FormButton.vue";
import {ref} from 'vue';
import FormButtonInactive from "@/components/util/FormButtonInactive.vue";

function register() {
    console.log('register');
}

const emits = defineEmits(['exit']);
const type = ref('student');

// Validation
const validationSchema = {
    email(value) {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
            return "Bitte eine gültige E-Mail-Adresse eingeben"
        }
        return true
    },

    password(value) {
        if (value.trim().length < 8) {
            return "Mindestens 8 Zeichen"
        }
        return true;
    },

    firstname(value) {
        if (value.trim().length < 3) {
            return "Bitte Namen eingeben"
        }
        return true
    },

    lastname(value) {
        if (value.trim().length < 3) {
            return "Bitte Namen eingeben"
        }
        return true
    },

    description(value) {
        if (value.trim().length < 20) {
            return "Erzähle über dich"
        }
        return true
    },

    username(value) {
        if (value.trim().length < 5) {
            return "Mindestens 5 Zeichen"
        }
        return true
    },

    birthdate(value) {
        if (value) {
            try {
                const limit = new Date(2023, 1, 1);
                const date = new Date(value);
                if (date < limit) {
                    return true
                }
            } catch (e) {
                console.log(e);
            }
        }
        return "Datum ungültig"
    }

}

const {meta, errors, useFieldModel} = useForm({
    validationSchema: validationSchema,
    initialValues: {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        username: '',
        birthdate: '2001-01-01',
        description: ''
    }
})

const [email, password, firstname, lastname, username, birthdate, description]
    = useFieldModel(['email', 'password', 'firstname', 'lastname', 'username', 'birthdate', 'description']);

</script>

<style lang="scss" scoped>


.exitButton {
    @apply w-fit ml-auto p-5 text-white  hover:cursor-pointer select-none
}

.loginForm {
    @apply flex flex-col items-center p-4 w-fit mx-auto
}

input {
    @apply text-gray-200 m-2 py-1 px-2 rounded-lg focus:outline-none bg-gray-500 appearance-none w-full
}

.error {
    @apply text-xs text-red-600 italic
}

.typeSelect {
    @apply py-1 px-2 mb-4 rounded-lg focus:outline-none bg-gray-500 text-white
}

</style>