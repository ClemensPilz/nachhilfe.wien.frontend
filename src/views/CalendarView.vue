<script setup>

import {useRoute} from "vue-router";
import {useUserStore} from "@/stores/user";
import {onMounted, ref} from "vue";
import axios from "axios";
import NavBar from "@/components/global/NavBar.vue";
import FooterBar from "@/components/global/FooterBar.vue";
import ButtonPrimary from "@/components/util/elements/ButtonPrimary.vue";

const route = useRoute();
const userStore = useUserStore();
const userId = route.params.userId;
const firstName = ref();
const appointments = ref();
const selectedDayAppointments = ref();

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

async function getAppointments() {
  try {
    const response = await axios.get(`${userStore.url}/get-appointments/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    appointments.value = response.data;
  } catch (e) {
    console.log(e);
  }
}

onMounted(() => {
  getUserData(userId);
  getAppointments();
});

</script>

<template>
  <section class="min-h-screen">
    <nav-bar/>
    <div class="container mx-auto px-6 py-12 lg:px-20 text-white">
      <div class="flex items-center justify-between space-x-8">
        <div class="max-w-2xl">
          <p class="text-sm font-bold uppercase tracking-widest">Persönlicher Kalender</p>
          <h2 class="mt-3 text-4xl sm:text-6xl font-extrabold tracking-wide">
            <span class="text-mainBlue">Willkommen </span>
            <span class="text-yellow-400" :key="firstName"> {{firstName}} </span>
          </h2>
        </div>
        <div class="w-2/3">
          <div class="flex items-center justify-end">
            <div class="w-64 pt-20">
              <VCalendar :appointments="appointments" show-weeknumbers/>
              <button-primary text="ADD"/>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schedule.map(day => (
          <div key={day.day} class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="flex items-center justify-between px-6 py-3 bg-gray-100">
              <div class="flex items-center">
                <CalendarIcon class="mr-3 w-6 h-6 text-gray-900"/>
                <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">{day.day}</h3>
              </div>
            </div>
            <ul class="divide-y divide-gray-300">
              {day.events.map(event => (
              <li key={event.id} class="py-3 px-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-full">
                    <span class="text-sm font-bold text-gray-900">{event.time}</span>
                  </div>
                  <div class="ml-4">
                    <p class="text-base font-bold text-gray-700 uppercase">{event.name}</p>
                    <p class="mt-1 text-xs text-gray-500">{event.details}</p>
                  </div>
<!--                  <div v-if="selectedDayAppointments.length === 0">-->
                    <p>Sie haben einen freien Tag! Genießen Sie die Dinge, die Sie gerne tun.</p>
<!--                  <div v-else>-->
<!--                    <div v-for="appointment in selectedDayAppointments" :key="appointment.id">-->
<!--                      &lt;!&ndash; Anzeigen der Termindetails &ndash;&gt;-->
<!--                      <p>{{appointment.name}}</p>-->
<!--                      <p>{{appointment.time}}</p>-->
<!--                      <p>{{appointment.details}}</p>-->
<!--                    </div>-->

                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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