<template>
  <div class="min-h-screen">

    <section id="hero">
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
           class="w-full h-auto max-w-7xl mx-auto md:hidden rounded-t-3xl">
      <img src="@/assets/images/home/title-desktop3.jpg" alt="classroom situation with laptop"
           class="w-full h-auto max-w-7xl mx-auto hidden md:block rounded-t-3xl">
    </section>

    <section id="featureCards" class="bg-white">
      <div class="container max-w-7xl mx-auto py-12 lg:py-20 p-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <CardLarge>
            <template v-slot:content>
              <h1>X</h1>
              <h4 class="text-mainOrange">Hilfe 24/7</h4>
              <p class="text-secondary">Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr zur Verfügung.
              </p>
              <div class="text-right">
                <ButtonRegular class="text-right bg-mainOrange" text="Nachlesen"/>
              </div>
            </template>
          </CardLarge>
          <CardLarge>
            <template v-slot:content>
              <h1>Y</h1>
              <h4>Hilfe 24/7</h4>
              <p class="text-secondary">Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr zur Verfügung.
              </p>
              <div class="text-right">
                <ButtonRegular class="text-right bg-mainBlue" text="Nachlesen"/>
              </div>
            </template>
          </CardLarge>
          <CardLarge>
            <template v-slot:content>
              <h1>Z</h1>
              <h4>Hilfe 24/7</h4>
              <p class="text-secondary">Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr zur Verfügung.
              </p>
              <div class="text-right">
                <ButtonRegular class="text-right bg-mainYellow" text="Nachlesen"/>
              </div>
            </template>
          </CardLarge>
          <CardLarge>
            <template v-slot:content>
              <h1>W</h1>
              <h4>Hilfe 24/7</h4>
              <p class="text-secondary">Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr zur Verfügung.
              </p>
              <div class="text-right">
                <ButtonRegular class="text-right bg-primary" text="Nachlesen"/>
              </div>
            </template>
          </CardLarge>

        </div>
      </div>
    </section>

    <section id="cta">
      <div class="container max-w-7xl mx-auto p-2 lg:p-12">

        <div class="grid grid-cols-3 gap-4">

          <div class="col-span-3 lg:col-span-2 text-center lg:text-left">
            <h3>Einfach anmelden und mitmachen!</h3>
            <p>Du bist Schüler und suchst jemanden, der dir rasch und unkompliziert auf die Sprünge hilfst?
              Nachhilfe.Wien ist die Plattform für dich! Anmelden und Temrmin vereinbaren.</p>
          </div>

          <div class="col-span-3 lg:col-span-1 flex justify-around lg:justify-end lg:items-end">
            <ButtonLarge text="Mehr erfahren" class="bg-mainBlue"/>
          </div>

        </div>

      </div>
    </section>

    <section id="userCards">
      <div class="container max-w-7xl mx-auto p-12 sm:p-2">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

          <CardLarge>
            <template v-slot:image>
              <img src="@/assets/images/home/userCards/student.jpg" alt="" class="w-full">
            </template>
            <template v-slot:content>
              <p>Als Schüler anmelden</p>
              <small>Hier geht's zur Registrierung</small>
            </template>
          </CardLarge>

          <CardLarge>
            <template v-slot:image>
              <img src="@/assets/images/home/userCards/teacher.jpg" alt="" class="w-full">
            </template>
            <template v-slot:content>
              <p>Als Schüler anmelden</p>
              <small>Hier geht's zur Registrierung</small>
            </template>
          </CardLarge>

          <CardLarge>
            <template v-slot:image>
              <img src="@/assets/images/home/userCards/help.jpg" alt="" class="w-full">
            </template>
            <template v-slot:content>
              <p>Als Schüler anmelden</p>
              <small>Hier geht's zur Registrierung</small>
            </template>
          </CardLarge>


        </div>
      </div>
    </section>


  </div>
</template>

<script setup>

import ButtonLarge from "@/components/util/buttons/ButtonLarge.vue";
import {QuestionMarkCircleIcon} from "@heroicons/vue/24/outline";
import CardLarge from "@/components/util/cards/CardLarge.vue";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";

</script>

<style lang="scss" scoped>

</style>