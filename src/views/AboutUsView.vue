<template>

  <div class="container mx-auto max-w-6xl">
    <NavBar/>

    <section class="bg-white dark:bg-gray-900">
      <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div class="flex flex-col lg:flex-row justify-between gap-8">
          <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About Us</h1>
            <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that
              a reader will be distracted by the readable content of a page when looking at its layout. The point of
              using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for
              us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her
              liberties inviolate; and we will that it be thus observed; which is apparent from</p>
          </div>
          <div class="w-full lg:w-8/12">
            <img class="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People"/>
          </div>
        </div>

        <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Story</h1>
            <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that
              a reader will be distracted by the readable content of a page when looking at its layout. The point of
              using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for
              us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her
              liberties inviolate; and we will that it be thus observed; which is apparent from</p>
          </div>
          <div class="w-full lg:w-8/12 lg:pt-8">
            <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div class="p-4 pb-6 flex justify-center flex-col items-center">
                <img class="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                     alt="Alexa featured Image"/>
                <img class="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                     alt="Alexa featured Image"/>
                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Alexa</p>
              </div>
              <div class="p-4 pb-6 flex justify-center flex-col items-center">
                <img class="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                     alt="Olivia featured Image"/>
                <img class="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                     alt="Olivia featured Image"/>
                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Olivia</p>
              </div>
              <div class="p-4 pb-6 flex justify-center flex-col items-center">
                <img class="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image"/>
                <img class="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image"/>
                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Liam</p>
              </div>
              <div class="p-4 pb-6 flex justify-center flex-col items-center">
                <img class="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                     alt="Elijah featured image"/>
                <img class="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                     alt="Elijah featured image"/>
                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Elijah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight text-mainBlue font-extrabold text-center dark:text-white">Wir freuen uns
          von dir zu lesen...</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Falls dir etwas am
          Herzen liegt, freuen wir uns auf eine Nachricht von dir. Hilf uns dabei unsere Webseite laufend zu
          verbessern.</p>
        <form action="#" class="space-y-8">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Deine
              E-Mail</label>
            <input type="email" id="email"
                   class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                   placeholder="name@nachhilfe-wien.com" required>
          </div>
          <div>
            <label for="subject"
                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Titel</label>
            <input type="text" id="subject"
                   class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                   placeholder="Was möchtest du uns mitteilen?" required>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Deine
              Nachricht</label>
            <textarea id="message" rows="6"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Gib hier bitte deinen Text ein..."></textarea>
          </div>
          <button type="submit"
                  class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Send message
          </button>
        </form>
      </div>
    </section>
  </div>
  <section>
    <FooterBar/>
  </section>
</template>

<script setup>
import NavBar from "@/components/global/NavBar.vue";
import FooterBar from "@/components/global/FooterBar.vue";
</script>