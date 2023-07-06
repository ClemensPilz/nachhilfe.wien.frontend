<template>
  <div class="container mx-auto max-w-6xl">
    <nav-bar/>


    <div class="searchResult">
      <SearchResult
          v-for="teacher in teachersArray"
          @contact="appStore.sendMessage(teacher.teacherId, true) "
          @profile="router.push(`/profile/${teacher.teacherId}`)"
          @requestAppointment="setAppointmentParameters"
          :teacherId="teacher.teacherId"
          :name="`${teacher.firstName} ${teacher.lastName}`"
          :description="`${teacher.description === null ? '' : teacher.description}`"
          :coachings="teacher.coachings"
      />

      <AppointmentModal v-if="showModal"
                        title="Termin senden"
                        @close="showModal = !showModal"
                        @send="send"/>


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
const selectedCoachingId = ref();
const selectedTeacherId = ref();

function setAppointmentParameters(e) {
  selectedCoachingId.value = e.coachingId;
  selectedTeacherId.value = e.teacherId;
  showModal.value = true;
}

const send = async (e) => {
  await appStore.postAppointment(selectedTeacherId.value, selectedCoachingId.value, e.startTime, e.duration, e.content)
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