<template>
  <div class="m-2 w-full">
    <div
      :class="{
        ownMessage: props.senderId === storeId,
        foreignMessage: props.senderId !== storeId,
        appointment: props.type === 'APPOINTMENT',
      }"
    >
      <p v-if="props.type === 'APPOINTMENT'" class="font-bold italic">
        Anfrage für:
        <span class="rounded-3xl bg-secondary px-2 py-1 text-mainYellow">{{
          coachingName
        }}</span>
      </p>

      <div v-if="props.type === 'APPOINTMENT'">
        <small class="block"> Am {{ formatStart(props.start) }} </small>
        <small> {{ duration }} Stunden </small>
      </div>

      <div class="paragraph">
        {{ props.content }}
      </div>
      <div v-if="props.type === 'APPOINTMENT'">
        Status: {{ translateStatus(props.status) }}
      </div>

      <div
        v-if="
          props.type === 'APPOINTMENT' &&
          userStore.user.userType === 'TEACHER' &&
          checkActuality(props.start)
        "
      >
        <ButtonRegular
          class="mr-2 bg-mainOrange"
          v-if="props.status === 'PENDING'"
          text="Ablehnen"
          @click="reject"
        />
        <ButtonRegular
          class="bg-mainBlue"
          v-if="props.status === 'PENDING'"
          text="Annehmen"
          @click="confirm"
        />

        <ButtonRegular
          class="mr-2 bg-mainOrange"
          v-if="props.status === 'CONFIRMED'"
          text="Absagen"
          @click="reject"
        />
      </div>

      <div class="paragraph font-bold">
        {{ formatDate(props.date) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { computed } from "vue";
import { useConversationStore } from "@/stores/conversation";
import { useRouter } from "vue-router";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";

const router = useRouter();
const userStore = useUserStore();
const conversationStore = useConversationStore();
const storeId = computed(() => userStore.user.userId);
const props = defineProps([
  "content",
  "title",
  "id",
  "conversationId",
  "coachingName",
  "status",
  "start",
  "duration",
  "type",
  "senderId",
  "date",
]);
const emit = defineEmits(["reload"]);

async function reject() {
  try {
    const response = await conversationStore.updateAppointment(
      props.id,
      "reject",
    );
    console.log(response);
    alert("Termin abgelehnt");
    emit("reload");
  } catch (e) {
    console.log(e);
  }
}

async function confirm() {
  try {
    const response = await conversationStore.updateAppointment(
      props.id,
      "confirm",
    );
    console.log(response);
    alert("Termin akzeptiert");
    emit("reload");
  } catch (e) {
    console.log(e);
  }
}

function formatDate(timestamp) {
  const date = new Date(timestamp);

  const timeString = date.toTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const today = new Date();
  if (today.getDate() === date.getDate()) {
    return `heute ${timeString.substring(0, 5)}`;
  }

  const dateString = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return `${dateString}, ${timeString.substring(0, 5)}`;
}

function checkActuality(timestamp) {
  const today = new Date();
  const checkDate = new Date(timestamp);
  console.log(today);
  console.log(checkDate);
  return checkDate > today;
}

function formatStart(timestamp) {
  if (timestamp == null) {
    return;
  }
  const date = new Date(timestamp);
  const dateOptions = { day: "2-digit", month: "2-digit", year: "numeric" };
  const timeOptions = { hour: "2-digit", minute: "2-digit" };
  const locale = "de-DE";

  const formattedDate = date.toLocaleDateString(locale, dateOptions);
  const formattedTime = date.toLocaleTimeString(locale, timeOptions);

  return `${formattedDate} um ${formattedTime} Uhr`;
}

function translateStatus(status) {
  if (status === "PENDING") {
    return "Warte auf Rückmeldung";
  } else if (status === "CONFIRMED") {
    return "Bestätigt";
  } else if (status === "REJECTED") {
    return "Abgelehnt";
  }
}
</script>

<style lang="scss" scoped>
.ownMessage {
  @apply ml-auto bg-gray-100 p-2 pr-4 text-right;
}

.foreignMessage {
  @apply bg-lightPrimary p-2 text-left;
}

.ownMessage,
.foreignMessage {
  @apply w-fit rounded-3xl;
}

.appointment {
  @apply border-b-8 border-mainBlue;
}
</style>
