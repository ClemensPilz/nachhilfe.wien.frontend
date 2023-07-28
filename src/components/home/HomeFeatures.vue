<template>
  <section id="features" class="bg-white">
    <div class="container mx-auto max-w-7xl p-2 py-12 lg:py-20">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col items-center">
          <ClockIcon class="mx-auto h-[130px] w-[130px]" />
          <h4 class="text-mainOrange">24/7</h4>
          <p class="text-center text-secondary">
            Unsere TrainerInnen stehen dir sieben Tage die Woche, rund um die
            Uhr zur Verfügung. Einfach und unkompliziert.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <UserGroupIcon class="mx-auto h-[130px] w-[130px]" />
          <h4 class="text-mainOrange">25/7</h4>
          <p class="text-center text-secondary">
            Mehr als 25 ausgewählte & kompetente TrainerInnen stehen dir für 7
            verschiedene Fächer zur Verfügung.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <AcademicCapIcon class="mx-auto h-[130px] w-[130px]" />
          <h4 class="text-mainOrange">100/0</h4>
          <p class="text-center text-secondary">
            Wir bieten 100%igen Service an, bei 0% Kompromiss von der Unterstufe
            bis zur Universität.
          </p>
        </div>
        <CardLarge>
          <template v-slot:content>
            <h4>Du hast Fragen?</h4>
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
import { useRouter } from "vue-router";
import {
  ClockIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from "@heroicons/vue/24/outline";

const router = useRouter();
</script>

<style lang="scss" scoped></style>
