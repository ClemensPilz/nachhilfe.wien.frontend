<template>

  <!--Test Home View-->
  <!--Container-->
    <div class="container max-w-6xl min-h-full mx-auto">
        <!--Top-Jumbo-->
        <section class="mb-8">

        <div
                class="bigImage relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
                style="height: 400px">
            <div
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                    style="background-color: rgba(0, 0, 0, 0.5)">
                <div class="flex h-full items-center justify-center">
                    <div class="text-white">
                        <h2 class="mb-4 text-4xl bg-primary px-2 font-semibold text-white">nachhilfe.wien</h2>
                        <h4 class="mb-6 text-xl font-semibold text-lightPrimary">Wir bringen dich auf Zack!</h4>
                        <button
                                type="button"
                                class="rounded bg-accent text-white p-4 py-2"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                            Termin vereinbaren
                        </button>
                    </div>
                </div>
            </div>
        </div>


        </section>

        <!--Feature-Block-->

        <section class="mb-8 md:mx-10 text-center">

            <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                <div class="mb-12 md:mb-0">
                    <div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                             stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
                        </svg>
                    </div>
                    <h5 class="mb-4 text-lg text-darkPrimary font-bold">Hilfe 24/7</h5>
                    <p class="text-primary dark:text-neutral-300">
                        Unsere Trainer stehen dir sieben Tage die Woche, rund um die Uhr zur Verfügung.
                        Über die Suchfunktion findest du Nachhilfe-Lehrer in ganz Wien – da ist garantiert
                        ein Experte für deine Bedürfnisse dabei.
                    </p>
                </div>

                <div class="mb-12 md:mb-0">
                    <div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                             stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"/>
                        </svg>
                    </div>
                    <h5 class="mb-4 text-lg text-darkPrimary font-bold">Sicher und erprobt</h5>
                    <p class="text-primary dark:text-neutral-300">
                        Unser erfahrenes Team arbeitet mit Experten aus dem Bildungsbereich und in der
                        Cyber-Security zusammen, um dir ein sicheres und pädagogisch wertvolles
                        Angebot zu gewährleisten.
                    </p>
                </div>

                <div class="mb-12 md:mb-0">
                    <div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                             stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
                        </svg>
                    </div>
                    <h5 class="mb-4 text-lg text-darkPrimary font-bold">Extremely schnell</h5>
                    <p class="text-primary dark:text-neutral-300">
                        Lehrer finden, anschreiben, Termin vereinbaren – noch nie war
                        Nachhilfe so einfach! Melde dich jetzt an und erhalte binnen Minuten
                        eine Termin bei einem Lehrer deiner Wahl.
                    </p>
                </div>
            </div>
        </section>

        <!--Lehrer und Schüler Cards-->
        <section class="mb-8">

            <div class="flex flex-col md:flex-row gap-4 md:gap-10">


                <CardNormal title="Nachhilfe finden" class="text-center md:text-left md:w1/2"
                            content="Melde dich jetzt an, um einen Nachhilfelehrer in deiner Umgebung zu finden."
                            button-text="anmelden" button-bg="bg-accent"/>

                <CardNormal title="Lehrer werden" class="text-center md:text-right md:w-1/2"
                            content="Du möchtest dein Wissen weitergeben und selbst Lehrer werden? Kontaktiere uns über das Kontaktformular."
                            button-text="Kontakt" button-bg="bg-darkPrimary"/>
            </div>
        </section>
    </div>


  <!--    Test Components-->
    <div class="container max-w-md min-h-screen flex flex-col mx-auto justify-center items-center space-y-4">

        <!--    Normale Cards-->
        <CardNormal title="Hello Container!" content="Ich versuche jetzt einfach mal, einen Card-Text zu erstellen."
                    button-text="Click me" button-bg="bg-primary"/>

        <CardNormal title="Hello Container!" content="Ich versuche jetzt einfach mal, einen Card-Text zu erstellen."
                    button-text="Click me" button-bg="bg-secondary"/>

        <CardNormal title="Hello Container!" content="Ich versuche jetzt einfach mal, einen Card-Text zu erstellen."
                    button-text="Click me" button-bg="bg-accent"/>

        <!--    Image-Cards-->
        <CardImage title="Das ist eine Bild-Card"
                   content="Schaut ganz gut aus, oder? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur atque delectus, deleniti doloremque enim labore molestiae nemo porro quia quidem"
                   button-bg="bg-primary" button-text="Image-Click"/>

        <CardImage title="Das ist eine Bild-Card"
                   content="Schaut ganz gut aus, oder? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur atque delectus, deleniti doloremque enim labore molestiae nemo porro quia quidem"
                   button-bg="bg-secondary" button-text="Image-Click"/>

        <CardImage title="Das ist eine Bild-Card"
                   content="Schaut ganz gut aus, oder? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur atque delectus, deleniti doloremque enim labore molestiae nemo porro quia quidem"
                   button-bg="bg-accent" button-text="Image-Click"/>

        <!--Spinners-->
        <div
                class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
  <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
  >Loading...</span
  >
        </div>
        <div
                class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
  <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
  >Loading...</span
  >
        </div>
        <div
                class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-accent motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
  <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
  >Loading...</span
  >
        </div>

    </div>

  <!--stepper-->
    <ul
            data-te-stepper-init
            class="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
        <!--First item-->
        <li
                data-te-stepper-step-ref
                data-te-stepper-step-active
                class="w-[4.5rem] flex-auto">
            <div
                    data-te-stepper-head-ref
                    class="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
      <span
              data-te-stepper-head-icon-ref
              class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
        1
      </span>
                <span
                        data-te-stepper-head-text-ref
                        class="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        step1
      </span>
            </div>
            <div
                    data-te-stepper-content-ref
                    class="absolute w-full p-4 transition-all duration-500 ease-in-out">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </li>

        <!--Second item-->
        <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
            <div
                    data-te-stepper-head-ref
                    class="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
      <span
              data-te-stepper-head-icon-ref
              class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
        2
      </span>
                <span
                        data-te-stepper-head-text-ref
                        class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        step2
      </span>
            </div>
            <div
                    data-te-stepper-content-ref
                    class="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </div>
        </li>

        <!--Third item-->
        <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
            <div
                    data-te-stepper-head-ref
                    class="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
      <span
              data-te-stepper-head-icon-ref
              class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
        3
      </span>
                <span
                        data-te-stepper-head-text-ref
                        class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        step3
      </span>
            </div>
            <div
                    data-te-stepper-content-ref
                    class="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
            </div>
        </li>
    </ul>

  <!--Jumbotron-->
    <div
            class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
            style="background-image: url('https://tecdn.b-cdn.net/img/new/slides/041.webp'); height: 400px">
        <div
                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style="background-color: rgba(0, 0, 0, 0.6)">
            <div class="flex h-full items-center justify-center">
                <div class="text-white">
                    <h2 class="mb-4 text-4xl font-semibold text-accent">Heading</h2>
                    <h4 class="mb-6 text-xl font-semibold text-lightPrimary">Subheading</h4>
                    <button
                            type="button"
                            class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                        Call to action
                    </button>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>


import CardNormal from "@/components/util/elements/CardNormal.vue";
import CardImage from "@/components/util/elements/CardImage.vue";

import {
    Stepper,
    initTE,
} from "tw-elements";
import {onMounted} from "vue";

onMounted(() => initTE({Stepper}));
</script>

<style lang="scss" scoped>

.bigImage {
  background-image: url("@/assets/images/home/title-desktop5.jpg");
}

</style>