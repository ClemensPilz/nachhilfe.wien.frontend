<template>

  <!--Container-->
  <div class="container max-w-6xl mx-auto text-center bg-white">
    <NavBar class="md:mb-12"/>

    <!--TopSection-Container-->
    <div class="md:grid md:grid-cols-3 grid-cols-1 gap-4 items-center">

      <!--Image-->
      <div class="order-1 md:order-2 flex justify-center">
        <img class="w-full md:w-48 md:rounded-full shadow-xl"
             src="https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=838&q=80"
             alt="profile picture of a funny guy">
      </div>

      <!--Stats-->
      <div class="order-2 md:order-1 flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-6">

        <div class="flex flex-col items-center">
          <div class="text-2xl font-bold text-accent">22</div>
          <div class="text-lg text-darkPrimary w-fit">Kommentare</div>
        </div>

        <div class="flex flex-col items-center">
          <div class="text-2xl font-bold text-accent">4.5</div>
          <div class="text-lg text-darkPrimary w-fit">Bewertung</div>
        </div>

      </div>

      <!--Buttons-->
      <div class="order-3 md:order-3 flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-6">
        <ButtonPrimary text="Button Primary"/>
        <ButtonSecondary text="Button Secondary"/>
        <ButtonAccent text="Button Accent" />
      </div>

    </div>


    <!--BodySection-Container-->
    <div
        class="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div
          class="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        Clemens Pilz
      </div>
      <div class="p-6">
        <h5
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Tired Casual
        </h5>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          With supporting text below as a natural lead-in to additional
          content.
        </p>

        <ButtonAccent text="Termin vereinbaren"></ButtonAccent>

      </div>
      <div
          class="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        2 days ago
      </div>
    </div>


  </div>

</template>

<script setup>

import NavBar from '@/components/global/NavBar.vue'
import ButtonPrimary from '@/components/util/elements/ButtonPrimary.vue'
import {
  Ripple,
  initTE,
} from "tw-elements";
import {onMounted} from "vue";
import ButtonSecondary from "@/components/util/elements/ButtonSecondary.vue";
import ButtonAccent from "@/components/util/elements/ButtonAccent.vue";

onMounted(() => initTE({Ripple}));
</script>

<style lang="scss" scoped>

</style>