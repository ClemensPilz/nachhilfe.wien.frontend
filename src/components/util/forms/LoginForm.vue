<template>
  <form class="w-full flex flex-col bg-background">

    <label for="email" class="text-small text-secondary">E-Mail:</label>
    <input type="email" class="text-p" name="email" v-model="email" placeholder="E-Mail">
    <div class="error">{{ errors.email }}</div>

    <label for="password" class="text-small text-secondary">Passwort:</label>
    <input type="password" class="text-p" name="password" v-model="password" placeholder="Passwort">
    <div class="error">{{ errors.password }}</div>

    <div class="mt-2 flex justify-around">
      <ButtonRegular @click="$emit('close')" class="bg-secondary" text="Zurück"/>
      <ButtonRegular @click="login" class="bg-mainOrange" text="Login"/>

    </div>

  </form>
</template>

<script setup>
import {useUserStore} from "@/stores/user";
import {useRouter} from "vue-router";
import {useForm} from "vee-validate";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import {ref} from "vue";

const userStore = useUserStore();
const user = userStore.user;
const router = useRouter();
const isCalling = ref(false);

const emit = defineEmits(['close'])


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
async function login() {
  if (!meta.value.valid || isCalling.value) {
    return;
  }

  console.log('sdfasfd')
  isCalling.value = true;
  try {
    const response = await userStore.auth({'email': email.value, 'password': password.value});
    if (response.status === 1) {
      await router.push(`/dashboard`);
    } else {
      alert('Fehler beim Einloggen!')
    }
  } catch (e) {
    console.log(e);
    alert('Fehler beim Einloggen!')
  } finally {
    isCalling.value = false;
    emit('close');
  }
}
</script>

<style lang="scss" scoped>

input {
  @apply px-4 py-2 m-2 rounded-3xl
}

.error {
  @apply text-red-700
}

</style>