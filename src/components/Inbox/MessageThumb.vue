<template>
  <div class="m-2 w-full">


    <div :class="{
        'ownMessage': props.senderId === storeId,
        'foreignMessage': props.senderId !== storeId,
        'appointment': props.type === 'APPOINTMENT'
      }">

      <p v-if="props.type === 'APPOINTMENT'" class="font-bold italic">
        Anfrage für: <span class="text-mainYellow bg-secondary rounded-3xl px-2 py-1">{{ coachingName }}</span>
      </p>

      <div v-if="props.type === 'APPOINTMENT'">
        <small class="block">
          Am {{ start }}
        </small>
        <small>
          {{ duration }} Stunden
        </small>
      </div>

      <div class="paragraph">
        {{ props.content }}
      </div>
      <div v-if="props.type === 'APPOINTMENT'">Status: {{ translateStatus(props.status) }}</div>

      <div v-if="props.type === 'APPOINTMENT' && userStore.user.userType === 'TEACHER'">
        <ButtonRegular class="mr-2 bg-mainOrange" v-if="props.status === 'PENDING'" text="Ablehnen" @click="reject"/>
        <ButtonRegular class="bg-mainBlue" v-if="props.status === 'PENDING'" text="Annehmen" @click="confirm"/>

        <ButtonRegular class?="bg-mainOrange" v-if="props.status === 'CONFIRMED'" text="Absagen" @click="reject" class="mr-2"/>
      </div>

      <div class="paragraph font-bold">
        {{ props.date }}
      </div>
    </div>

  </div>

</template>

<script setup>
import {useUserStore} from "@/stores/user";
import {computed, onMounted, ref} from "vue";
import {useConversationStore} from "@/stores/conversation";
import {useRouter} from "vue-router";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";

const router = useRouter();
const userStore = useUserStore();
const conversationStore = useConversationStore();
const storeId = computed(() => userStore.user.userId);
const props = defineProps(['content', 'title', 'id', 'coachingName', 'status', 'start', 'duration', 'type', 'senderId', 'date']);

async function reject() {
  try {
    const response = await conversationStore.updateAppointment(props.id, 'reject');
    console.log(response);
    alert('Termin abgelehnt');
    router.go(0)
  } catch (e) {
    console.log(e);
  }
}

async function confirm() {
  try {
    const response = await conversationStore.updateAppointment(props.id, 'confirm');
    console.log(response);
    alert('Termin akzeptiert');
    router.go(0)
  } catch (e) {
    console.log(e);
  }
}

function translateStatus(status) {
  if(status === 'PENDING') {
    return 'Warte auf Rückmeldung';
  } else if (status === 'CONFIRMED') {
    return 'Bestätigt';
  } else if (status === 'REJECTED') {
    return 'Abgelehnt';
  }
}

</script>

<style lang="scss" scoped>

.ownMessage {
  @apply bg-gray-100 text-right p-2 pr-4 ml-auto
}

.foreignMessage {
  @apply bg-lightPrimary text-left p-2
}

.ownMessage, .foreignMessage {
  @apply rounded-3xl w-fit

}

.appointment {
  @apply border-b-8 border-mainBlue
}


</style>