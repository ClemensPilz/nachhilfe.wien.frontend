<template>
  <div class="grid-cols-3 grid-rows-3">
    <div>Hello</div>
    <div>Datum: {{ startDate }}</div>
    <div>Von: {{formattedTimeStart}}</div>
    <div>Bis: {{formattedTimeEnd}}</div>

  </div>
<!--


  <div v-if="props.appointmentDetails.length > 0">
    <div class="container mx-auto mt-10" v-for="appointment in selectedDayAppointments" :key="appointment.start">
      <d&lt;!&ndash;iv class="grid grid-cols-1">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="flex items-center justify-between px-6 py-3 bg-gray-100">
            <div class="flex items-center">
              <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">{{ appointment.start }}</h3>
            </div>
            <v-card>
              <p>{{ appointment.title }}</p>
              <p>{{ appointment.start }} - {{ appointment.end }}</p>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>&ndash;&gt;
  &lt;!&ndash; If there are no appointments, display a free day message &ndash;&gt;
  <div v-else>

    <p>Sie haben einen freien Tag! Genießen Sie die Dinge, die Sie gerne tun.</p>

  </div>
-->

</template>


<script setup>


const props = defineProps(['appointmentDetails']);

const startDate = `${props.appointmentDetails.startDate.getDate()}.${props.appointmentDetails.startDate.getMonth()}.${props.appointmentDetails.startDate.getFullYear()}`
const startTime = `${props.appointmentDetails.startDate.getHours()}.${props.appointmentDetails.startDate.getMinutes()}`;
const endTime = `${props.appointmentDetails.endDate.getHours()}.${props.appointmentDetails.endDate.getMinutes()}`;

// Split the time output into hours and minutes
const [hoursStart, minutesStart] = startTime.split(".");
const [hoursEnd, minutesEnd] = endTime.split(".");
// Format the time with leading zeros using padStart()
const formattedTimeStart = `${hoursStart.padStart(2, '0')}:${minutesStart.padStart(2, '0')}`;
const formattedTimeEnd = `${hoursEnd.padStart(2, '0')}:${minutesEnd.padStart(2, '0')}`;


</script>


<style scoped>

</style>