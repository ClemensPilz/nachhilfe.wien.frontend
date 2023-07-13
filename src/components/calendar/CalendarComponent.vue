<template>
  <button @click="test">test</button>
  <div>
    <VDatePicker :attributes="attributes"
                 v-model="selectedDate"
                 show-weeknumbers
                 :select-attribute="selectAttribute"
    />
  </div>
  <CalendarCardComponent
      v-for="appointment in selectedDayAppointments"
      :key="appointment.start"
      :appointmentDetails="appointment"
  >
  </CalendarCardComponent>


</template>

<script setup>
import {useAppointmentStore} from "@/stores/calendar";
import {computed, ref, onMounted} from "vue";
import {setupCalendar, Calendar, DatePicker} from "v-calendar";
import {isSameDay, parseISO} from "date-fns";
import {useUserStore} from "@/stores/user";
import CalendarCardComponent from "@/components/calendar/CalendarCardComponent.vue";

const appointmentStore = useAppointmentStore();
const userStore = useUserStore();
const selectedDate = ref();
const appointments = computed(() => {
  return userStore.appointments.map(appointment => ({
    ...appointment,
    startDate: parseISO(appointment.start),
    endDate: parseISO(appointment.end)
  }))
});
const selectAttribute = ref({})


const selectedDayAppointments = computed(() => {
  return appointments.value.filter(appointment => isSameDay(appointment.startDate, selectedDate.value));
});

const attributes = ref([
  {
    key: 'highlightOutline',
    dates: selectedDate,
    highlight: {
      contentClass: 'outline-highlight',
      fillMode: 'outline',
    }
  },
  {
    key: "today",
    dates: new Date(),
    highlight: {
      color: "blue",
      fillMode: "light",
      contentClass: "italic",
      contentStyle: {
        color: "red",
      }
    }
  },
  {
    dates: appointments,
    dot: true,
    content: "yellow"
  }
]);

async function test() {
  await userStore.getAllAppointments();
  console.log(appointments.value)
}

onMounted(async () => {
  await userStore.auth({
    "token": localStorage.getItem("token")
  });
  await userStore.getAllAppointments();
});


</script>
