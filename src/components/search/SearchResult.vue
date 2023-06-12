<template>

  <div class="grid grid-cols-3 grid-rows-1 bg-darkPrimary">
    <!--Text-Part-->
    <div class="col-span-2 text-lightPrimary flex flex-col justify-center p-4">
      <div class="text-xl text-accent">Hansi Huber</div>
      <div>Hello Teacher</div>
      <ButtonAccent text="Contact" class="w-fit my-3" />
    </div>
    
    <!--Image-Part-->
    <div class="col-span-1">
      <img src="https://placehold.co/200x250" alt="Image of a teacher" class="w-full">
    </div>
  </div>
  
  
</template>

<script setup>

import ButtonAccent from "@/components/util/elements/ButtonAccent.vue";
</script>

<style lang="scss" scoped>

</style>