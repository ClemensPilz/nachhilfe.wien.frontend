<template>
  <div v-if="props.isOpen" @click="closeModal" @keydown.enter="login"
       class="fixed inset-0 flex items-center justify-center z-[1001] bg-black bg-opacity-50">
    <div @click.stop="" class="max-h-screen bg-white py-6 px-10 mx-2 mt-20 rounded-xl">
      <h2 class="text-2xl mb-4">{{ title }}</h2>
      <div>
        <slot/>
        <form>
          <label for="email">E-Mail:</label>
          <input type="email" name="email" v-model="email" placeholder="E-Mail">
          <div class="error">{{ errors.email }}</div>

          <label for="password">Passwort:</label>
          <input type="password" name="password" v-model="password" placeholder="Passwort">
          <div class="error">{{ errors.password }}</div>
        </form>
      </div>

      <!--Buttons-->
      <div class="flex gap-2 justify-end">
        <button class="mt-4 w-fit py-2 px-4 bg-lightPrimary text-white rounded-xl" @click="closeModal">Close</button>
        <button class="mt-4 w-fit py-2 px-4 bg-accent text-white rounded-xl" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useForm} from "vee-validate";
import {useUserStore} from "@/stores/user";
import {useRouter} from "vue-router";

const userStore = useUserStore();
const user = computed(() => userStore.user)
const router = useRouter();

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean
  }
})

const emit = defineEmits(['update:loginOpen'])

const closeModal = () => {
  emit('update:loginOpen', false)
}

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
  }
}

const {meta, errors, useFieldModel} = useForm({
  validationSchema: validationSchema,
  initialValues: {
    email: '',
    password: ''
  }
})

const [email, password]
    = useFieldModel(['email', 'password']);


//Rest-Request

const type = ref('Student');

async function login() {
  try {
    const response = await userStore.auth({'email': email.value, 'password': password.value});
    if (response.status === 1) {
      await router.push(`/profile/${response.data.userId}`);
    }
  } catch (e) {
    console.log(e);
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
