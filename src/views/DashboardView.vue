<template>
  <NavBar/>
  <div class="container max-w-6xl mx-auto min-h-screen">
    <div class="imageContainer topImage flex items-center justify-center">
      <div class="headline-large">Hello Dashboard</div>
    </div>

    <div class="imageContainer middleImage flex items-center justify-center">
      <div class="headline-large">Hello Dashboard</div>
    </div>

    <div class="imageContainer bottomImage flex items-center justify-center">
      <div class="headline-large">Hello Dashboard</div>
    </div>

  </div>
</template>

<script setup>

import NavBar from "@/components/global/NavBar.vue";
</script>

<style lang="scss" scoped>

.imageContainer {
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 100px;
}

.topImage {
  height: 458px;
  background-image: url("@/assets/images/dashboard/top.png");
}

.middleImage {
  height: 787px;
  background-image: url("@/assets/images/dashboard/middle.png");
}

.bottomImage {
  height: 1844px;
  background-image: url("@/assets/images/dashboard/bottom.png");
}

</style>