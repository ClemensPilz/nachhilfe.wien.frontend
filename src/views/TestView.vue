<template>
  <div class="bg-background min-h-screen">
    <nav class="max-w-7xl mx-auto mb-20 pt-8 px-8 flex items-center justify-between">
      <h4 id="logo" class="text-mainOrange">logo</h4>
      <ul class="flex gap-12 text-xl">
        <li class="hover:cursor-pointer">Home</li>
        <li class="hover:cursor-pointer">About</li>
        <li class="hover:cursor-pointer">FAQ</li>
        <li class="hover:cursor-pointer text-mainBlue">Login</li>
      </ul>
    </nav>

    <section>
      <div class="container max-w-7xl mx-auto px-4 mb-8">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="flex flex-col text-center md:text-left col-span-1">
            <small class="text-mainBlue">Nachhilfe-Plattform</small>
            <h1>Finde jetzt Nachhilfe</h1>
          </div>
          <div class="flex items-center md:mt-auto justify-around md:justify-end gap-8 col-span-1">
            <ButtonLarge class="bg-mainBlue" text="Loslegen"/>
            <div class="rounded-full w-24 h-24 bg-mainYellow shadow-lg flex items-center justify-center">
              <h2 class="text-white">?</h2>
            </div>
            <p>Lehrer werden</p>
          </div>
        </div>
      </div>
      <img src="@/assets/images/home/title-mobile3.jpg" alt="classroom situation with laptop"
           class="w-full h-auto max-w-7xl mx-auto mb-20 md:hidden">
      <img src="@/assets/images/home/title-desktop3.jpg" alt="classroom situation with laptop"
           class="w-full h-auto max-w-7xl mx-auto mb-20 hidden md:block">
    </section>

    <section>
      <div class="container max-w-7xl mx-auto p-2">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-white border rounded-3xl p-6 shadow-lg ">
            <h1>X</h1>
            <h4 class="text-mainOrange">Hilfe 24/7</h4>
            <p class="text-secondary">Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr zur Verfügung.
              Über die Suche findest du
              Lehrer in ganz Wien!</p>
            <div class="text-right">
              <small>Nachlesen</small>
            </div>
          </div>
          <div class="bg-white border rounded-3xl p-6 shadow-lg ">
            <h1>Y</h1>
            <h4>Hilfe 24/7</h4>
            <p class="text-secondary">Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr zur Verfügung.
              Über die Suche findest du
              Lehrer in ganz Wien!</p>
            <div class="text-right">
              <small>Nachlesen</small>
            </div>
          </div>
          <div class="bg-white border rounded-3xl p-6 shadow-lg ">
            <h1>Z</h1>
            <h4>Hilfe 24/7</h4>
            <p class="text-secondary">Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr zur Verfügung.
              Über die Suche findest du
              Lehrer in ganz Wien!</p>
            <div class="text-right">
              <small>Nachlesen</small>
            </div>
          </div>
          <div class="bg-white border rounded-3xl p-6 shadow-lg ">
            <h1>W</h1>
            <h4>Hilfe 24/7</h4>
            <p class="text-secondary">Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr zur Verfügung.
              Über die Suche findest du
              Lehrer in ganz Wien!</p>
            <div class="text-right">
              <small>Nachlesen</small>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>

import ButtonLarge from "@/components/util/buttons/ButtonLarge.vue";
import {QuestionMarkCircleIcon} from "@heroicons/vue/24/outline";

</script>

<style lang="scss" scoped>

</style>