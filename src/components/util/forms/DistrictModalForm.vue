<template>
  <div class="flex flex-wrap gap-4">
    <div v-for="district in districts">{{ district.slice(9) }}</div>
    <div v-if="districts.length < 1">
      Dieser Lehrer hat noch keine Bezirke ausgewählt
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
const districts = computed(() => {
  return appStore.selectedDistricts.sort();
});
</script>

<style lang="scss" scoped></style>
