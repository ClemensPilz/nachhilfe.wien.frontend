<template>

  <div class="w-full my-4">

    <input type="file"
           class="rounded text-primary mb-2"
           name="profilePicture"
           id="profilePictureInput"
           @change="upload">

    <img v-if="profilePictureSrc" :src="profilePictureSrc" alt="" srcset=""
    class="max-w-xs rounded-xl shadow-xl">

  </div>
</template>

<script setup>

import {useAppStore} from "@/stores/app";
import axios from "axios";
import {useUserStore} from "@/stores/user";
import {onMounted, ref, watch} from "vue";

const appStore = useAppStore();
const userStore = useUserStore();

const profilePictureSrc = ref();

const props = defineProps(['uploadNow']);


async function upload(e) {
  const file = e.target.files[0];

  if (file.size > 2 * 1024 * 1024) {
    alert("File is too large. Please select a file less than 2MB.");
    return;
  }

  if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
    alert("Invalid file type. Please select a JPG or PNG image.");
    return;
  }

  const imageString = await appStore.encodeImage(file);

  try {
    const response = axios({
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      method: "post",
      url: `${userStore.url}/user/picture/${userStore.userId}`,
      data: {
        image: imageString
      }
    });
    console.log(response);
    localStorage.setItem('profilePicture', imageString);
    profilePictureSrc.value = localStorage.getItem('profilePicture');

  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  try {
    profilePictureSrc.value = localStorage.getItem('profilePicture');
  } catch (e) {
    console.log(e);
  }
})




</script>

<style lang="scss" scoped>

</style>