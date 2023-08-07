<template>
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
    <div class="flex justify-center">
      <ButtonLargeLinked
        href="mailto:office@clemenspilz.com"
        class="mt-5 rounded bg-mainOrange px-4 py-2"
        text="Kontakt"
      />
    </div>
  </div>
</template>

<script setup>
import ButtonLargeLinked from "@/components/util/buttons/ButtonLargeLinked.vue";
</script>

<style lang="scss" scoped></style>
