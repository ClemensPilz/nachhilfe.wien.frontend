<template>
  <div class="min-h-screen">
    <section id="hero" class="bg-background">
      <div class="container mx-auto mb-8 max-w-7xl px-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="col-span-1 flex flex-col text-center md:text-left">
            <small class="text-mainBlue">Nachhilfe-Plattform</small>
            <h1>Finde jetzt Nachhilfe</h1>
          </div>
          <div
            class="col-span-1 flex items-center justify-around gap-8 md:mt-auto md:justify-end"
          >
            <ButtonLarge class="bg-mainBlue" text="Loslegen" />
            <div
              class="flex h-20 w-20 items-center justify-center rounded-full bg-mainYellow shadow-lg hover:cursor-pointer hover:bg-opacity-80 hover:shadow-xl"
            >
              <h3 class="text-white">?</h3>
            </div>
            <p class="hover:cursor-pointer hover:opacity-70">Lehrer werden</p>
          </div>
        </div>
      </div>
      <img
        src="@/assets/images/home/title-mobile3.jpg"
        alt="classroom situation with laptop"
        class="mx-auto h-auto w-full max-w-7xl rounded-t-3xl md:hidden"
      />
      <img
        src="@/assets/images/home/title-desktop3.jpg"
        alt="classroom situation with laptop"
        class="mx-auto hidden h-auto w-full max-w-7xl rounded-t-3xl md:block"
      />
    </section>

    <section id="features" class="bg-white">
      <div class="container mx-auto max-w-7xl p-2 py-12 lg:py-20">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div class="text-center">
            <ClockIcon class="w-[130px] h-[130px] mx-auto"/>
            <h4 class="text-mainOrange">Hilfe 24/7</h4>
            <p class="text-secondary">
              Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr
              zur Verfügung.
            </p>
          </div>
          <div class="text-center">
            <h1>Y</h1>
            <h4>Hilfe 24/7</h4>
            <p class="text-secondary">
              Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr
              zur Verfügung.
            </p>
          </div>
          <div class="text-center">
            <h1>Z</h1>
            <h4>Hilfe 24/7</h4>
            <p class="text-secondary">
              Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr
              zur Verfügung.
            </p>
          </div>
          <CardLarge>
            <template v-slot:content>
              <h4>Hilfe erhalten</h4>
              <p class="text-secondary">
                Wir stehen dir jederzeit bei Fragen oder Problemen zur
                Verfügung!
              </p>
              <div class="text-right">
                <ButtonRegular class="bg-primary text-right" text="Kontakt" />
              </div>
            </template>
          </CardLarge>
        </div>
      </div>
    </section>

    <section id="cta" class="bg-background">
      <div class="container mx-auto max-w-7xl p-2 lg:p-12">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-3 text-center lg:col-span-2 lg:text-left">
            <h3>Einfach anmelden und mitmachen!</h3>
            <p>
              Du bist Schüler und suchst jemanden, der dir rasch und
              unkompliziert auf die Sprünge hilfst? Nachhilfe.Wien ist die
              Plattform für dich! Anmelden und Termin vereinbaren.
            </p>
          </div>

          <div
            class="col-span-3 flex justify-around lg:col-span-1 lg:items-end lg:justify-end"
          >
            <ButtonLarge text="Mehr erfahren" class="bg-mainBlue" />
          </div>
        </div>
      </div>
    </section>

    <section id="userCards" class="bg-background">
      <div class="container mx-auto max-w-7xl p-12 pb-12 sm:p-2">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <CardLarge class="bg-white hover:cursor-pointer hover:shadow-xl">
            <template v-slot:image>
              <img
                src="@/assets/images/home/userCards/student.jpg"
                alt=""
                class="w-full"
              />
            </template>
            <template v-slot:content>
              <h4 class="text-mainBlue">Als Schüler anmelden</h4>
              <p class="text-secondary">
                Registriere dich und finde einen Nachhilfelehrer
              </p>
              <div class="text-right">
                <small class="underline hover:cursor-pointer hover:opacity-70"
                  >Registrierung</small
                >
              </div>
            </template>
          </CardLarge>

          <CardLarge class="bg-white hover:cursor-pointer hover:shadow-xl">
            <template v-slot:image>
              <img
                src="@/assets/images/home/userCards/teacher.jpg"
                alt=""
                class="w-full"
              />
            </template>
            <template v-slot:content>
              <h4 class="text-mainOrange">Lehrer werden</h4>
              <p class="text-secondary">
                Anderen helfen und dabei auch noch Geld verdienen
              </p>
              <div class="text-right">
                <small class="underline hover:cursor-pointer hover:opacity-70"
                  >Registrierung</small
                >
              </div>
            </template>
          </CardLarge>

          <CardLarge class="bg-white hover:cursor-pointer hover:shadow-xl">
            <template v-slot:image>
              <img
                src="@/assets/images/home/userCards/help.jpg"
                alt=""
                class="w-full"
              />
            </template>
            <template v-slot:content>
              <h4>Jobs</h4>
              <p class="text-secondary">
                Werde Teil unseres Teams - schick uns deine Bewerbung
              </p>
              <div class="text-right">
                <small class="underline hover:cursor-pointer hover:opacity-70"
                  >Kontakt</small
                >
              </div>
            </template>
          </CardLarge>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ButtonLarge from "@/components/util/buttons/ButtonLarge.vue";
import CardLarge from "@/components/util/cards/CardLarge.vue";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import { useUserStore } from "@/stores/user";
import {ClockIcon} from "@heroicons/vue/24/outline";




const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
