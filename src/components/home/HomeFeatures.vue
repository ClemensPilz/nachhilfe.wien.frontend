<template>
  <section id="features" class="bg-white">
    <div class="container mx-auto max-w-7xl p-2 py-12 lg:py-20">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col items-center">
          <img
              class="w-40 h-35 mt-5 rounded-full overflow-hidden"
              src="@/assets/images/home/featureImages/clock.jpg"
              alt="Clock"
          />
          <h4 class="text-mainOrange">24/7</h4>
          <p class="text-secondary">
            Unsere TrainerInnen stehen dir sieben Tage die Woche, rund um die Uhr zur
            Verfügung.
          </p>
        </div>
        <div class="flex flex-col items-center">
        <ClockIcon class="w-[130px] h-[130px] mx-auto" />
          <h4 class="text-mainOrange">25/6</h4>
          <p class="text-secondary">
            25 kompetente TrainerInnen stehen dir für 6 verschiedene Fächer und allen Schulstufen zur Verfügung.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <img
              class="w-40 h-40 mt-5 rounded-full overflow-hidden"
              src="@/assets/images/home/featureImages/clock.jpg"
              alt="Clock"
          />
          <h4>Hilfe 24/7</h4>
          <p class="text-secondary">
            Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr zur
            Verfügung.
          </p>
        </div>
        <CardLarge>
          <template v-slot:content>
            <h4>Hilfe erhalten</h4>
            <p class="text-secondary">
              Wir stehen dir jederzeit bei Fragen oder Problemen zur Verfügung!
            </p>
            <div class="text-right">
              <ButtonRegular
                  class="bg-primary text-center"
                  text="Kontakt"
                  @click="router.push('/about')"
              />
            </div>
          </template>
        </CardLarge>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import CardLarge from "@/components/util/cards/CardLarge.vue";
import {useRouter} from "vue-router";
import {ClockIcon, LightBulbIcon} from "@heroicons/vue/24/outline";


const router = useRouter();
</script>

<style lang="scss" scoped></style>
