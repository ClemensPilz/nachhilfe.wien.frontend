<template>
  <form>

    <!--District-->
    <div v-for="subject in appStore.subjects" :key="subject" @change="log">
      <label :for="subject">{{ subject }}</label>
      <input type="checkbox" :name="subject" :id="subject" :value="subject" v-model="selectedSubjects">
    </div>

    <!--Subject-->

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

function log() {
  console.log(selectedSubjects.value);
}

</script>

<style lang="scss" scoped>

</style>