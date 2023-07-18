<template>

  <div class=" grid grid-cols-2 grid-rows-1 bg-white rounded-xl shadow-lg border-2"
       :class="{
      'border-mainYellow': appointmentDetails.status === 'PENDING',
      'border-green-500' : appointmentDetails.status === 'CONFIRMED',
      'border-mainOrange': appointmentDetails.status === 'REJECTED'
    }"
      >
    <!--Appointment Details-Part-->
    <div class=" text-primary flex flex-col justify-center p-4  bg-gray-50 rounded-xl">
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
    <div class="col-span-1 pl-5 pt-5">
      <p>Von: {{startTime}}</p>
      <p>Bis: {{endTime}}</p>
      <p>Fach: {{appointmentDetails.coachingName}}</p>
      <p>Status: {{appointmentDetails.status}}</p>
      <div v-if="userStore.user.userType === 'TEACHER'" class="py-5" >
        <ButtonRegular  text="Akzeptieren" class="bg-secondary" @click="confirm"></ButtonRegular>
        <ButtonRegular  text="Stornieren" class="bg-secondary" @click="reject"></ButtonRegular>
      </div>
    </div>

  </div>


</template>

<script setup>
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import {useUserStore} from "@/stores/user";
import {useAppStore} from "@/stores/app";
import router from "@/router";
import {useConversationStore} from "@/stores/conversation";
import {useAppointmentStore} from "@/stores/appointment";
import {computed, onMounted} from "vue";

const props = defineProps(['appointmentDetails']);
const userStore = useUserStore();
const appStore = useAppStore();
const conversationStore = useConversationStore();
const appointmentStore = useAppointmentStore();

const startDate = computed(() => {
  const date = new Date(props.appointmentDetails.startDate);
  return date.toLocaleDateString('de-DE', {day: '2-digit', month: '2-digit', year: 'numeric'})
})

const startTime = computed(() => {
  const date = new Date(props.appointmentDetails.startDate);
  return date.toLocaleTimeString('de-DE', {hour: '2-digit', minute: '2-digit'})
})

const endTime = computed(() => {
  const date = new Date(props.appointmentDetails.endDate);
  return date.toLocaleTimeString('de-DE', {hour: '2-digit', minute: '2-digit'})
})

async function reject() {
  try {
    const response = await conversationStore.updateAppointment(props.appointmentDetails.id, 'reject');
    await userStore.getAllAppointments();
  } catch (e) {
    console.log(e);
  }
}

async function confirm() {
  try {
    const response = await conversationStore.updateAppointment(props.appointmentDetails.id, 'confirm');
    await userStore.getAllAppointments();
  } catch (e) {
    console.log(e);
  }
}

onMounted(() => { console.log(props.appointmentDetails)})

</script>

<style lang="scss" scoped>

</style>