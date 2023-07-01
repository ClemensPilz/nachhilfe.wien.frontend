<template>
  <section id="userData" @keydown.esc="editItem = ''">
    <!--Vorname-->
    <div v-if="editItem !== 'firstName'"
    >Vorname: {{ userStore.user.firstName }}
      <PencilIcon class="h-6 text-primary inline" @click="editItem = 'firstName'"/>
    </div>

    <div v-else class="flex items-center">
      <input type="text" v-model="firstName" name="updateFirstName" id="updateFirstName"
             :placeholder="userStore.user.firstName"
             class="mr-1 p-1 border border-primary rounded">
      <button-secondary text="update" @click="updateFirstName"/>
      <XMarkIcon class="h-6 text-primary inline" @click="editItem = ''"/>
    </div>

    <!--Nachname-->
    <div>Nachname: {{ userStore.user.lastName }}</div>

    <!--E-Mail-->
    <div v-if="editItem !== 'email'">
      <div>E-Mail: {{ userStore.user.email }}
        <PencilIcon class="h-6 text-primary inline" @click="editItem = 'email'"/>
      </div>
    </div>

    <div v-else class="flex items-center">
      <input type="email" v-model="email" name="updateEmail" id="updateEmail" :placeholder="userStore.user.email"
             class="mr-1 p-1 border border-primary rounded">
      <button-secondary text="update" @click="updateEmail"/>
      <XMarkIcon class="h-6 text-primary inline" @click="editItem = ''"/>
    </div>

  </section>
</template>

<script setup>
import {PencilIcon} from "@heroicons/vue/24/outline";
import ButtonSecondary from "@/components/util/elements/ButtonSecondary.vue";
import {useUserStore} from "@/stores/user";
import {computed, ref} from "vue";
import {XMarkIcon} from "@heroicons/vue/20/solid";
import axios from "axios";


const userStore = useUserStore();
const editItem = ref();
const firstName = ref();
const email = ref();

const requestUrl = computed(() => {
  if (userStore.user.userType === 'TEACHER') {
    return `${userStore.url}/teacher/updateTeacher/${userStore.userId}`
  } else {
    return `${userStore.url}/student/updateStudent/${userStore.userId}`
  }
})

async function updateFirstName() {
  try {
    await updateUser('firstName', firstName.value);
    await userStore.auth({token: `${localStorage.getItem('token')}`});
  } catch (e) {
    console.log(e);
  } finally {
    editItem.value = ''
  }
}async function updateEmail() {
  try {
    await updateUser('email', email.value);
    await userStore.auth({token: `${localStorage.getItem('token')}`});
  } catch (e) {
    console.log(e);
  } finally {
    editItem.value = ''
  }
}


async function updateUser(key, value) {
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      method: 'PUT',
      url: requestUrl.value,
      data: {
        [key]: value
      }
    });
    console.log(response.data);
  } catch (e) {
    console.log(e)
  }
}

function updateStudent() {

}


</script>

<style lang="scss" scoped>

</style>