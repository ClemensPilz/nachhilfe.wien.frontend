<template>
  <div class="container mx-auto max-w-6xl">
    <section class="bg-white dark:bg-gray-900">
      <div
        class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4"
      >
        <div class="flex flex-col lg:flex-row justify-between gap-8">
          <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1
              class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4"
            >
              Unsere Mission
            </h1>
            <p
              class="font-normal text-base leading-6 text-gray-600 dark:text-white"
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
              class="w-full h-auto"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1
              class="text-3xl lg:text-4xl font-bold leading-9 text-mainBlue-800 dark:text-white pb-4"
            >
              Unser Team
            </h1>
            <p
              class="font-normal text-base leading-6 text-gray-600 dark:text-white"
            >
              Unser Team besteht aus drei motivierten und wissensdurstigen
              Entwicklern, die es sich zum Ziel gemacht hat Wissen auf einfache
              Weise zu vermitteln. Denn wie es so schön heißt
            </p>
            <br />
            <p class="font-bold text-mainBlue">
              "Mit dem Wissen ist es wie mit der Liebe: Je mehr man es teilt,
              desto größer wird es."
            </p>
          </div>
          <div class="w-full lg:w-8/12 lg:pt-8 pl-10">
            <div
              class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md"
            >
              <div class="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  class="md:block hidden"
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="Alexa featured Image"
                />
                <ButtonRegular
                  text="Dominik"
                  @click="setActiveModal(1)"
                  class="mt-5 bg-mainBlue"
                >
                  Dominik</ButtonRegular
                >
              </div>
              <div class="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  class="md:block hidden"
                  src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                  alt="Olivia featured Image"
                />
                <ButtonRegular
                  text="Clemens"
                  @click="setActiveModal(2)"
                  class="mt-5 bg-mainBlue"
                >
                  Clemens</ButtonRegular
                >
              </div>
              <div class="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  class="md:block hidden"
                  src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                  alt="Liam featued Image"
                />
                <img
                  class="md:hidden block"
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="Liam featued Image"
                />
                <ButtonRegular
                  text="René"
                  @click="setActiveModal(3)"
                  class="mt-5 bg-mainBlue"
                >
                  René</ButtonRegular
                >
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
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2
          class="mb-4 text-4xl tracking-tight text-mainBlue font-extrabold text-center dark:text-white"
        >
          Wir freuen uns von dir zu lesen...
        </h2>
        <p
          class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
        >
          Falls dir etwas am Herzen liegt, freuen wir uns auf eine Nachricht von
          dir. Hilf uns dabei unsere Webseite laufend zu verbessern.
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Deine E-Mail</label
            >
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@nachhilfe-wien.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Titel</label
            >
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Was möchtest du uns mitteilen?"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >Deine Nachricht</label
            >
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Gib hier bitte deinen Text ein..."
            ></textarea>
          </div>
          <ButtonRegular class="bg-mainOrange" text="Senden" />
        </form>
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

const activeModal = ref(0);

function setActiveModal(modalNumber) {
  activeModal.value = activeModal.value === modalNumber ? 0 : modalNumber;
}
</script>
