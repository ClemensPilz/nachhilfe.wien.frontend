<template>
  <div @click.stop="" class="max-h-screen bg-white py-6 px-10 mx-2 mt-20 rounded-xl">
    <h2 class="text-2xl mb-4">Terminvorschlag</h2>
    <div>
      <form>
        <div class="w-fit text-center">
          <VDatePicker v-model="startTime"
                       mode="dateTime"
                       is24hr
                       hide-time-header
                       :masks="masks"/>
          <br>

          Stunden: <input type="number"
                          v-model="duration"
                          name="duration"
                          id="duration"
                          class="bg-lightPrimary border-2 border-gray-400 p-2 rounded-xl mt-2 w-1/4">
        </div>
        {{ startTime }}asdfasdf
        <br>
        <div class="w-full text-center">
          Anmerkungen, Ort, etc:
          <br>
          <input type="text"
                 v-model="content"
                 id="content"
                 class="bg-lightPrimary border-2 border-gray-400 p-2 rounded-xl mt-2">
        </div>
      </form>
      <slot/>
    </div>


    <!--Buttons-->
    <div class="flex gap-2 justify-end">
      <button class="mt-4 w-fit py-2 px-4 bg-lightPrimary text-white rounded-xl" @click="$emit('close')">Abbrechen
      </button>
      <button class="mt-4 w-fit py-2 px-4 bg-accent text-white rounded-xl"
              @click="send">OK
      </button>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";
import {useAppStore} from "@/stores/app";

const emit = defineEmits(['close']);
const appStore = useAppStore();

const duration = ref();
const startTime = ref(new Date());
const content = ref();

const masks = ref({
  modelValue: 'YYYY-MM-ddThh:mm:ss.SSS'
})

async function send() {
  if (startTime.value == null || duration.value == null || content.value == null) {
    console.log('invalid');
    return;
  }
  try {
    await appStore.postAppointment(appStore.selectedCoaching.teacherId, appStore.selectedCoaching.coachingId, startTime.value, duration.value, content.value);
  } catch (e) {
    console.log(e);
  } finally {
    emit('close');
  }
}

</script>

<style lang="scss" scoped>

</style>