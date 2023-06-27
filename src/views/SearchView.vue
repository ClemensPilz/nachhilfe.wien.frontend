<template>
  <div class="container mx-auto max-w-6xl">
    <nav-bar/>




    <div class="searchResult">
      <SearchResult
          v-for="teacher in teachersArray"
          @contact="appStore.sendMessage(teacher.teacherId) "
          @profile="router.push(`/profile/${teacher.teacherId}`)"
          :name="`${teacher.firstName} ${teacher.lastName}`"
          :description="`${teacher.description === null ? '' : teacher.description}`"
          :coachings="teacher.coachings"
      />
      <button-primary text="click" @click="showModal = !showModal"/>
      <AppointmentModal v-if="showModal"
                        title="Termin senden"
                        @close="showModal = !showModal"
                        @send="(e) => lookAtTime(e)"/>


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

function lookAtTime(e) {
  let startTime = new Date(e.startTime);
  let endTime = new Date(e.startTime);
  let duration = e.duration;
  endTime.setHours(startTime.getHours() + duration);
  console.log('StartTime: ' + startTime);
  console.log('endTime: ' + endTime);

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
    for (const teacher of teachersArray.value) {
      console.log(teacher);
    }

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