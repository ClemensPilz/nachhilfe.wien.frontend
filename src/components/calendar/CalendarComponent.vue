<template>
  <button @click="test">test</button>

  <div>
    <VDatePicker :attributes="attributes"
               v-model="selectedDate"/>
  </div>

  <div v-if="selectedDayAppointments.length > 0">
    <div class="container mx-auto mt-10" v-for="appointment in appointments" :key="appointment.start">
      <div class="grid grid-cols-1">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="flex items-center justify-between px-6 py-3 bg-gray-100">
            <div class="flex items-center">
              <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">{{ selectedDate }}</h3>
            </div>
            <v-card>
              <p>{{ appointment.title }}</p>
              <p>{{ appointment.start }} - {{ appointment.end }}</p>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- If there are no appointments, display a free day message -->
  <div v-else>

    <p>Sie haben einen freien Tag! Genießen Sie die Dinge, die Sie gerne tun.</p>

  </div>
</template>

<script setup>
import {useAppointmentStore} from "@/stores/calendar";
import {computed, ref, onMounted} from "vue";
import {setupCalendar, Calendar, DatePicker} from "v-calendar";
import {format} from "date-fns";
import {useUserStore} from "@/stores/user";

const appointmentStore = useAppointmentStore();
const userStore = useUserStore();
const selectedDate = ref(new Date());
const appointments = computed(() => userStore.appointments);

// const loadAppointmentsForSelectedDate = async () => {
//   selectedDate.value = format(selectedDate.value, "yyyy-MM-dd'T'HH-mm-ss-SS")
//   console.log(selectedDate.value);
//   appointments.value = await appointmentStore.findAppointmentsByDate(selectedDate.value);
// };


 const selectedDayAppointments = computed(() => {
   return appointments.value.filter(appointment => appointment.start === selectedDate.value);
 });

const attributes = ref([
  {
    key: "today",
    highlight: true,
    dates: new Date()
  },
]);

async function test() {
  await userStore.getAllAppointments();
}

onMounted(async () => {
 await userStore.getAllAppointments();
}

)


</script>
