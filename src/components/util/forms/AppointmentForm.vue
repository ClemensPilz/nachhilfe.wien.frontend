<template>
  <form @submit.prevent class="flex flex-col items-center">
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

        <div :class="{ 'text-mainOrange': duration < 1 }">
          Stunden:
          <input
            type="number"
            v-model="duration"
            name="duration"
            id="duration"
            class="mt-2 w-1/4 rounded-xl border-2 border-gray-400 bg-lightPrimary p-2"
          />
        </div>
      </div>
      <br />
      <div
        class="w-full text-center"
        :class="{ 'text-mainOrange': content === '' }"
      >
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
    <div class="my-2 flex justify-end gap-2">
      <ButtonRegular
        class="bg-secondary"
        text="Abbrechen"
        @click="appStore.resetModals()"
      />
      <ButtonRegular class="bg-mainOrange" @click="send" text="OK" />
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useAppStore } from "@/stores/app";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";

const appStore = useAppStore();

const duration = ref(1);
const startTime = ref(new Date());
const content = ref("Hallo!");

const masks = ref({
  modelValue: "YYYY-MM-ddThh:mm:ss.SSS",
});

async function send() {
  if (startTime.value == null || duration.value === 0 || content.value === "") {
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
