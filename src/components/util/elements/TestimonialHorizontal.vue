<template>
  <div class="p-6 text-center bg-lightPrimary md:p-12 md:py-4 md:text-left">
    <div class="flex justify-center">
      <div class="max-w-3xl">
        <div
            class="m-4 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">
          <!--Testimonial-->
          <div class="md:flex md:flex-row">
            <div
                class="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
              <img
                  :src="props.imgSource"
                  class="rounded-full shadow-md dark:shadow-black/30"
                  :alt="props.imgAlt"/>
            </div>
            <div class="md:ml-6">
              <p
                  class="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                {{ props.content }}
              </p>
              <p
                  class="mb-2 text-xl font-semibold text-primary">
                {{ props.name }}
              </p>
              <p
                  class="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                {{ props.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  content: String,
  name: String,
  description: String,
  imgSource: String,
  imgAlt: String
})

</script>

<style lang="scss" scoped>

</style>