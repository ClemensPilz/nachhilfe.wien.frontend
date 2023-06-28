<template>
  <div class="modalBackground"
       @click="$emit('close')">

    <div @click.stop="" class="max-h-screen bg-white py-6 px-10 mx-2 mt-20 rounded-xl">
      <h2 class="text-2xl mb-4">{{ title }}</h2>
      <div>
        <slot/>
        <form>
          <div class="w-fit text-center">
            <VDatePicker v-model.string="startTime"
                         mode="dateTime"
                         is24hr
                         hide-time-header
                         :masks="masks"/>
          <br>

            Stunden: <input type="number"
                            v-model="duration"
                            name="duration"
                            id="duration"
                            class="bg-lightPrimary border-2 border-primary p-2 rounded-xl mt-2 w-1/4">
          </div>
        </form>
      </div>


      <!--Buttons-->
      <div class="flex gap-2 justify-end">
        <button class="mt-4 w-fit py-2 px-4 bg-lightPrimary text-white rounded-xl" @click="$emit('close')">Abbrechen
        </button>
        <button class="mt-4 w-fit py-2 px-4 bg-accent text-white rounded-xl"
                @click="$emit('send', time)">OK
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>

import {computed, ref} from "vue";

const emit = defineEmits(['close', 'send']);

const props = defineProps(['title'])

const duration = ref();
const startTime = ref(new Date());

const time = computed(() => {
  return {
    "startTime": startTime.value,
    "duration": duration.value
  }
})

const masks = ref({
  modelValue: 'YYYY-MM-ddThh:mm:ss.SSS'
})


</script>

<style lang="scss" scoped>

.modalBackground {
  @apply fixed inset-0 flex items-center justify-center z-[1001] bg-black bg-opacity-50
}

</style>