<template>
  <form @submit.prevent="search">

    <!--District-->
    <div class="w-full flex flex-wrap gap-2 pt-4">
    <div v-for="n in 23" class="inline" :key="`District ${n}`">
      <input type="checkbox" :id="`district_${n}`" :name="`district_${n}`" @change="log"
             :value="n < 10 ? `DISTRICT_10${n}0` : `DISTRICT_1${n}0`" v-model="selectedDistricts">
      <label> Bezirk {{ n }}</label>
    </div>
    </div>

    <br>
    <!--Subject-->
    <div v-for="subject in appStore.subjects" :key="subject" @change="log">
      <label class="pr-2" :for="subject">{{ subject }}</label>
      <input type="radio" name="subject" :id="subject" :value="subject" v-model="selectedSubject">
    </div>

    <!--Minrate/Maxrate-->
    <label for="maxRate">Höchster Stundensatz</label>
    <input type="number" name="maxRate" id="maxRate" v-model="maxRate">

    <button-large text="click" type="submit" class="bg-mainBlue" />


  </form>
</template>

<script setup>
import {useAppStore} from "@/stores/app";
import {ref} from "vue";
import ButtonLarge from "@/components/util/buttons/ButtonLarge.vue";

const appStore = useAppStore();
const selectedSubject = ref('');
const selectedDistricts = ref([]);
const maxRate = ref(20);
const emit = defineEmits({result: Object});

function log() {
  console.log(selectedSubject.value);
  console.log(selectedDistricts.value);
}

async function search() {
  try {
    const response = await appStore.filterTeachers(selectedDistricts.value, selectedSubject.value, 1, maxRate.value);
    console.log(response.data);
    if(response.data) {
      emit('result', response.data);
    }
  } catch (e) {
    console.log('Error while searching for teacher: ' + e);
  }
}

</script>

<style lang="scss" scoped>

</style>