<template>
  <div v-if="props.isOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="max-h-screen bg-white py-6 px-10 mx-2 mt-20 rounded-xl">
      <h2 class="text-2xl mb-4">{{ title }}</h2>
      <div>
        <slot/>

        <!--Form-->
        <form>

          <!--Input Fields-->
          <label for="email">E-Mail:</label>
          <input type="email" name="email" v-model="email" placeholder="E-Mail">
          <div class="error">{{ errors.email }}</div>

          <label for="firstname">Vorname:</label>
          <input type="text" name="firstname" v-model="firstname" placeholder="Vorname">
          <div class="error">{{ errors.firstname }}</div>

          <label for="lastname">Nachname:</label>
          <input type="text" name="lastname" v-model="lastname" placeholder="Nachname">
          <div class="error">{{ errors.lastname }}</div>

          <label for="username">Username:</label>
          <input type="text" name="username" v-model="username" placeholder="Username">
          <div class="error">{{ errors.username }}</div>

          <label for="birthdate">Geburtsdatum:</label>
          <input type="date" name="birthdate" v-model="birthdate" placeholder="Geburtsdatum">
          <div class="error">{{ errors.birthdate }}</div>

          <label for="description">Über mich:</label>
          <input type="text" name="description" v-model="description" placeholder="Über mich...">
          <div class="error">{{ errors.description }}</div>

          <label for="password">Passwort:</label>
          <input type="password" name="password" v-model="password" placeholder="Passwort">
          <div class="error">{{ errors.password }}</div>

          <div class="border-y-2 border-gray-200 flex flex-col space-y-2 items-center py-2 my-2">
            <label class="text-black" for="type">Ich möchte...</label>
            <select class="typeSelect" v-model="type" name="type" id="type">
              <option value="Student">Nachhilfe erhalten</option>
              <option value="Teacher">Selbst unterrichten</option>
            </select>
          </div>
        </form>


      </div>
      <div class="flex gap-2 justify-end">

        <button class="mt-4 w-fit py-2 px-4 bg-lightPrimary text-white rounded-xl" @click="closeModal">Close</button>
        <button class="mt-4 w-fit py-2 px-4 bg-accent text-white rounded-xl" @click="register">Anmelden</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useForm} from "vee-validate";
import axios from "axios";

const type = ref('Student');

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


const props = defineProps({
  title: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean
  }
})

const emit = defineEmits(['update:registerOpen'])

const closeModal = () => {
  emit('update:registerOpen', false)
}

async function register() {
  const requestUrl = `http://localhost:8080/user/create${type.value}`
  if (meta.value.valid) {
    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json"
        },
        method: 'post',
        url: requestUrl,
        data: {
          "firstName": firstname.value,
          "lastName": lastname.value,
          "birthdate": '1992-01-01',
          "profile": {
            "userName": username.value,
            "password": password.value,
            "email": email.value,
            "active": true,
            "description": description.value
          }
        }
      })
    console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log('invalid!');
  }


}
</script>

<style scoped>
label {
  @apply text-primary text-xs
}

input {
  @apply text-gray-200 m-2 py-1 px-2 rounded-lg focus:outline-none bg-gray-500 appearance-none
}

.error {
  @apply text-xs text-red-600 italic
}
</style>
