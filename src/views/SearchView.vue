<template>
  <FormModal ref="appointmentModalRef">
    <CardLarge class="m-0">
      <template v-slot:content>
        <AppointmentForm @close="closeAppointmentModal" />
      </template>
    </CardLarge>
  </FormModal>

  <div class="container mx-auto max-w-6xl mt-8 px-2">
    <h2>Lehrer suchen</h2>
    <h4 class="text-mainBlue">Finde einen Lehrer, der zu dir passt!</h4>

    <SearchForm @result="pasteResult" />
  </div>
  <div class="w-full bg-background">
    <div class="container mx-auto max-w-6xl mt-8">
      <div class="searchResult">
        <SearchResult
          v-for="teacher in teachersArray"
          @contact="appStore.sendMessage(teacher.teacherId, true)"
          @profile="router.push(`/profile/${teacher.teacherId}`)"
          @requestAppointment="setAppointmentParameters"
          :key="teacher.teacherId"
          :teacherId="teacher.teacherId"
          :name="`${teacher.firstName} ${teacher.lastName}`"
          :description="`${
            teacher.description === null ? '' : teacher.description
          }`"
          :coachings="teacher.coachings"
          :image="teacher.image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchResult from "@/components/search/SearchResult.vue";
import { onMounted, ref, watch } from "vue";
import { useUserStore } from "@/stores/user";
import axios from "axios";
import { useAppStore } from "@/stores/app";
import router from "@/router";
import SearchForm from "@/components/search/SearchForm.vue";
import AppointmentForm from "@/components/util/forms/AppointmentForm.vue";
import FormModal from "@/components/util/modals/FormModal.vue";
import CardLarge from "@/components/util/cards/CardLarge.vue";

const userStore = useUserStore();
const appStore = useAppStore();
const teachersArray = ref();
const showModal = ref(false);
const selectedCoachingId = ref();
const selectedTeacherId = ref();
const appointmentModalRef = ref();

function openAppointmentModal(teacherId, coachingId) {
  appointmentModalRef.value.openModal();
  appStore.selectCoaching(teacherId, coachingId);
}

function closeAppointmentModal() {
  appointmentModalRef.value.closeModal();
}

function pasteResult(data) {
  teachersArray.value = data;
}

function setAppointmentParameters(e) {
  openAppointmentModal(e.teacherId, e.coachingId);
}

// const send = async (e) => {
//   await appStore.postAppointment(selectedTeacherId.value,
//       selectedCoachingId.value,
//       e.startTime,
//       e.duration,
//       e.content)
//
//   showModal.value = false;
// }

async function getAllTeachers() {
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "GET",
      url: `${userStore.url}/teacher/teacher-profiles`,
    });
    teachersArray.value = response.data;
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

onMounted(async () => {
  const unwatch = watch(
    () => userStore.isAuthenticated,
    async (newVal) => {
      if (newVal) {
        await getAllTeachers();
        unwatch();
      }
    },
    { immediate: true }
  );
});
</script>

<style lang="scss" scoped>
.searchResult {
  @apply container min-h-screen max-w-lg mx-auto flex flex-col mt-4 pt-8;
}
</style>
