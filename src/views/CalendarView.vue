<script setup>

import {useRoute} from "vue-router";
import {useUserStore} from "@/stores/user";
import {onMounted, reactive, ref, watch} from "vue";
import axios from "axios";
import NavBar from "@/components/global/NavBar.vue";
import FooterBar from "@/components/global/FooterBar.vue";
import ButtonPrimary from "@/components/util/elements/ButtonPrimary.vue";

const route = useRoute();
const userStore = useUserStore();
const userId = route.params.userId;
const firstName = ref();
const appointments = ref([]);
const selectedDate = ref();
const newAppointmentData = reactive({name: "", time: "", details: ""});
const date = Date();
const showModal = ref(false);
const selectedDayAppointments = ref([]);

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

async function addAppointment() {
  if (newAppointmentData && newAppointmentData.value && newAppointmentData.value.name && newAppointmentData.value.time && newAppointmentData.value.details) {
    try {
      const response = await axios.post(`${userStore.url}/add-appointment/${userId}`, {
        userId: userId,
        appointment: newAppointmentData.value,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.status === 200) {
        getAppointments();
        closeModal();
        newAppointmentData.name = "";
        newAppointmentData.time = "";
        newAppointmentData.details = "";
      } else {
        console.log('Error adding appointment');
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log('All fields are required');
  }
}

const openModal = () => {
  showModal.value = true;
}

const closeModal = () => {
  showModal.value = false;
}


watch(selectedDate, async (newDate) => {
  selectedDayAppointments.value = appointments.value.filter(
      (appt) => new Date(appt.date).toDateString() === newDate.toDateString()
  );
})

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
            <span class="text-yellow-400" :key="firstName"> {{ firstName }} </span>
          </h2>
        </div>
        <div class="w-2/3">
          <div class="flex items-center justify-end">
            <div class="w-64 pt-20">
              <VCalendar v-model="selectedDate"/>
              <div v-for="appointment in selectedDayAppointments" :key="appointment.id"
                   class="bg-white overflow-hidden shadow rounded-lg my-4">
                <div class="px-4 py-5 sm:px-6">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    {{ appointment.name }}
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">
                    {{ appointment.date }}
                  </p>
                </div>
                <div class="border-t border-gray-200">
                  <dl>
                    <div class="px-4 py-5 sm:px-6">
                      <dt class="text-sm font-medium text-gray-500">
                        Details
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {{ appointment.details }}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>


              <button-primary @click="openModal" text="ADD"/>
              <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title"
                   role="dialog" aria-modal="true">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                  <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>

                  <div
                      class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div class="sm:flex sm:items-start">
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                            Add Appointment
                          </h3>
                          <div class="mt-2">
                            <input v-model="newAppointmentData.name" type="text" placeholder="Name"
                                   class="rounded-lg border-gray-300">
                            <input v-model="newAppointmentData.time" type="time" placeholder="Time"
                                   class="rounded-lg border-gray-300">
                            <input v-model="newAppointmentData.details" type="text" placeholder="Details"
                                   class="rounded-lg border-gray-300">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button @click="addAppointment" type="button"
                              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Add
                      </button>
                      <button @click="closeModal" type="button"
                              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <h3> {{ date }}</h3>

      <div class="mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div key={day.day} class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="flex items-center justify-between px-6 py-3 bg-gray-100">
              <div class="flex items-center">
                <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">{{ date }}</h3>
              </div>
            </div>
            <ul class="divide-y divide-gray-300">
              <p class="text-base font-bold text-gray-700 uppercase">Sie haben einen freien Tag! Genießen Sie die Dinge,
                die Sie gerne tun.</p>
              <li key={event.id} class="py-3 px-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-full">
                    <span class="text-sm font-bold text-gray-900"></span>
                  </div>
                  <div class="ml-4">
                    <p class="text-base font-bold text-gray-700 uppercase"></p>
                    <p class="mt-1 text-xs text-gray-500">{event.details}</p>
                  </div>
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