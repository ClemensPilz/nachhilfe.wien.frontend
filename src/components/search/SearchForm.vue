<template>
  <form @submit.prevent="search">
    <div class="grid w-full grid-cols-1 gap-4 pt-8 text-center md:grid-cols-4">
      <div class="settingsCard col-span-1 md:col-span-2">
        <!--District-->
        <div
          class="flex w-full flex-wrap justify-center gap-2 py-4 md:justify-start"
        >
          <div v-for="n in 23" class="inline" :key="`District ${n}`">
            <input
              type="checkbox"
              :id="`district_${n}`"
              :name="`district_${n}`"
              :value="n < 10 ? `DISTRICT_10${n}0` : `DISTRICT_1${n}0`"
              v-model="selectedDistricts"
            />
            <label :for="`district_${n}`"> Bezirk {{ n }}</label>
          </div>
        </div>

        <ButtonRegular
          text="Alle auswählen"
          class="bg-secondary"
          @click="selectAll"
        />
        <ButtonRegular
          text="Keines auswählen"
          class="bg-secondary"
          @click="deselectAll"
        />
      </div>

      <div class="settingsCard col-span-1">
        <div class="py-4">
          <p class="font-bold">Was möchtest du lernen?</p>
          <!--Subject-->
          <div v-for="subject in appStore.subjects" :key="subject">
            <label class="pr-2" :for="subject">{{ subject }}</label>
            <input
              type="radio"
              :name="subject"
              :id="subject"
              :value="subject"
              v-model="selectedSubject"
            />
          </div>
        </div>
      </div>

      <div class="settingsCard col-span-1">
        <!--Minrate/Maxrate-->
        <p class="font-bold">Was darf's kosten?</p>
        <input
          type="number"
          name="maxRate"
          id="maxRate"
          v-model="maxRate"
          class="mx-3 w-16 rounded-3xl border-2 py-2 pl-4 text-center"
        />
        <p class="inline">Euro/Stunde</p>
        <br />

        <p class="font-bold">Niveau</p>
        <!--Subject-->
        <div v-for="level in appStore.levels" :key="level">
          <label class="pr-2" :for="level">{{ level }}</label>
          <input
            type="radio"
            :name="level"
            :id="level"
            :value="level"
            v-model="selectedLevel"
          />
        </div>
      </div>
    </div>

    <div class="mt-8 flex w-full justify-center">
      <ButtonLarge
        text="Lehrer finden"
        type="submit"
        class="my-4 bg-mainOrange"
      />
    </div>
  </form>
</template>

<script setup>
import { useAppStore } from "@/stores/app";
import { ref, watch } from "vue";
import ButtonLarge from "@/components/util/buttons/ButtonLarge.vue";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";

const appStore = useAppStore();
const selectedSubject = ref("");
const selectedLevel = ref("");
const selectedDistricts = ref([]);
const maxRate = ref(20);
const emit = defineEmits({ result: Object });

function selectAll() {
  selectedDistricts.value = Array.from({ length: 23 }, (_, i) =>
    i < 9 ? `DISTRICT_10${i + 1}0` : `DISTRICT_1${i + 1}0`,
  );
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
    const response = await appStore.filterTeachers(
      selectedDistricts.value,
      selectedSubject.value,
      1,
      maxRate.value,
      selectedLevel.value,
    );
    console.log(response.data);
    if (response.data) {
      emit("result", response.data);
    }
  } catch (e) {
    console.log("Error while searching for teacher: " + e);
  }
}
</script>

<style lang="scss" scoped>
.settingsCard {
  @apply rounded-3xl p-4 shadow-2xl;
}
</style>
