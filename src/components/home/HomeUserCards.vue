<template>
  <section id="userCards" class="bg-background pb-4">
    <div class="container mx-auto max-w-7xl p-12 sm:p-2">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <CardLarge
          class="bg-white hover:cursor-pointer hover:shadow-xl"
          @click="
            appStore.registrationModalActive = !appStore.registrationModalActive
          "
        >
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
              <small
                class="underline hover:cursor-pointer hover:opacity-70"
                @click="
                  appStore.registrationModalActive =
                    !appStore.registrationModalActive
                "
                >Registrierung</small
              >
            </div>
          </template>
        </CardLarge>

        <CardLarge
          class="bg-white hover:cursor-pointer hover:shadow-xl"
          @click="
            appStore.registrationModalActive = !appStore.registrationModalActive
          "
        >
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

        <CardLarge
          class="bg-white hover:cursor-pointer hover:shadow-xl"
          @click="router.push('/faq')"
        >
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
</template>

<script setup>
import CardLarge from "@/components/util/cards/CardLarge.vue";
import { useAppStore } from "@/stores/app";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const router = useRouter();
</script>

<style lang="scss" scoped></style>
