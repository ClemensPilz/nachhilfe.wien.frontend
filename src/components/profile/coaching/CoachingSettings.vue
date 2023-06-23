<template>

  <div class="w-full my-2 flex flex-wrap justify-center gap-2">
    <div v-for="coaching in coachings" :key="`coaching${coaching.coachingId}`"
         class="flex flex-col items-center p-2 gap-1" :data-coachingId="coaching.coachingId" @click="console.log(coaching.coachingId)">
      <div>{{ coaching.subject }}</div>
      <div>{{ coaching.level }}</div>
      <div>{{ coaching.rate }}€ / Stunde</div>
    </div>
  </div>

  <div>
    <!--coachings from api-->
  </div>

  <CoachingForm @update="getCoachingsFromApi" />




</template>

<script setup>

//get all coachings from api
//display them as flex items
//onclick activbate a modal to modify or delete them
//send request to api
//get all coachings again

import CoachingForm from "@/components/profile/coaching/CoachingForm.vue";
import {onMounted, ref, watch} from "vue";
import axios from "axios";
import {useUserStore} from "@/stores/user";
import {useAppStore} from "@/stores/app";

const coachings = ref();
const userStore = useUserStore();
const appStore = useAppStore();

async function getCoachingsFromApi() {
  try {
    const response = await axios({
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      method: 'get',
      url: `${userStore.url}/teacher/find-teacher/${userStore.userId}`
    });
    coachings.value = response.data.coachings;
  } catch (e) {
    console.log(e);
  }
}

onMounted(async () => {
      const unwatch = watch(() => userStore.isAuthenticated, async (newVal) => {
        if (newVal) {
          await getCoachingsFromApi();
          unwatch();
        }
      }, {immediate: true});
    }
);

</script>

<style lang="scss" scoped>

</style>