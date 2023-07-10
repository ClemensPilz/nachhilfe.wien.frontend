<script setup>

import {useRoute} from "vue-router";
import {useUserStore} from "@/stores/user";
import {onMounted, reactive, ref, watch} from "vue";
import axios from "axios";
import NavBar from "@/components/global/NavBar.vue";
import FooterBar from "@/components/global/FooterBar.vue";
import CalendarComponent from "@/components/calendar/CalendarComponent.vue";
import {useAppointmentStore} from "@/stores/calendar";
import CalendarModal from "@/components/calendar/CalendarModal.vue";

const route = useRoute();
const userStore = useUserStore();
const userId = route.params.userId;
const firstName = ref();
const appointmentStore = useAppointmentStore();
const selectedDate = ref(null);
const loading = ref(false);
// const newAppointmentData = reactive({name: "", time: "", details: ""});


async function getUserData(userid) {
  try {
    const response = await axios({
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      method: 'get',
      url: `${userStore.url}/user/${userId}`
    });
    firstName.value = response.data.firstName;
  } catch (e) {
    console.log(e);
  }
}

onMounted(() => {
  getUserData(userId);
});

</script>

<template>
  <section class="min-h-screen flex flex-col">
    <nav-bar/>
    <div class="container mx-auto px-6 py-12 lg:px-20 text-mainBlue">
      <p class="text-sm font-bold uppercase tracking-widest">Persönlicher Kalender</p>
      <h2 class="mt-3 text-4xl sm:text-6xl font-extrabold tracking-wide">
        <span class="text-mainBlue">Willkommen </span>
        <span class="text-yellow-400" :key="firstName"> {{ firstName }} </span>
      </h2>
    </div>
    <div class="flex-grow flex flex-col md:flex-row items-center justify-center">
      <div class="w-full flex items-center justify-center">
        <CalendarComponent/>
      </div>
    </div>


<!--    <div class="container mx-auto mt-10">-->
<!--      <div class="grid grid-cols-1">-->
<!--        <div key={day.day} class="bg-white rounded-lg shadow-lg overflow-hidden">-->
<!--          <div class="flex items-center justify-between px-6 py-3 bg-gray-100">-->
<!--            <div class="flex items-center">-->
<!--              <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">{{ date }}</h3>-->
<!--            </div>-->
<!--          </div>-->
<!--          <ul class="divide-y divide-gray-300">-->
<!--            <p class="text-base font-bold text-gray-700 uppercase">Sie haben einen freien Tag! Genießen Sie die Dinge,-->
<!--              die Sie gerne tun.</p>-->
<!--            <li key={event.id} class="py-3 px-6">-->
<!--              <div class="flex items-start space-x-4">-->
<!--                <div class="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-full">-->
<!--                  <span class="text-sm font-bold text-gray-900"></span>-->
<!--                </div>-->
<!--                <div class="ml-4">-->
<!--                  <p class="text-base font-bold text-gray-700 uppercase"></p>-->
<!--                  <p class="mt-1 text-xs text-gray-500">{event.details}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <footer-bar/>
  </section>
</template>

<style scoped lang="scss">

//@media (min-width: 1024px) {
//  .about {
//    min-height: 100vh;
//    display: flex;
//    align-items: center;
//  }
//}

</style>