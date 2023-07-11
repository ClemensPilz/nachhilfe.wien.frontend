<template>
  <div>
    <VCalendar :attributes="attributes"
               v-model="selectedDate"
               @input="loadAppointmentsForSelectedDate"/>
  </div>

  <div v-if="selectedDayAppointments.value && selectedDayAppointments.value.length > 0">
    <div class="container mx-auto mt-10" v-for="appointment in selectedDayAppointments.value" :key="appointment.id">
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
import {computed, ref} from "vue";

const appointmentStore = useAppointmentStore();
const selectedDate = ref(null);
const appointments = ref([]);

const loadAppointmentsForSelectedDate = () => {
  appointments.value = appointmentStore.findAppointmentsByDate(selectedDate.value);
};

const selectedDayAppointments = computed(() => {
  return appointments.value.filter(appointment => appointment.date === selectedDate.value);
});

const attributes = ref([
  {
    highlight: true,
    dates: new Date()
  },
]);
</script>
