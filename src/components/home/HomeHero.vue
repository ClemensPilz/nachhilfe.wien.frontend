<template>
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
          <ButtonLarge
            class="bg-mainBlue"
            text="Loslegen"
            @click="
              appStore.registrationModalActive =
                !appStore.registrationModalActive
            "
          />
          <div
            class="flex h-20 w-20 items-center justify-center rounded-full bg-mainYellow shadow-lg hover:cursor-pointer hover:bg-opacity-80 hover:shadow-xl"
          >
            <h3
              class="text-white"
              @click="
                () => {
                  router.push('/faq');
                }
              "
            >
              ?
            </h3>
          </div>
          <p
            class="hover:cursor-pointer hover:opacity-70"
            @click="
              appStore.registrationModalActive =
                !appStore.registrationModalActive
            "
          >
            Lehrer werden
          </p>
        </div>
      </div>
    </div>
    <img
      src="@/assets/images/home/title-mobile.jpg"
      alt="classroom situation with laptop"
      class="mx-auto h-auto w-full max-w-7xl rounded-t-3xl md:hidden"
    />
    <img
      src="@/assets/images/home/header4d.jpg"
      alt="classroom situation with laptop"
      class="mx-auto hidden h-auto w-full max-w-7xl rounded-t-3xl md:block"
    />
  </section>
</template>

<script setup>
import ButtonLarge from "@/components/util/buttons/ButtonLarge.vue";
import { useAppStore } from "@/stores/app";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const router = useRouter();
</script>

<style lang="scss" scoped></style>
