<template>
  <div class="min-h-screen">
    <DevModals />

    <section class="bg-white dark:bg-gray-900">
      <div
        class="px-4 py-9 2xl:container md:px-6 md:py-12 lg:px-20 lg:py-16 2xl:mx-auto"
      >
        <div class="flex flex-col justify-between gap-8 lg:flex-row">
          <div class="flex w-full flex-col justify-center lg:w-5/12">
            <h1
              class="pb-4 text-3xl font-bold leading-9 text-gray-800 dark:text-white lg:text-4xl"
            >
              Unsere Mission
            </h1>
            <p
              class="text-base font-normal leading-6 text-gray-600 dark:text-white"
            >
              Unsere Mission als Nachhilfeplattform besteht darin, Bildung und
              Wissen zugänglicher zu machen und Schülern dabei zu helfen, ihr
              volles Potenzial auszuschöpfen. Unser Ziel ist es, eine sichere
              und vertrauenswürdige Plattform zu schaffen, auf der SchülerInnen
              auf erfahrene und kompetenete NachhilfelehrerInnen treffen können.
            </p>
            <br />
            <p class="font-bold text-mainBlue">
              Einfach gemeinsam besser lernen!
            </p>
          </div>
          <div class="w-full lg:w-8/12">
            <video
              src="@/assets/videos/pexels-pressmaster-3209298-1920x1080-25fps.mp4"
              autoplay
              loop
              class="h-auto w-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div class="flex flex-col justify-between gap-8 pt-12 lg:flex-row">
          <div class="flex w-full flex-col justify-center lg:w-5/12">
            <h1
              class="text-mainBlue-800 pb-4 text-3xl font-bold leading-9 dark:text-white lg:text-4xl"
            >
              Unser Team
            </h1>
            <p
              class="text-base font-normal leading-6 text-gray-600 dark:text-white"
            >
              Unser Team besteht aus drei motivierten und wissensdurstigen
              Entwicklern, die es sich zum Ziel gemacht haben, Wissen auf
              einfache Weise zu vermitteln. Denn wie es so schön heißt
            </p>
            <br />
            <p class="font-bold text-mainBlue">
              "Mit dem Wissen ist es wie mit der Liebe: Je mehr man es teilt,
              desto größer wird es."
            </p>
          </div>
          <div class="w-full lg:w-8/12 lg:pt-8">
            <div
              class="mx-20 grid grid-cols-1 rounded-md shadow-lg md:mx-0 md:grid-cols-3 lg:gap-4"
            >
              <div class="flex flex-col items-center justify-center p-4 pb-6">
                <img
                  class=""
                  :src="dominikImage"
                  alt="Image of Dominik Köberl"
                />
                <ButtonRegular
                  text="Dominik"
                  @click="() => (appStore.devModals.dominik = true)"
                  class="mt-5 bg-mainBlue"
                >
                  Dominik
                </ButtonRegular>
              </div>
              <div class="flex flex-col items-center justify-center p-4 pb-6">
                <img class="" :src="clemensImage" alt="Image of Clemens Pilz" />
                <ButtonRegular
                  text="Clemens"
                  @click="() => (appStore.devModals.clemens = true)"
                  class="mt-5 bg-mainBlue"
                >
                  Clemens
                </ButtonRegular>
              </div>
              <div class="flex flex-col items-center justify-center p-4 pb-6">
                <img class="" :src="reneImage" alt="Image of René Günürün" />
                <ButtonRegular
                  text="René"
                  @click="() => (appStore.devModals.rene = true)"
                  class="mt-5 bg-mainBlue"
                >
                  René
                </ButtonRegular>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import clemensImage from "@/assets/images/team/clemens.jpg";
import dominikImage from "@/assets/images/team/dominik.jpg";
import reneImage from "@/assets/images/team/rene.jpg";
import { useAppStore } from "@/stores/app.js";
import DevModals from "@/components/aboutUs/DevModals.vue";
import ContactForm from "@/components/aboutUs/ContactForm.vue";
const activeModal = ref(0);

function setActiveModal(modalNumber) {
  activeModal.value = activeModal.value === modalNumber ? 0 : modalNumber;
}

const email = ref("");
const subject = ref("");
const message = ref("");
const appStore = useAppStore();

function handleSubmit() {
  if (!email.value || !subject.value || message.value.trim().length < 25) {
    alert("Please fill out all required fields correctly.");
    console.log("validity check error");
  } else {
    console.log("Form is valid");
    setActiveModal(4);
    email.value = "";
    subject.value = "";
    message.value = "";
  }
}
</script>

<style lang="scss" scoped></style>
