<template>
  <div class="min-h-screen">
    <!--Hero-Section-->
    <HomeHero />
    <!--Features-->
    <HomeFeatures />

    <!--Call to action-->
    <HomeCta />

    <!--UserCards-->
    <HomeUserCards />
  </div>
</template>

<script setup>
import HomeHero from "@/components/home/HomeHero.vue";
import HomeFeatures from "@/components/home/HomeFeatures.vue";
import HomeCta from "@/components/home/HomeCta.vue";
import HomeUserCards from "@/components/home/HomeUserCards.vue";
</script>

<style lang="scss" scoped></style>
