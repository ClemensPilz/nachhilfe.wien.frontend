<template>
  <form @submit.prevent>
    <label for="email">E-Mail:</label>
    <input type="email" name="email" v-model="email" placeholder="E-Mail" />
    <div class="error">{{ errors.email }}</div>

    <label for="password">Passwort:</label>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="Passwort"
    />
    <div class="error">{{ errors.password }}</div>

    <div class="mt-2 flex justify-around">
      <ButtonRegular
        @click="appStore.resetModals()"
        class="bg-secondary"
        text="Zurück"
      />
      <ButtonRegular @click="login" class="bg-mainOrange" text="Login" />
    </div>
  </form>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import { ref } from "vue";
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
const userStore = useUserStore();
const user = userStore.user;
const router = useRouter();
const isCalling = ref(false);

const validationSchema = {
  email(value) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return "Bitte eine gültige E-Mail-Adresse eingeben";
    }
    return true;
  },

  password(value) {
    if (value.trim().length < 8) {
      return "Mindestens 8 Zeichen";
    }
    return true;
  },
};

const { meta, errors, useFieldModel } = useForm({
  validationSchema: validationSchema,
  initialValues: {
    email: "",
    password: "",
  },
});

const [email, password] = useFieldModel(["email", "password"]);
async function login() {
  if (!meta.value.valid || isCalling.value) {
    return;
  }
  isCalling.value = true;
  try {
    const response = await userStore.auth({
      email: email.value,
      password: password.value,
    });
    if (response.status === 1) {
      await router.push(`/dashboard`);
    } else {
      alert("Fehler beim Einloggen!");
    }
  } catch (e) {
    console.log(e);
    alert("Fehler beim Einloggen!");
  } finally {
    isCalling.value = false;
    appStore.resetModals();
  }
}
</script>

<style lang="scss" scoped>
form {
  @apply flex max-h-screen w-full flex-col overflow-y-scroll bg-background py-2;
}

label {
  @apply text-small text-secondary;
}

input {
  @apply text-p m-2 rounded-3xl px-4 py-2;
}

.error {
  @apply text-red-700;
}
</style>
