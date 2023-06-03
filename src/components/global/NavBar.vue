<template>
  <!--  <nav-->
  <!--      class="flex-no-wrap sticky z-[1000] top-0 flex w-full items-center justify-between bg-neutral-100 py-2 shadow-md shadow-black/5 lg:flex-wrap lg:justify-start lg:py-4"-->
  <!--      data-te-navbar-ref>-->
  <!--    <div class="flex w-full flex-wrap  items-center justify-between px-3">-->

  <!--      &lt;!&ndash; Mobile Logo &ndash;&gt;-->
  <!--      <a-->
  <!--          class="mr-4 lg:hidden text-neutral-500 hover:text-neutral-700 focus:text-neutral-700"-->
  <!--          href="#">-->
  <!--        <span class="[&>svg]:w-5">-->
  <!--          <svg-->
  <!--              xmlns="http://www.w3.org/2000/svg"-->
  <!--              viewBox="0 0 24 24"-->
  <!--              fill="currentColor"-->
  <!--              class="h-5 w-5">-->
  <!--            <path-->
  <!--                d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"/>-->
  <!--          </svg>-->
  <!--        </span>-->
  <!--      </a>-->

  <!--      &lt;!&ndash; Mobile-Button &ndash;&gt;-->
  <!--      <button-->
  <!--          class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"-->
  <!--          type="button"-->
  <!--          data-te-collapse-init-->
  <!--          data-te-target="#collapsedContent">-->
  <!--        &lt;!&ndash; Hamburger icon &ndash;&gt;-->
  <!--        <span class="[&>svg]:w-7">-->
  <!--        <svg-->
  <!--            xmlns="http://www.w3.org/2000/svg"-->
  <!--            viewBox="0 0 24 24"-->
  <!--            fill="currentColor"-->
  <!--            class="h-7 w-7">-->
  <!--          <path-->
  <!--              fill-rule="evenodd"-->
  <!--              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"-->
  <!--              clip-rule="evenodd"/>-->
  <!--        </svg>-->
  <!--      </span>-->
  <!--      </button>-->

  <!--      &lt;!&ndash; Collapsible navigation container &ndash;&gt;-->
  <!--      <div-->
  <!--          class="!visible hidden flex-grow text-right basis-[100%] lg:!flex lg:basis-auto"-->
  <!--          id="collapsedContent"-->
  <!--          data-te-collapse-item>-->
  <!--        &lt;!&ndash; Logo &ndash;&gt;-->
  <!--        <a-->
  <!--            class="hidden mb-4 mr-2 mt-3 lg:flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"-->
  <!--            href="#">-->
  <!--          <img-->
  <!--              src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"-->
  <!--              style="height: 15px"-->
  <!--              alt=""-->
  <!--              loading="lazy"/>-->
  <!--        </a>-->
  <!--        &lt;!&ndash; Left navigation links &ndash;&gt;-->
  <!--        <ul-->
  <!--            class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"-->
  <!--            >-->
  <!--          <li class="mb-4 lg:mb-0 lg:pr-2" >-->
  <!--            &lt;!&ndash; Dashboard link &ndash;&gt;-->
  <!--            <RouterLink to="/test"-->
  <!--                class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"-->


  <!--            >home</RouterLink>-->

  <!--          </li>-->
  <!--          &lt;!&ndash; Team link &ndash;&gt;-->
  <!--          <li class="mb-4 lg:mb-0 lg:pr-2" >-->
  <!--            <RouterLink to="/profile/123"-->
  <!--                class="text-neutral-500 hover:text-neutral-700 active:text-accent focus:text-neutral-700 lg:px-2"-->

  <!--            >profile</RouterLink >-->

  <!--          </li>-->
  <!--          &lt;!&ndash; Projects link &ndash;&gt;-->
  <!--          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>-->
  <!--            <a-->
  <!--                class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"-->
  <!--                href="#"-->
  <!--                data-te-nav-link-ref-->
  <!--            >Projects</a-->
  <!--            >-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--      </div>-->

  <!--    </div>-->

  <!--  </nav>-->


  <!--@todo: echte Modals für Login/Registration, Nav fertigstellen-->

  <nav class="sticky top-0 z-[1000]">
    <!--Container-->
    <div class="w-full bg-lightPrimary shadow-xl px-4 md:pr-12 py-4 flex justify-between">
      <div class="text-xl text-accent">
        Nachhilfe.Wien
      </div>

      <!--Toggle-Button-->
      <div class="text-xl text-accent md:hidden" @click="toggle">
        X
      </div>

      <!--Desktop-Links-->
      <div class="hidden md:flex space-x-2">
        <div class="text-right">
          <RouterLink to="/test">Home</RouterLink>
        </div>
        <div class="text-right">
          <RouterLink to="/profile/123">World</RouterLink>
        </div>

      </div>
    </div>
    <!--Mobile-Links-->
    <div class="w-ful flex-col p-2 bg-neutral-100 shadow-xl hiddenLinks md:hidden" id="mobileLinks">
      <div class="text-right">
        <RouterLink to="/test">Home</RouterLink>
      </div>
      <div class="text-right">
        <RouterLink to="/profile/123">World</RouterLink>
      </div>
    </div>


  </nav>
</template>

<script setup>

import {onMounted} from "vue";
import {useRouter, useRoute} from "vue-router";

const route = useRoute;


function toggle() {
  const mobileLinks = document.getElementById("mobileLinks");
  mobileLinks.classList.toggle('hiddenLinks');
}

</script>

<style lang="scss" scoped>

.hiddenLinks {
  display: none;
}

.router-link-active {
  @apply text-accent
}


</style>