<template>
  <div class="container mx-auto max-w-6xl">
    <nav-bar/>




    <div class="searchResult">
      <SearchResult
          v-for="teacher in teachersArray"
          @contact="appStore.sendMessage(teacher.teacherId, true) "
          @profile="router.push(`/profile/${teacher.teacherId}`)"
          @requestAppointment="prepareAppointment"
          :teacherId="teacher.teacherId"
          :name="`${teacher.firstName} ${teacher.lastName}`"
          :description="`${teacher.description === null ? '' : teacher.description}`"
          :coachings="teacher.coachings"
      />

      <AppointmentModal v-if="showModal"
                        title="Termin senden"
                        @close="showModal = !showModal"
                        @send="sendAppointment"/>


      <SearchResult/>
      <SearchResult/>
      <SearchResult/>
      <SearchResult/>
    </div>
  </div>
</template>

<script setup>

import SearchResult from "@/components/search/SearchResult.vue";
import NavBar from "@/components/global/NavBar.vue";
import {onMounted, ref, watch} from "vue";
import {useUserStore} from "@/stores/user";
import axios from "axios";
import {useAppStore} from "@/stores/app";
import router from "@/router";
import AppointmentModal from "@/components/global/AppointmentModal.vue";
import ButtonPrimary from "@/components/util/elements/ButtonPrimary.vue";

const userStore = useUserStore();
const appStore = useAppStore();

const teachersArray = ref();
const showModal = ref(false);

const preparedAppointment = ref();
const preparedTeacher = ref();

function prepareAppointment(e) {
  preparedAppointment.value = e[0];
  preparedTeacher.value = e[1];
  showModal.value = true;
  }

async function sendAppointment(e) {
  let startTime = new Date(e.startTime);
  let endTime = new Date(e.startTime);
  let duration = e.duration;
  endTime.setHours(startTime.getHours() + duration);

  let conversationId = await appStore.sendMessage(preparedTeacher.value, false);
  showModal.value = false;

  try {
    const response = await axios({
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      method: 'post',
      url: `${userStore.url}/appointment/send-appointment/${conversationId}/${preparedAppointment.value}`,
      data: {
        "title": "neuer Termin",
        "content": "ein neuer Termin",
        "start": startTime.toISOString(),
        "end": endTime.toISOString(),
      }
    })
    console.log(response.data);
    alert("coaching-anfrage verschickt!")
  } catch (e) {
    console.log(e)
  }



}

async function getAllTeachers() {
  try {
    const response = await axios({
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      method: 'GET',
      url: `${userStore.url}/teacher/teacher-profiles`
    });
    teachersArray.value = response.data;
  } catch (e) {
    console.log(e);
  }
}

onMounted(async () => {
  const unwatch = watch(() => userStore.isAuthenticated, async (newVal) => {
    if (newVal) {
      await getAllTeachers();
      unwatch();
    }
  }, {immediate: true})
})


</script>

<style lang="scss" scoped>

.searchResult {
  @apply container min-h-screen max-w-lg mx-auto flex flex-col justify-center mt-4
}

</style>