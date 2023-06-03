<template>
  <div class="w-full min-h-screen p-4 md:w-2/3">


    <div v-if="props.profile"
         class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full md:flex-row">
      <img
          class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="@/assets/images/superhansi.jpg"
          alt=""/>
      <div class="flex flex-col justify-start p-6">
        <h1 class="mb-2.5 mt-0 text-5xl font-medium leading-tight">
          {{ props.profile.username }}

        </h1>

        <div class="text-2xl text-secondary"
             v-if="props.profile">{{ props.profile.firstname }} {{ props.profile.lastname }}
          <span
              class="inline-block whitespace-nowrap rounded-2xl text-accent bg-lightPrimary px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none"
          >{{ props.profile.avgRating }}</span
          >
        </div>

        <div class="text-darkPrimary my-2">{{ props.profile.description }}</div>

        <div class="flex space-x-2 my-2">

        <span
            class="inline-block whitespace-nowrap w-fit rounded-full bg-primary text-white px-4 py-2 text-center align-baseline text-[0.75em] font-bold leading-none">
            Mathematik</span>
        <span
            class="inline-block whitespace-nowrap w-fit rounded-full bg-primary text-white px-4 py-2 text-center align-baseline text-[0.75em] font-bold leading-none">
            Chemie</span>
        <span
            class="inline-block whitespace-nowrap w-fit rounded-full bg-primary text-white px-4 py-2 text-center align-baseline text-[0.75em] font-bold leading-none">
            Physik</span>

        </div>

      </div>
    </div>


  </div>
</template>

<script setup>
import {StarIcon} from '@heroicons/vue/24/solid';

const props = defineProps({
  profile: Object
})

</script>

<style lang="scss" scoped>


</style>