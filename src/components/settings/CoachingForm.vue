<template>
  <div class="w-full">
    <div class="mb-1 text-center">
      <small class="text-white">Themengebiet</small>
    </div>
    <select id="subjectSelect" name="subjectSelect" v-model="selectedSubject">
      <option v-for="subject in subjects" :value="subject">
        {{ subject }}
      </option>
    </select>

    <select id="levelSelect" name="levelSelect" v-model="selectedLevel">
      <option v-for="level in levels" :value="level">{{ level }}</option>
    </select>

    <input
      type="number"
      class="text-center"
      name="rateSelect"
      id="rateSelect"
      placeholder="Stundensatz"
      v-model="selectedRate"
    />

    <ButtonRegular
      @click="validateCoaching"
      text="OK"
      class="ms-0 w-full bg-mainBlue"
    />
  </div>
</template>

<script setup>
import axios from "axios";
import { computed, ref } from "vue";
import { useAppStore } from "@/stores/app";
import { useUserStore } from "@/stores/user";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";

const userStore = useUserStore();
const appStore = useAppStore();
const subjects = computed(() => appStore.subjects);
const selectedSubject = ref();
const levels = computed(() => appStore.levels);
const selectedLevel = ref();
const selectedRate = ref();
const emit = defineEmits(["update"]);

async function validateCoaching() {
  if (
    selectedSubject.value &&
    selectedLevel.value &&
    selectedRate.value &&
    !isNaN(parseInt(selectedRate.value)) &&
    parseInt(selectedRate.value) > 0
  ) {
    const coaching = {
      subject: selectedSubject.value,
      level: selectedLevel.value,
      rate: parseInt(selectedRate.value),
    };
    try {
      await postCoaching(coaching);
    } catch (e) {
      console.log(e);
    }
  } else {
    console.warn("Coaching invalid!");
  }
}

async function postCoaching(newCoaching) {
  console.log(newCoaching);
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      url: `${userStore.url}/coaching/offer-coaching/${userStore.userId}`,
      method: "post",
      data: {
        coachings: [newCoaching],
      },
    });
    console.log(response);
    emit("update");
  } catch (e) {
    console.log("Error trying to post new coachings: " + e.toString());
    alert("Fehlgeschlagen – existiert bereits ein Coaching zu diesem Fach?");
  }
}
</script>

<style lang="scss" scoped>
input,
select {
  @apply mb-2 w-full  rounded-3xl p-2;
}
</style>
