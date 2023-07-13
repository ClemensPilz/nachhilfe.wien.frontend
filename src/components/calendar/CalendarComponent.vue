<template>
  <div class="flex gap-5">
    <div>
      <VDatePicker :attributes="attributes"
                   v-model="selectedDate"
                   show-weeknumbers
                   :select-attribute="selectAttribute"
                   title-position="left"
      />
    </div>
    <div>
      <AppointmentCard
          v-for="appointment in selectedDayAppointments"
          :key="appointment.start"
          :appointmentDetails="appointment"
          class="mb-12 bg-gray"
      >
      </AppointmentCard>
    </div>
  </div>


</template>

<script setup>
import {useAppointmentStore} from "@/stores/calendar";
import {computed, ref, onMounted} from "vue";
import {setupCalendar, Calendar, DatePicker} from "v-calendar";
import {isSameDay, parseISO} from "date-fns";
import {useUserStore} from "@/stores/user";
import AppointmentCard from "@/components/calendar/AppointmentCard.vue";

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


onMounted(async () => {
  await userStore.auth({
    "token": localStorage.getItem("token")
  });
  await userStore.getAllAppointments();
});


</script>
