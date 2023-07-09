<template>
  <div class="m-2 w-full">


    <div :class="{
        'ownMessage': props.senderId === storeId,
        'foreignMessage': props.senderId !== storeId,
        'appointment': props.type === 'APPOINTMENT'
      }">

      <div v-if="props.type === 'APPOINTMENT'" class="text-sm text-primary italic font-bold">
        Anfrage für: <span class="text-accent">{{ coachingName }}</span>
      </div>

      <div v-if="props.type === 'APPOINTMENT'">
        <div>
          Am {{ start }}
        </div>
        <div>
          {{ duration }} Stunden
        </div>
      </div>

      <div class="paragraph">
        {{ props.content }}
      </div>
      <div v-if="props.type === 'APPOINTMENT'">Status: {{ status }}</div>

      <div v-if="props.type === 'APPOINTMENT' && userStore.user.userType === 'TEACHER'">
        <ButtonSecondary text="Ablehnen" @click="reject" class="mr-2"/>
        <ButtonPrimary text="Annehmen" @click="confirm"/>
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
import ButtonPrimary from "@/components/util/elements/ButtonPrimary.vue";
import ButtonSecondary from "@/components/util/elements/ButtonSecondary.vue";
import {useConversationStore} from "@/stores/conversation";
import {useRouter} from "vue-router";

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
  @apply border-b-4 border-accent
}


</style>