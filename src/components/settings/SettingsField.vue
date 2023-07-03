<template>
  <div v-if="editItem !== fieldKey">
    <span class="smallText">{{ fieldLabel }}:</span> <span class="paragraph font-bold">{{ userStore.user[fieldKey] }}</span>
    <PencilIcon class="h-4 ml-1 text-primary inline" @click="editItem = fieldKey"/>
  </div>

  <div v-else class="flex items-center" @keydown.esc="editItem = ''" @keydown.enter="updateField">
    <input :type="fieldType" v-model="fieldValue" :name="fieldName" :id="fieldName"
           :placeholder="userStore.user[fieldKey]"
           class="mr-1 p-1 border border-primary rounded">
    <button-secondary text="update" @click="updateField"/>
    <XMarkIcon class="h-6 text-primary inline" @click="editItem = ''"/>
  </div>
</template>

<script setup>

import {PencilIcon} from "@heroicons/vue/24/outline";
import ButtonSecondary from "@/components/util/elements/ButtonSecondary.vue";
import {XMarkIcon} from "@heroicons/vue/20/solid";
import {useUserStore} from "@/stores/user";
import {computed, ref} from "vue";
import axios from "axios";

const userStore = useUserStore();
const editItem = ref();
const token = localStorage.getItem('token');
const fieldValue = ref('');

const props = defineProps({
  fieldKey: String,
  fieldLabel: String,
  fieldName: String,
  fieldType: String
});

const requestUrl = computed(() => {
  if (userStore.user.userType === 'TEACHER') {
    return `${userStore.url}/teacher/updateTeacher/${userStore.userId}`
  } else {
    return `${userStore.url}/student/updateStudent/${userStore.userId}`
  }
})

async function updateField() {
  if (fieldValue.value.length < 3) {
    alert('Bitte mindestens drei Zeichen eingeben!');
    return;
  }

  try {
    await updateUser(props.fieldKey, fieldValue.value, token);
    await userStore.auth({token});
  } catch (e) {
    console.log(e);
  } finally {
    editItem.value = '';
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

<style lang="scss" scoped>

</style>