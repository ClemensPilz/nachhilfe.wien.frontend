<template>
  <section id="features" class="bg-white">
    <div class="container mx-auto max-w-7xl p-2 py-12 lg:py-20">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="text-center">
          <h1>X</h1>
          <h4 class="text-mainOrange">Hilfe 24/7</h4>
          <p class="text-secondary">
            Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr zur
            Verfügung.
          </p>
        </div>
        <div class="text-center">
          <h1>Y</h1>
          <h4>Hilfe 24/7</h4>
          <p class="text-secondary">
            Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr zur
            Verfügung.
          </p>
        </div>
        <div class="text-center">
          <h1>Z</h1>
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
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="scss" scoped></style>
