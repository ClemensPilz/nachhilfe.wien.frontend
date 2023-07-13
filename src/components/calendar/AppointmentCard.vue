<template>

  <div class=" grid grid-cols-2 grid-rows-1 bg-white rounded-xl shadow-lg">
    <!--Appointment Details-Part-->
    <div class=" text-primary flex flex-col justify-center p-4 pt-0">
      <h4 >Termin: {{ startDate }}</h4>
      <p v-if="userStore.user.userType === 'TEACHER'" class="col-span-3">
        Schüler: {{ appointmentDetails.studentName}}
      </p>
      <p v-else>
        Lehrer: {{ appointmentDetails.teacherName}}
      </p>
      <div id="divider" class="border border-b-1 border-mainYellow mt-2 mb-3"></div>
      <div v-if="userStore.user.userType === 'TEACHER'" class="flex gap-2 mt-2">
        <ButtonRegular text="Profil" class="bg-mainBlue" @click="router.push(`/profile/${appointmentDetails.studentId}`)" />
        <ButtonRegular text="Kontakt" class="bg-mainOrange" @click="appStore.sendMessage(appointmentDetails.studentId, true)" />

      </div>
      <div v-if="userStore.user.userType === 'STUDENT'" class="flex gap-2 mt-2">
        <ButtonRegular text="Profil" class="bg-mainBlue" @click="router.push(`/profile/${appointmentDetails.teacherId}`)" />
        <ButtonRegular text="Kontakt" class="bg-mainOrange" @click="appStore.sendMessage(appointmentDetails.teacherId,true)" />

      </div>
    </div>

    <!---Appointment Date and Time-->
    <div class="col-span-1 my-4 p-4">
      <p>Von: {{formattedTimeStart}}</p>
      <p>Bis: {{formattedTimeEnd}}</p>
      <p>Fach: {{appointmentDetails.coachingName}}</p>
      <p>Status: {{appointmentDetails.status}}</p>
      <p></p>
    </div>
  </div>


</template>

<script setup>
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import {useUserStore} from "@/stores/user";
import {useAppStore} from "@/stores/app";
import router from "@/router";

const props = defineProps(['appointmentDetails']);

const userStore = useUserStore();
const appStore = useAppStore();

const startDate = `${props.appointmentDetails.startDate.getDate()}.${props.appointmentDetails.startDate.getMonth()}.${props.appointmentDetails.startDate.getFullYear()}`
const startTime = `${props.appointmentDetails.startDate.getHours()}.${props.appointmentDetails.startDate.getMinutes()}`;
const endTime = `${props.appointmentDetails.endDate.getHours()}.${props.appointmentDetails.endDate.getMinutes()}`;

// Split the time output into hours and minutes
const [hoursStart, minutesStart] = startTime.split(".");
const [hoursEnd, minutesEnd] = endTime.split(".");
// Format the time with leading zeros using padStart()
const formattedTimeStart = `${hoursStart.padStart(2, '0')}:${minutesStart.padStart(2, '0')}`;
const formattedTimeEnd = `${hoursEnd.padStart(2, '0')}:${minutesEnd.padStart(2, '0')}`;


const emits = defineEmits(['contact', 'profile', 'requestAppointment']);

</script>

<style lang="scss" scoped>

</style>