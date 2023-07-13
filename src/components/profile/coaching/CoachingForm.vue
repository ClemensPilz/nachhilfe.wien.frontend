<template>
  <div class="w-full">
    <select id="subjectSelect" name="subjectSelect" v-model="selectedSubject">
      <option v-for="subject in subjects" :value="subject">{{ subject }}</option>
    </select>

    <select id="levelSelect" name="levelSelect" v-model="selectedLevel">
      <option v-for="level in levels" :value="level">{{ level }}</option>
    </select>

    <input type="number" name="rateSelect" id="rateSelect" placeholder="rate" v-model="selectedRate">

    <ButtonRegular @click="validateCoaching" text="OK" class="w-full bg-mainBlue ms-0"/>

  </div>


</template>

<script setup>

import {Coaching} from "@/classes";
import axios from "axios";
import {computed, ref} from "vue";
import {useAppStore} from "@/stores/app";
import {useUserStore} from "@/stores/user";
import ButtonPrimary from "@/components/util/elements/ButtonPrimary.vue";
import ButtonLarge from "@/components/util/buttons/ButtonLarge.vue";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";

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
    const coaching = new Coaching(selectedSubject.value, selectedLevel.value, parseInt(selectedRate.value));
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

input, select {
  @apply w-full mb-2  p-2 rounded-3xl
}

</style>
