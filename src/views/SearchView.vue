<template>
  <div class="container mx-auto max-w-6xl">
    <nav-bar />

    <div class="container min-h-screen max-w-lg mx-auto flex flex-col justify-center mt-4">
        <SearchResult
          name="Hansi Huber"
          description="Student in Wien, will etwas dazuverdienen und mein Wissen weitergeben"
          :coachings="[
              {
                'subject': 'Mathematik',
                'price': '19 €'
              },
              {
                'subject': 'Deutsch',
                'price': '17 €'
              }
          ]"


        /><SearchResult /><SearchResult /><SearchResult /><SearchResult />
    </div>
  </div>
</template>

<script setup>

import SearchResult from "@/components/search/SearchResult.vue";
import NavBar from "@/components/global/NavBar.vue";
</script>

<style lang="scss" scoped>

</style>