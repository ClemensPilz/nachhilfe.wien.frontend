<template>
  <div v-if="props.isOpen" @click="closeModal" @keydown.enter="editUser"
       class="fixed inset-0 flex items-center justify-center z-[1001] bg-black bg-opacity-50">
    <div @click.stop class="max-h-screen bg-white py-6 px-10 mx-2 mt-20 rounded-xl">
      <h2 class="text-2xl mb-4">{{ title }}</h2>
      <div >
        <form>
          <div class="flex flex-col">
            <label for="Vorname">Vorname:</label>
            <input type="text" name="Vorname" v-model="firstname" placeholder="Vorname">

            <label for="Nachname">Nachname:</label>
            <input type="text" name="Nachname" v-model="lastname" placeholder="Nachname">

            <label for="Geburtstag">Geburtstag: </label>
            <input type="date" name="Geburtstag" v-model="birthdate" placeholder="Geburtstag">

            <label for="Beschreibung">Geburtstag: </label>
            <input type="text" name="Beschreibung" v-model="description" placeholder="Beschreibung">

          </div>

        </form>
      </div>

      <!--Buttons-->
      <div class="flex gap-2 justify-end">
        <button class="mt-4 w-fit py-2 px-4 bg-lightPrimary text-white rounded-xl" @click="closeModal">Abbrechen</button>
        <button class="mt-4 w-fit py-2 px-4 bg-accent text-white rounded-xl" @click="editUser">Login</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useForm} from "vee-validate";
import {useUserStore} from "@/stores/user";
import {useRouter} from "vue-router";
import {useAdminStore} from "@/stores/admin";
import axios from "axios";

const userStore = useUserStore();
const adminStore = useAdminStore();
const user = computed(() => userStore.user)
const router = useRouter();

const firstname = ref(null);
const lastname = ref(null);
const birthdate = ref(null);
const description = ref(null);

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean
  }
})

const emit = defineEmits(['update:openEdit'])

const closeModal = () => {
  emit('update:openEdit', false)
}

const editUser = async () => {
  const requestUrl = `${userStore.url}/admin/edit-user/${adminStore.foundUser.userId}`;
  try {
    const response = await axios({
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      data: {
        "firstName": firstname.value,
        "lastName": lastname.value,
        "birthdate": birthdate.value,
        "description": description.value
      },
      url: requestUrl
    })
    firstname.value = null;
    lastname.value = null;
    birthdate.value = null;
    description.value = null;
    adminStore.findById(adminStore.foundUser.userId)
    closeModal();
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
