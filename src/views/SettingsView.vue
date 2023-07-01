<template>
  <div class="container max-w-6xl mx-auto text-center bg-white">
    <NavBar class="md:mb-12"/>

    <CardNormal class="w-fit mx-auto"
                title="Profilbild bearbeiten"
                :button-visible="false"
    >

      <ImageSettings />
    </CardNormal>

  </div>
</template>

<script setup>
import NavBar from "@/components/global/NavBar.vue";
import ImageSettings from "@/components/profile/image/ImageSettings.vue";
import CardNormal from "@/components/util/elements/CardNormal.vue";
import {ref} from "vue";

function test(e) {
  console.log(e)
}

const uploadNow = ref(false);

</script>

<style lang="scss" scoped>

</style>