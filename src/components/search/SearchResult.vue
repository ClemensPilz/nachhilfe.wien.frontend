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
              hover:border-accent hover:cursor-pointer select-none">
          {{ coaching.subject }}: {{ coaching.price }}
        </div>
      </div>
      <ButtonAccent text="Contact" class="w-fit my-3"/>
    </div>

    <!--Image-Part-->
    <div class="col-span-1">
      <img src="https://placehold.co/200x250" alt="Image of a teacher" class="w-full">
    </div>
  </div>


</template>

<script setup>
import ButtonAccent from "@/components/util/elements/ButtonAccent.vue";

const props = defineProps({
  'name': String,
  'description': String,
  'rating': String,
  'coachings': Array
})
</script>

<style lang="scss" scoped>

</style>