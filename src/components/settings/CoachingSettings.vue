<template>
  <div class="w-full grid grid-cols-4 gap-4">
    <div class="col-span-4 sm:col-span-1 bg-secondary p-4 rounded-3xl">
      <CoachingForm @update="getCoachingsFromApi" />
    </div>

    <div
      class="w-full flex flex-wrap justify-center gap-2 col-span-4 sm:col-span-3 bg-secondary p-4 rounded-3xl h-full"
    >
      <div
        v-for="coaching in coachings"
        v-show="coaching.active"
        :key="`coaching${coaching.coachingId}`"
        class="flex flex-col items-center p-2 gap-1"
        :data-coachingId="coaching.coachingId"
        @click="console.log(coaching.coachingId)"
      >
        <p class="bg-mainBlue text-white px-4 py-2 rounded-3xl">
          {{ coaching.subject }}
        </p>
        <small class="text-white font-thin">{{ coaching.level }}</small>
        <small class="text-white">{{ coaching.rate }}€ / Stunde</small>
        <small
          v-if="idToRemove !== coaching.coachingId"
          class="text-mainYellow underline hover:text-red-700 hover:cursor-pointer"
          @click="
            () => {
              idToRemove = coaching.coachingId;
            }
          "
          >Löschen</small
        >
        <div v-else>
          <small
            @click="
              () => {
                idToRemove = -1;
              }
            "
            class="mr-1 hover:cursor-pointer"
            >zurück</small
          >
          <small
            @click="
              () => {
                deleteCoaching(
                  coaching.coachingId,
                  coaching.level,
                  coaching.rate
                );
              }
            "
            class="text-red-700 underline hover:cursor-pointer"
            >löschen</small
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CoachingForm from "@/components/settings/CoachingForm.vue";
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/user";
import { useAppStore } from "@/stores/app";
import router from "@/router";

const coachings = ref();
const userStore = useUserStore();
const appStore = useAppStore();
const idToRemove = ref(-1);

async function getCoachingsFromApi() {
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "get",
      url: `${userStore.url}/teacher/find-teacher/${userStore.userId}`,
    });
    coachings.value = response.data.coachings;
  } catch (e) {
    console.log(e);
  }
}

async function deleteCoaching(id, level, rate) {
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "PUT",
      url: `${userStore.url}/coaching/update-coaching/${id}`,
      data: {
        level,
        rate,
        active: false,
      },
    });
    await router.go(0);
  } catch (e) {
    console.log("Fehler beim Löschen des Coachings: " + e);
  }
}

onMounted(async () => {
  const unwatch = watch(
    () => userStore.isAuthenticated,
    async (newVal) => {
      if (newVal) {
        await getCoachingsFromApi();
        unwatch();
      }
    },
    { immediate: true }
  );
});
</script>

<style lang="scss" scoped></style>
