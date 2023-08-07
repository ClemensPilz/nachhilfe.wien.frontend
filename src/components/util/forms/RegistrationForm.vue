<template>
  <form>
    <label for="email">E-Mail:</label>
    <input type="email" name="email" v-model="email" placeholder="E-Mail" />
    <div class="error">{{ errors.email }}</div>

    <label for="firstname">Vorname:</label>
    <input
      type="text"
      name="firstname"
      v-model="firstname"
      placeholder="Vorname"
    />
    <div class="error">{{ errors.firstname }}</div>

    <label for="lastname">Nachname:</label>
    <input
      type="text"
      name="lastname"
      v-model="lastname"
      placeholder="Nachname"
    />
    <div class="error">{{ errors.lastname }}</div>

    <label for="birthdate">Geburtsdatum:</label>
    <input
      type="date"
      name="birthdate"
      v-model="birthdate"
      placeholder="Geburtsdatum"
      @change="console.log(birthdate)"
    />
    <div class="error">{{ errors.birthdate }}</div>

    <label for="description">Über mich:</label>
    <input
      type="text"
      name="description"
      v-model="description"
      placeholder="Über mich..."
    />
    <div class="error">{{ errors.description }}</div>

    <label for="password">Passwort:</label>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="Passwort"
    />
    <div class="error">{{ errors.password }}</div>

    <div
      class="my-2 flex flex-col items-center space-y-2 border-y-2 border-gray-200 py-2"
    >
      <label class="text-black" for="type">Ich möchte...</label>
      <select class="typeSelect" v-model="type" name="type" id="type">
        <option value="Student">Nachhilfe erhalten</option>
        <option value="Teacher">Selbst unterrichten</option>
      </select>
    </div>

    <div class="mt-2 flex justify-around">
      <ButtonRegular
        @click="appStore.resetModals()"
        class="bg-secondary"
        text="Zurück"
      />
      <ButtonRegular @click="register" class="bg-mainOrange" text="Register" />
    </div>
  </form>
</template>

<script setup>
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import { useForm } from "vee-validate";
import { ref } from "vue";
import axios from "axios";
import router from "@/router";
import { useUserStore } from "@/stores/user";
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
const userStore = useUserStore();
const type = ref("Student");
const isCalling = ref(false);

// Validation
const validationSchema = {
  email(value) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return "Gültige E-Mail-Adresse eingeben";
    }
    return true;
  },

  password(value) {
    if (value.trim().length < 8) {
      return "Mind. 8 Zeichen";
    }
    return true;
  },

  firstname(value) {
    if (value.trim().length < 3) {
      return "Namen eingeben";
    }
    return true;
  },

  lastname(value) {
    if (value.trim().length < 3) {
      return "Namen eingeben";
    }
    return true;
  },

  description(value) {
    if (value.trim().length < 20) {
      return "Erzähle über dich";
    } else if (value.trim().length > 200) {
      return "Maximal 200 Zeichen";
    }
    return true;
  },

  birthdate(value) {
    if (value) {
      try {
        const limit = new Date(2023, 1, 1);
        const date = new Date(value);
        if (date < limit) {
          return true;
        }
      } catch (e) {
        console.log(e);
      }
    }
    return "Datum ungültig";
  },
};

const { meta, errors, useFieldModel } = useForm({
  validationSchema: validationSchema,
  initialValues: {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    birthdate: "2001-01-01",
    description: "",
  },
});

const [email, password, firstname, lastname, birthdate, description] =
  useFieldModel([
    "email",
    "password",
    "firstname",
    "lastname",
    "birthdate",
    "description",
  ]);

//Posts new user to backend and then authenticates the user with userStore.auth().
async function register() {
  if (!meta.value.valid && isCalling.value) {
    return;
  }

  const requestUrl = `${userStore.url}/auth/create-${type.value.toLowerCase()}`;
  isCalling.value = true;
  try {
    const response = await axios({
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      url: requestUrl,
      data: {
        firstName: firstname.value,
        lastName: lastname.value,
        birthdate: birthdate.value,
        profile: {
          password: password.value,
          email: email.value,
          active: true,
          description: description.value,
        },
      },
    });

    if (response.status === 201) {
      const res = await userStore.auth({
        email: email.value,
        password: password.value,
      });
      if (res.status === 1) {
        await router.push(`/dashboard`);
      } else {
        alert("Fehler beim Registrieren!");
      }
    }
  } catch (e) {
    console.log(e);
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
