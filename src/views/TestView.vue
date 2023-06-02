<template>
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

</style>