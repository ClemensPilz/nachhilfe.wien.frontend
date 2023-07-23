<template>
  <form @submit.prevent>
    <h2 class="mb-4 text-2xl">Terminvorschlag</h2>
    <div>
      <div class="w-fit text-center">
        <VDatePicker
          v-model="startTime"
          mode="dateTime"
          is24hr
          hide-time-header
          :masks="masks"
        />
        <br />

        Stunden:
        <input
          type="number"
          v-model="duration"
          name="duration"
          id="duration"
          class="mt-2 w-1/4 rounded-xl border-2 border-gray-400 bg-lightPrimary p-2"
        />
      </div>
      <br />
      <div class="w-full text-center">
        Anmerkungen, Ort, etc:
        <br />
        <input
          type="text"
          v-model="content"
          id="content"
          class="mt-2 rounded-xl border-2 border-gray-400 bg-lightPrimary p-2"
        />
      </div>

      <slot />
    </div>

    <!--Buttons-->
    <div class="flex justify-end gap-2">
      <button
        class="mt-4 w-fit rounded-xl bg-lightPrimary px-4 py-2 text-white"
        @click="appStore.resetModals()"
      >
        Abbrechen
      </button>
      <button
        class="mt-4 w-fit rounded-xl bg-accent px-4 py-2 text-white"
        @click="send"
      >
        OK
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();

const duration = ref();
const startTime = ref(new Date());
const content = ref();

const masks = ref({
  modelValue: "YYYY-MM-ddThh:mm:ss.SSS",
});

async function send() {
  if (
    startTime.value == null ||
    duration.value == null ||
    content.value == null
  ) {
    console.log("invalid");
    return;
  }
  try {
    await appStore.postAppointment(
      appStore.selectedCoaching.teacherId,
      appStore.selectedCoaching.coachingId,
      startTime.value,
      duration.value,
      content.value,
    );
  } catch (e) {
    console.log(e);
  } finally {
    appStore.resetModals();
  }
}
</script>

<style lang="scss" scoped></style>
