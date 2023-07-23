<template>
  <div>
    <FormModal :is-active="appStore.appointmentModalActive">
      <CardLarge class="m-0">
        <template v-slot:content>
          <AppointmentForm />
        </template>
      </CardLarge>
    </FormModal>

    <div class="container mx-auto mt-8 max-w-6xl px-2">
      <h2>Lehrer suchen</h2>
      <h4 class="text-mainBlue">Finde einen Lehrer, der zu dir passt!</h4>

      <SearchForm @result="pasteResult" />
    </div>
    <div class="w-full bg-background">
      <div class="container mx-auto mt-8 max-w-6xl">
        <div
          class="mx-auto mt-4 grid min-h-screen grid-cols-1 gap-6 px-4 pt-8 lg:grid-cols-2"
        >
          <SearchResult
            v-for="teacher in teachersArray"
            class="col-span-1"
            @contact="appStore.sendMessage(teacher.teacherId, true)"
            @profile="router.push(`/profile/${teacher.teacherId}`)"
            @requestAppointment="
              (e) => openAppointmentModal(e.teacherId, e.coachingId)
            "
            :key="teacher.teacherId"
            :teacher="teacher"
          />
        </div>
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
const appointmentModalRef = ref();

function openAppointmentModal(teacherId, coachingId) {
  if (userStore.user.userType !== "STUDENT") {
    console.log("Nur Schüler können Terminanfragen senden.");
    return;
  }
  appStore.selectCoaching(teacherId, coachingId);
  appStore.appointmentModalActive = !appStore.appointmentModalActive;
}

function pasteResult(data) {
  teachersArray.value = data;
}

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
    { immediate: true },
  );
});
</script>

<style lang="scss" scoped></style>
