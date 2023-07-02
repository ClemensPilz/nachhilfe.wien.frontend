<template>

    <div class="flex flex-col gap-4 mt-4">
    <SettingsField field-key="firstName" field-label="Vorname" field-name="updateFirstName" field-type="text"/>
    <SettingsField field-key="lastName" field-label="Nachname" field-name="updateLastName" field-type="text"/>
    <SettingsField field-key="description" field-label="Über mich" field-name="updateDescription" field-type="text"/>

    <div>E-Mail: {{ userStore.user.email }}</div>
    </div>

</template>

<script setup>
import {PencilIcon} from "@heroicons/vue/24/outline";
import ButtonSecondary from "@/components/util/elements/ButtonSecondary.vue";
import {useUserStore} from "@/stores/user";
import {computed, ref} from "vue";
import {XMarkIcon} from "@heroicons/vue/20/solid";
import axios from "axios";
import SettingsField from "@/components/settings/SettingsField.vue";


const userStore = useUserStore();
const editItem = ref();
const firstName = ref();
const lastName = ref();
const email = ref();
const token = localStorage.getItem('token');

const requestUrl = computed(() => {
  if (userStore.user.userType === 'TEACHER') {
    return `${userStore.url}/teacher/updateTeacher/${userStore.userId}`
  } else {
    return `${userStore.url}/student/updateStudent/${userStore.userId}`
  }
})

async function updateFirstName() {
  try {
    await updateUser('firstName', firstName.value, token);
    await userStore.auth({token});
  } catch (e) {
    console.log(e);
  } finally {
    editItem.value = ''
  }
}

async function updateLastName() {
  try {
    await updateUser('lastName', lastName.value, token);
    await userStore.auth({token});
  } catch (e) {
    console.log(e);
  } finally {
    editItem.value = ''
  }
}

async function updateEmail() {
  try {
    await updateUser('email', email.value, token);
    await userStore.auth({token});
  } catch (e) {
    console.log(e);
  } finally {
    editItem.value = ''
  }
}


async function updateUser(key, value, token) {
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`
      },
      method: 'PUT',
      url: requestUrl.value,
      data: {
        [key]: value
      }
    });
    console.log(response.data);
  } catch (e) {
    console.log(e);
    throw e;
  }
}

</script>