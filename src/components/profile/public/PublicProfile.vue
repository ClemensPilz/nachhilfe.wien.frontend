<template>
  <!-- Review Modal hidden on initial page load -->
  <ReviewModal
      :key="route.params.userId"
      :isOpen="reviewModalOpen"
      title="Review verfassen"
      @update:reviewModalOpen="(v) => (reviewModalOpen = v)"
  />

  <!--Container-->
  <div class="mt-10">
    <!--Programmatic-->
    <div v-if="props.profile">
      <!--TopSection-Container-->
      <div class="md:grid md:grid-cols-3 grid-cols-1 gap-4 items-center">
        <!--Image-->
        <div class="order-1 md:order-2 flex justify-center">
          <img
              class="w-full md:w-48 md:rounded-full shadow-xl"
              :src="props.profile.image ? props.profile.image : 'https://placehold.co/600x400'"
              alt="profile picture of a funny guy"
          />
        </div>

        <!--Stats-->
        <div
            class="order-2 md:order-1 flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <div class="flex flex-col items-center">
            <div class="text-2xl font-bold text-accent">22</div>
            <div class="text-lg text-primary w-fit">Kommentare</div>
          </div>

          <div class="flex flex-col items-center">
            <div class="text-2xl font-bold text-accent">
              {{ props.profile.averageRatingScore }}
            </div>
            <div class="text-lg text-primary w-fit">Bewertung</div>
          </div>
        </div>

        <!--Buttons-->
        <div
            class="order-3 px-32 sm:px-40 md:order-3 flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <ButtonPrimary text="Termin"/>
          <ButtonSecondary text="Review" @click="reviewModalOpen = true"/>
        </div>
      </div>

      <!--BodySection-Container-->
      <div
          class="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
      >
        <div
            class="border-b-2 border-neutral-100 px-6 py-3 text-primary italic"
        >
          {{ props.profile.firstName }} {{
            props.profile.lastName
          }}<span v-if="props.profile.userType === 'TEACHER'">, Lehrer</span>
        </div>
        <div class="p-6">
          <h5 class="mb-2 headline">
            Username
          </h5>
          <p class="mb-4 paragraph">
            {{ props.profile.description }}
          </p>

          <div class="w-full my-2 flex flex-wrap justify-center gap-2">
            <div v-for="coaching in props.profile.coachings" :key="`coaching${coaching.coachingId}`"
                 class="flex flex-col items-center p-2 gap-1"
            @click="prepareAppointment(coaching.coachingId)">
              <div>{{ coaching.subject }}</div>
              <div>{{ coaching.level }}</div>
              <div>{{ coaching.rate }}€ / Stunde</div>
            </div>
          </div>

          <AppointmentModal v-if="showModal"
                            title="Termin senden"
                            @close="showModal = !showModal"
                            @send="send"/>

          <div class="flex justify-center gap-2">
            <ButtonAccent text="Nachricht senden" @click="appStore.sendMessage(props.profile.teacherId, true)"/>
            <ButtonAccent text="Test senden" @click="console.log(coachings)"/>
            <button-accent text="updateCoachings" @click=""></button-accent>
          </div>
        </div>
        <div
            class="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50"
        >
          2 days ago
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonPrimary from "@/components/util/elements/ButtonPrimary.vue";
import {Ripple, initTE} from "tw-elements";
import {computed, onMounted, ref} from "vue";
import ButtonSecondary from "@/components/util/elements/ButtonSecondary.vue";
import ButtonAccent from "@/components/util/elements/ButtonAccent.vue";
import axios from "axios";
import {useUserStore} from "@/stores/user";
import {useConversationStore} from "@/stores/conversation";
import router from "@/router";
import ReviewModal from "@/components/profile/public/ReviewModal.vue";
import {useRoute} from "vue-router";
import {useAppStore} from "@/stores/app";
import AppointmentModal from "@/components/global/AppointmentModal.vue";

const props = defineProps({
  profile: Object,
});

const coachings = ref();
const route = useRoute();

const userStore = useUserStore();
const appStore = useAppStore();

const reviewModalOpen = ref(false);
const showModal = ref(false);
const selectedCoachingId = ref();

function prepareAppointment(coachingId) {
  showModal.value = true;
  selectedCoachingId.value = coachingId;
}

const send = async (e) => {
  await appStore.postAppointment(props.profile.teacherId, selectedCoachingId.value, e.startTime, e.duration, e.content)
}

onMounted(() => initTE({Ripple}));
</script>

<style lang="scss" scoped></style>
