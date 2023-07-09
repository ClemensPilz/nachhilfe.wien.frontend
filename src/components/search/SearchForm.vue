<template>
  <form>

    <!--District-->
    <div v-for="n in 23" class="inline">
      <input type="checkbox" :id="`district_${n}`" :name="`district_${n}`" @change="log"
             :value="n < 10 ? `DISTRICT_10${n}0` : `DISTRICT_1${n}0`" v-model="selectedDistricts">
      <label>Bezirk {{ n }}</label>
    </div>

    <!--Subject-->
    <div v-for="subject in appStore.subjects" :key="subject" @change="log">
      <label :for="subject">{{ subject }}</label>
      <input type="checkbox" :name="subject" :id="subject" :value="subject" v-model="selectedSubjects">
    </div>

    <!--Minrate/Maxrate-->
    <label for="maxRate">Höchster Stundensatz</label>
    <input type="number" name="maxRate" id="maxRate">


  </form>
</template>

<script setup>
import {useAppStore} from "@/stores/app";
import {ref} from "vue";

const appStore = useAppStore();
const selectedSubjects = ref([]);
const selectedDistricts = ref([]);

function log() {
  console.log(selectedSubjects.value);
  console.log(selectedDistricts.value);
}

</script>

<style lang="scss" scoped>

</style>