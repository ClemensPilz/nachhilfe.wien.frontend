<template>
  <section class="flex flex-grow flex-col">
    <div class="v container mx-auto px-6 py-12 lg:px-20">
      <h2 class="text-center text-5xl md:text-6xl">Persönlicher Kalender</h2>
      <div class="mt-5">
        <CalendarComponent />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import CalendarComponent from "@/components/calendar/CalendarComponent.vue";

const route = useRoute();
const userStore = useUserStore();
const userId = route.params.userId;
const firstName = ref();
const props = defineProps({
  appointments: Array,
  selectedDate: String,
});

async function getUserData(userId) {
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "get",
      url: `${userStore.url}/user/${userId}`,
    });
    firstName.value = response.data.firstName;
  } catch (e) {
    console.log(e);
  }
}
</script>

<style scoped lang="scss">
//@media (min-width: 1024px) {
//  .about {
//    min-height: 100vh;
//    display: flex;
//    align-items: center;
//  }
//}
</style>
