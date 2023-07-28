<template>
  <div class="min-h-screen">
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
              src="src/assets/videos/pexels-pressmaster-3209298-1920x1080-25fps.mp4"
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
                  @click="() => setActiveModal(1)"
                  class="mt-5 bg-mainBlue"
                >
                  Dominik
                </ButtonRegular>
              </div>
              <div class="flex flex-col items-center justify-center p-4 pb-6">
                <img class="" :src="clemensImage" alt="Image of Clemens Pilz" />
                <ButtonRegular
                  text="Clemens"
                  @click="() => setActiveModal(2)"
                  class="mt-5 bg-mainBlue"
                >
                  Clemens
                </ButtonRegular>
              </div>
              <div class="flex flex-col items-center justify-center p-4 pb-6">
                <img class="" :src="reneImage" alt="Image of René Günürün" />
                <ButtonRegular
                  text="René"
                  @click="() => setActiveModal(3)"
                  class="mt-5 bg-mainBlue"
                >
                  René
                </ButtonRegular>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DominikModal @close="setActiveModal(1)" :modal-active="activeModal" />
      </div>
      <div>
        <ClemensModal @close="setActiveModal(2)" :modal-active="activeModal" />
      </div>
      <div>
        <ReneModal @close="setActiveModal(3)" :modal-active="activeModal" />
      </div>
      <div class="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <h2
          class="mb-4 text-center text-4xl font-extrabold tracking-tight text-mainBlue dark:text-white"
        >
          Wir freuen uns von dir zu lesen...
        </h2>
        <p
          class="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16"
        >
          Falls dir etwas am Herzen liegt, freuen wir uns auf eine Nachricht von
          dir. Hilf uns dabei unsere Webseite laufend zu verbessern.
        </p>
        <form class="space-y-8">
          <div>
            <label
              for="email"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >Deine E-Mail</label
            >
            <input
              type="email"
              v-model="email"
              id="email"
              class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="name@nachhilfe-wien.com"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
            />
          </div>
          <div>
            <label
              for="subject"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >Titel</label
            >
            <input
              type="text"
              v-model="subject"
              id="subject"
              class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Was möchtest du uns mitteilen?"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
              >Deine Nachricht</label
            >
            <textarea
              v-model="message"
              id="message"
              rows="6"
              class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Gib hier bitte deinen Text ein..."
              required
              minlength="25"
            ></textarea>
          </div>
          <div class="flex justify-center">
            <ButtonRegular
              @click.prevent="handleSubmit"
              class="mt-5 rounded bg-mainOrange px-4 py-2"
              text="Senden"
            />
          </div>
        </form>
        <div>
          <ThankYouModal
            @close="setActiveModal(4)"
            :modal-active="activeModal"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import DominikModal from "@/components/aboutUs/DominikModal.vue";
import { ref } from "vue";
import ClemensModal from "@/components/aboutUs/ClemensModal.vue";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import ReneModal from "@/components/aboutUs/ReneModal.vue";
import ThankYouModal from "@/components/aboutUs/ThankYouModal.vue";
import clemensImage from "@/assets/images/team/clemens.jpg";
import dominikImage from "@/assets/images/team/dominik.jpg";
import reneImage from "@/assets/images/team/rene.jpg";

const activeModal = ref(0);

function setActiveModal(modalNumber) {
  activeModal.value = activeModal.value === modalNumber ? 0 : modalNumber;
}

const email = ref("");
const subject = ref("");
const message = ref("");

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
