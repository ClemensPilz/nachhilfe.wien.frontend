<template>
      <div class="w-full bg-gray-300">
        <select id="subjectSelect" name="subjectSelect" v-model="selectedSubject">
          <option v-for="subject in subjects" :value="subject">{{ subject }}</option>
        </select>
        <div class="text-xl text-accent">{{ selectedSubject }}</div>

        <select id="levelSelect" name="levelSelect" v-model="selectedLevel">
          <option v-for="level in levels" :value="level">{{ level }}</option>
        </select>
        <div class="text-xl text-accent">{{ selectedLevel }}</div>

        <input type="text" name="rateSelect" id="rateSelect" placeholder="rate" v-model="selectedRate">

        <button @click="validateCoaching">Send new coaching</button>

      </div>



</template>

<script setup>

import {Coaching} from "@/classes";
import axios from "axios";
import {computed, ref} from "vue";
import {useAppStore} from "@/stores/app";
import {useUserStore} from "@/stores/user";

const userStore = useUserStore();
const appStore = useAppStore();
const subjects = computed(() => appStore.subjects);
const selectedSubject = ref();
const levels = computed(() => appStore.levels);
const selectedLevel = ref();
const selectedRate = ref();
const emit = defineEmits(['update']);

async function validateCoaching() {
  if (selectedSubject.value && selectedLevel.value && selectedRate.value &&
      !isNaN(parseInt(selectedRate.value)) && parseInt(selectedRate.value) > 0) {
    const coaching = new Coaching( selectedSubject.value, selectedLevel.value, parseInt(selectedRate.value));
    try {
      await postCoaching(coaching);
    } catch (e) {
      console.log(e);
    }
  } else {
    console.warn('Coaching invalid!');
  }
}


async function postCoaching(newCoaching) {
  console.log(newCoaching)
  try {
    const response = await axios({
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      url: `${userStore.url}/coaching/offer-coaching/${userStore.userId}`,
      method: "post",
      data: {
        "coachings": [newCoaching]
      }
    });
    console.log(response);
    emit('update');
  } catch (e) {
    console.log('Error trying to post new coachings: ' + e.toString());
    alert('Fehlgeschlagen – existiert bereits ein Coaching zu diesem Fach?')
  }
}

</script>

<style lang="scss" scoped>

</style>