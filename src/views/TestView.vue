<template>

  <!--Container-->
  <div class="container max-w-6xl mx-auto text-center bg-white">
    <NavBar class="md:mb-12"/>

    <h1 class="text-2xl font-bold text-primary mb-4">Welche Fächer bietest du an?</h1>
    <ButtonAccent text="Fach hinzufügen" @click="openCoachingForm" />

    <div class="grid grid-rows-2 grid-cols-4 mt-4">
      <div class="col-span-4 md:col-span-2 bg-blue-400">
        <!--Available subjects-->

      </div>
      <div class="col-span-4 md:col-span-2 bg-red-400">
        <!--Current Subject-->

      </div>
    </div>

    <input type="file" name="imageInput" id="imageInput">
    <ButtonPrimary text="Encode" @click="encodeImageToBase64" />

    <ButtonAccent text="Decode" @click="decodeImageFromBase64" />
    <div id="imageOutput" class="max-w-2xl overflow-hidden"></div>

    <div>{{base64}}</div>

  </div>
</template>

<script setup>

import NavBar from '@/components/global/NavBar.vue'
import { Ripple, initTE } from "tw-elements";
import {computed, onMounted, ref, watch} from "vue";
import ButtonAccent from "@/components/util/elements/ButtonAccent.vue";
import axios from "axios";
import {useUserStore} from "@/stores/user";
import {useAppStore} from "@/stores/app";
import ButtonPrimary from "@/components/util/elements/ButtonPrimary.vue";

const subject = ref();
const level = ref();
const rate = ref();
const userStore = useUserStore();
const appStore = useAppStore();
const image = ref();
const base64 = ref();

function openCoachingForm() {

}

async function encodeImageToBase64() {
  const imageData = document.getElementById('imageInput').files[0];
  const reader = new FileReader();
  let baseString;
  reader.onloadend = () => {
    baseString = reader.result;
    base64.value = baseString;
    console.log(baseString);
  };
  reader.readAsDataURL(imageData);
}


async function offerCoaching(newCoachingsArray) {
  try {
    const response = await axios({
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      url: `${userStore.url}/coaching/offer-coaching/${userStore.userId}`,
      method: "post",
      data: {
        "coachings": newCoachingsArray
      }
    })
  } catch (e) {
    console.log('Error trying to post new coachings: ' + e.toString());
  }
}

onMounted(() => initTE({Ripple}));
</script>

<style lang="scss" scoped>

</style>