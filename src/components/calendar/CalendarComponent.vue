<template>
  <div>
    <VCalendar :attributes="attributes" v-model="selectedDate"/>
    <div v-if="selectedDayAppointments.value && selectedDayAppointments.value.length > 0">
      <div class="container mx-auto mt-10" v-for="appointment in selectedDayAppointments.value" :key="appointment.id">
        <div class="grid grid-cols-1">
          <div key={appointment.date} class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="flex items-center justify-between px-6 py-3 bg-gray-100">
              <div class="flex items-center">
                <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">{{ date }}</h3>
              </div>
            </div>
            <p>{{ appointment.start }} - {{ appointment.end }}</p>
            <p>{{ appointment.details }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- If there are no appointments, display a free day message -->
    <div v-else>
      <p>Sie haben einen freien Tag! Genießen Sie die Dinge, die Sie gerne tun.</p>
    </div>
  </div>
</template>

<script setup>
import {useAppointmentStore} from "@/stores/calendar";
import {ref, watch} from "vue";


const appointmentStore = useAppointmentStore();
const selectedDate = ref(null);
const selectedDayAppointments = ref([]);
const date = ref();

const attributes = ref([
  {
    highlight: true,
    dates:
        new Date()
  },
]);

watch(selectedDate, () => {
  loading.value = true;
  appointmentStore.showAppointments()
      .then(() => {
        loading.value = false;
      })
      .catch((e) => {
        console.error(e);
        loading.value = false;
      });
});


</script>