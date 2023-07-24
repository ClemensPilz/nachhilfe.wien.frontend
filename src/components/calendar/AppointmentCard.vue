<template>
  <div
    class="grid-cols-2 grid-rows-1 rounded-xl border-2 bg-white shadow-lg md:grid"
    :class="{
      'border-mainYellow': appointmentDetails.status === 'PENDING',
      'border-green-500': appointmentDetails.status === 'CONFIRMED',
      'border-mainOrange': appointmentDetails.status === 'REJECTED',
    }"
  >
    <!--Appointment Details-Part-->
    <div
      class="flex flex-col justify-center rounded-xl bg-gray-50 p-4 text-primary"
    >
      <h4 v-if="userStore.user.userType === 'TEACHER'" class="col-span-3">
        {{ appointmentDetails.studentName }}
      </h4>
      <h4 v-else>{{ appointmentDetails.teacherName }}</h4>
      <p>Fach: {{ appointmentDetails.coachingName }}</p>
      <div
        id="divider"
        class="border-b-1 mb-3 mt-2 border border-mainYellow"
      ></div>
      <AppointmentCardButtons
        :appointment-details="appointmentDetails"
        display="desktop"
      />
    </div>

    <!---Appointment Date and Time-->
    <div class="col-span-1 pl-5 pt-5">
      <p>Termin: {{ startDate }}</p>
      <p>Von: {{ startTime }}</p>
      <p>Bis: {{ endTime }}</p>
      <p>
        Status:
        <span v-if="appointmentDetails.status === 'PENDING'">Offen</span>
        <span v-if="appointmentDetails.status === 'CONFIRMED'">Bestätigt</span>
        <span v-if="appointmentDetails.status === 'REJECTED'">Abgelehnt</span>
      </p>
      <div
        v-if="
          userStore.user.userType === 'TEACHER' &&
          isBeforeNow(appointmentDetails.start)
        "
        class="py-5"
      >
        <ButtonRegular
          v-if="appointmentDetails.status === 'PENDING'"
          text="Akzeptieren"
          class="bg-secondary"
          @click="confirm"
        ></ButtonRegular>
        <ButtonRegular
          v-if="
            appointmentDetails.status === 'PENDING' ||
            appointmentDetails.status === 'CONFIRMED'
          "
          text="Stornieren"
          class="bg-secondary"
          @click="reject"
        ></ButtonRegular>
      </div>
    </div>

    <AppointmentCardButtons
      :appointment-details="appointmentDetails"
      display="mobile"
      class="mt-5"
    />
  </div>
</template>

<script setup>
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import { useUserStore } from "@/stores/user";
import { useAppStore } from "@/stores/app";

import { useConversationStore } from "@/stores/conversation";
import { useAppointmentStore } from "@/stores/appointment";
import { computed, onMounted } from "vue";
import AppointmentCardButtons from "@/components/calendar/AppointmentCardButtons.vue";
import { useRouter } from "vue-router";

const props = defineProps(["appointmentDetails"]);
const router = useRouter();
const userStore = useUserStore();
const appStore = useAppStore();
const conversationStore = useConversationStore();
const appointmentStore = useAppointmentStore();

const startDate = computed(() => {
  const date = new Date(props.appointmentDetails.startDate);
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
});

const startTime = computed(() => {
  const date = new Date(props.appointmentDetails.startDate);
  return date.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });
});

const endTime = computed(() => {
  const date = new Date(props.appointmentDetails.endDate);
  return date.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });
});

async function reject() {
  try {
    const response = await conversationStore.updateAppointment(
      props.appointmentDetails.id,
      "reject",
    );
    await userStore.getAllAppointments();
  } catch (e) {
    console.log(e);
  }
}

async function confirm() {
  try {
    const response = await conversationStore.updateAppointment(
      props.appointmentDetails.id,
      "confirm",
    );
    await userStore.getAllAppointments();
  } catch (e) {
    console.log(e);
  }
}

const isBeforeNow = (date) => {
  let now = new Date();
  return new Date(date) > now;
};

onMounted(() => {
  console.log(props.appointmentDetails);
});
</script>

<style lang="scss" scoped></style>
