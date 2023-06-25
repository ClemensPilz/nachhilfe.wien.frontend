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

const userStore = useUserStore();
const appStore = useAppStore();

const teachersArray = ref();

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