<template>

  <div class="my-4 grid grid-cols-3 grid-rows-1 bg-darkPrimary rounded-xl shadow-lg">
    <!--Text-Part-->
    <div class="col-span-2 text-lightPrimary flex flex-col justify-center p-4">
      <div class="text-xl text-accent">{{ name }}</div>
      <div class="text-sm">{{ description }}</div>

      <div id="divider" class="border border-b-1 border-lightPrimary mt-2 mb-3"></div>

      <div class="flex gap-2 flex-wrap text-xs">
        <div v-for="coaching in coachings"
             class="px-2 py-1 rounded-lg border border-white
              hover:border-accent hover:cursor-pointer select-none"
        @click="$emit('requestAppointment', [coaching.coachingId, id])">
          {{ coaching.subject }}: {{ coaching.rate }}€/h
        </div>
      </div>
      <div class="flex gap-2">
        <ButtonPrimary text="Profile" class="w-fit my-3" @click="$emit('profile')"/>
        <ButtonAccent text="Contact" class="w-fit my-3" @click="$emit('contact')"/>
      </div>
    </div>

    <!--Image-Part-->
    <div class="col-span-1">
      <img src="https://placehold.co/200x250" alt="Image of a teacher" class="w-full">
    </div>
  </div>


</template>

<script setup>
import ButtonAccent from "@/components/util/elements/ButtonAccent.vue";
import ButtonPrimary from "@/components/util/elements/ButtonPrimary.vue";

const props = defineProps({
  'id': Number,
  'name': String,
  'description': String,
  'rating': String,
  'coachings': Array
})

const emits = defineEmits(['contact', 'profile', 'requestAppointment']);
</script>

<style lang="scss" scoped>

</style>