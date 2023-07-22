<template>
  <section id="cta" class="bg-background">
    <div class="container mx-auto max-w-7xl p-2 lg:p-12">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-3 text-center lg:col-span-2 lg:text-left">
          <h3>Einfach anmelden und mitmachen!</h3>
          <p>
            Du bist Schüler und suchst jemanden, der dir rasch und unkompliziert
            auf die Sprünge hilfst? Nachhilfe.Wien ist die Plattform für dich!
            Anmelden und Termin vereinbaren.
          </p>
        </div>

        <div
          class="col-span-3 flex justify-around lg:col-span-1 lg:items-end lg:justify-end"
        >
          <ButtonLarge
            text="Mehr erfahren"
            class="bg-mainBlue"
            @click="router.push('/faq')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonLarge from "@/components/util/buttons/ButtonLarge.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="scss" scoped></style>
