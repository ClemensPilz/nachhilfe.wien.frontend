<template>
  <section class="min-h-screen flex flex-col">
    <nav-bar/>
    <div class="container mx-auto px-6 py-12 lg:px-20 text-mainBlue">
      <p class="text-sm font-bold uppercase tracking-widest">Persönlicher Kalender</p>
      <h2 class="mt-3 text-4xl sm:text-6xl font-extrabold tracking-wide">
        <span class="text-mainBlue">Willkommen </span>
        <span class="text-yellow-400" :key="firstName"> {{ firstName }} </span>
      </h2>
    </div>
    <div class="flex-grow flex flex-col md:flex-row items-center justify-center">
      <div class="w-full flex items-center justify-center">
        <CalendarComponent/>
      </div>
    </div>
    <div class="pt-8">
      <footer-bar/>
    </div>
  </section>
</template>



<script setup>
import {useUserStore} from "@/stores/user";
import NavBar from "@/components/global/NavBar.vue";
import FooterBar from "@/components/global/FooterBar.vue";
import {ref, onMounted } from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
import CalendarComponent from "@/components/calendar/CalendarComponent.vue";


const route = useRoute();
const userStore = useUserStore();
const userId = route.params.userId;
const firstName = ref();
const props = defineProps({
  appointments: Array,
  selectedDate: String
});

async function getUserData(userId) {
  try {
    const response = await axios({
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      method: 'get',
      url: `${userStore.url}/user/${userId}`
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