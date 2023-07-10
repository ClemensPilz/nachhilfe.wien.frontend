<template>

  <div class="my-4 grid grid-cols-3 grid-rows-1 bg-background rounded-xl shadow-lg">
    <!--Text-Part-->
    <div class="col-span-2 text-primary flex flex-col justify-center p-4">
      <h4 >{{ name }}</h4>
      <p>{{ description }}</p>

      <div id="divider" class="border border-b-1 border-mainYellow mt-2 mb-3"></div>

      <div class="flex gap-2 flex-wrap text-xs">
        <div v-for="coaching in coachings"
             :key="coaching.coachingId"
             class="px-2 py-1 rounded-lg border border-primary
              hover:border-accent hover:cursor-pointer select-none"
             @click="$emit('requestAppointment', {'coachingId': coaching.coachingId, 'teacherId': teacherId, 'coachingName': coaching.subject + ' - ' + coaching.rate + ' €/h'})">
          {{ coaching.subject }}: {{ coaching.rate }}€/h
        </div>
      </div>
      <div class="flex gap-2 mt-2">
        <ButtonRegular text="Profil" class="bg-mainBlue" @click="$emit('profile')" />
        <ButtonRegular text="Kontakt" class="bg-mainOrange" @click="$emit('contact')" />
      </div>
    </div>

    <!--Image-Part-->
    <div class="col-span-1">
      <img src="https://placehold.co/200x250" alt="Image of a teacher" class="w-full rounded-bl-3xl rounded-tr-3xl">
    </div>
  </div>


</template>

<script setup>
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";

const props = defineProps({
  'teacherId': Number,
  'name': String,
  'description': String,
  'rating': String,
  'coachings': Array
})


const emits = defineEmits(['contact', 'profile', 'requestAppointment']);
</script>

<style lang="scss" scoped>

</style>