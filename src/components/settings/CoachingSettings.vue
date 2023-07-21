<template>
  <div class="grid w-full grid-cols-4 gap-4">
    <div class="col-span-4 rounded-3xl bg-secondary p-4 sm:col-span-1">
      <CoachingForm @update="getCoachingsFromApi" />
    </div>

    <div
      class="col-span-4 flex h-full w-full flex-wrap justify-center gap-2 rounded-3xl bg-secondary p-4 sm:col-span-3"
    >
      <div
        v-for="coaching in coachings"
        v-show="coaching.active"
        :key="`coaching${coaching.coachingId}`"
        class="flex flex-col items-center gap-1 p-2"
        :data-coachingId="coaching.coachingId"
      >
        <p class="rounded-3xl bg-mainBlue px-4 py-2 text-white">
          {{ coaching.subject }}
        </p>
        <small class="font-thin text-white">{{ coaching.level }}</small>
        <small class="text-white">{{ coaching.rate }}€ / Stunde</small>
        <small
          v-if="idToRemove !== coaching.coachingId"
          class="text-mainYellow underline hover:cursor-pointer hover:text-red-700"
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
                  coaching.rate,
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

const coachings = ref();
const userStore = useUserStore();
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
    await getCoachingsFromApi();
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
    { immediate: true },
  );
});
</script>

<style lang="scss" scoped></style>
