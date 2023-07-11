<template>
  <form @submit.prevent="search">

    <div class="w-full grid grid-cols-1 md:grid-cols-4 gap-4 pt-8 text-center md:text-left">

      <div class="col-span-1 md:col-span-2">
        <!--District-->
        <div class="w-full flex flex-wrap gap-2 py-4 justify-center md:justify-start">
          <div v-for="n in 23" class="inline" :key="`District ${n}`">
            <input type="checkbox" :id="`district_${n}`" :name="`district_${n}`"
                   :value="n < 10 ? `DISTRICT_10${n}0` : `DISTRICT_1${n}0`" v-model="selectedDistricts">
            <label :for="`district_${n}`"> Bezirk {{ n }}</label>
          </div>
        </div>

        <ButtonRegular text="Alle auswählen" class="bg-mainOrange" @click="selectAll"/>
        <ButtonRegular text="Keines auswählen" class="bg-secondary" @click="deselectAll"/>
      </div>

      <div class="col-span-1">
        <div class="py-4">
          <p class="font-bold">Was möchtest du lernen?</p>
          <!--Subject-->
          <div v-for="subject in appStore.subjects" :key="subject" @change="log">
            <label class="pr-2" :for="subject">{{ subject }}</label>
            <input type="radio" name="subject" :id="subject" :value="subject" v-model="selectedSubject">
          </div>
        </div>
        </div>

      <div class="col-span-1">

        <!--Minrate/Maxrate-->
        <p class="font-bold">Was darf's kosten?</p>
        <label for="maxRate">Bis zu</label>
        <input type="number" name="maxRate" id="maxRate" v-model="maxRate"
               class="w-fit text-center py-2 rounded-3xl mx-3 border-2">
        <p class="inline">Euro pro Stunde</p>
        <br>

      </div>
    </div>
  </form>

<div class="w-full flex justify-center mt-8">
  <button-large text="Lehrer finden" type="submit" class="bg-mainOrange my-4"/>
</div>
</template>

<script setup>
import {useAppStore} from "@/stores/app";
import {ref, watch} from "vue";
import ButtonLarge from "@/components/util/buttons/ButtonLarge.vue";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";

const appStore = useAppStore();
const selectedSubject = ref('');
const selectedDistricts = ref([]);
const maxRate = ref(20);
const emit = defineEmits({result: Object});

function selectAll() {
  selectedDistricts.value = Array.from({length: 23}, (_, i) => i < 9 ? `DISTRICT_10${i + 1}0` : `DISTRICT_1${i + 1}0`);
}

const deselectAll = () => {
  selectedDistricts.value = [];
};

function log() {
  console.log(selectedSubject.value);
  console.log(selectedDistricts.value);
}

async function search() {
  try {
    const response = await appStore.filterTeachers(selectedDistricts.value, selectedSubject.value, 1, maxRate.value);
    console.log(response.data);
    if (response.data) {
      emit('result', response.data);
    }
  } catch (e) {
    console.log('Error while searching for teacher: ' + e);
  }
}


</script>

<style lang="scss" scoped>

</style>