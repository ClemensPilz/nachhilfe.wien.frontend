<template>
  <div class="min-h-screen">
    <FormModal :is-active="appStore.reviewModalActive">
      <CardLarge class="m-0">
        <template v-slot:content>
          <ReviewForm :teacher-id="userId" />
        </template>
      </CardLarge>
    </FormModal>

    <FormModal :is-active="appStore.appointmentModalActive">
      <CardLarge class="m-0">
        <template v-slot:content>
          <AppointmentForm />
        </template>
      </CardLarge>
    </FormModal>

    <FormModal :is-active="appStore.districtModalActive">
      <CardLarge class="m-0">
        <template v-slot:content>
          <DistrictModalForm />
        </template>
      </CardLarge>
    </FormModal>

    <div v-if="loaded">
      <h3 v-if="!profile" class="text-center">User nicht gefunden!</h3>

      <section v-else id="userProfile">
        <!--Container for content-->
        <div class="container mx-auto mt-8 min-h-screen max-w-7xl px-2">
          <!--Grid-Layout-->
          <div class="grid w-full grid-cols-2 items-center gap-4">
            <!--Picture-->
            <div id="teacherPicture" class="group">
              <div class="h-[500px] w-full pl-16">
                <img
                  :src="profile.image ? profile.image : stockPhoto"
                  alt="picture of a teacher"
                  class="h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            <!--Teacher Information-->
            <div
              v-if="userType === 'TEACHER'"
              id="teacherInformation"
              class="col-span-2 md:col-span-1"
            >
              <ul>
                <li class="flex items-center">
                  <UserIcon class="w-20 text-mainOrange" />

                  <div>
                    <h3>{{ profile.firstName }} {{ profile.lastName }}</h3>
                    <p>{{ profile.description }}</p>
                    <small
                      >Durchschnittl. Wertung:
                      {{ profile.averageRatingScore || "-" }}</small
                    >
                  </div>
                </li>

                <li class="flex items-center">
                  <AcademicCapIcon class="w-20 text-secondary" />
                  <div>
                    <div
                      v-for="coaching in profile.coachings"
                      v-show="coaching.active"
                    >
                      <p
                        :class="{
                          'my-1 w-fit rounded-3xl border px-4 py-1 hover:cursor-pointer hover:text-mainBlue':
                            userStore.user.userType === 'STUDENT',
                          'select-none': true,
                        }"
                        @click="openAppointmentModal(coaching.coachingId)"
                      >
                        {{ coaching.subject }}
                        <span class="text-xs">{{ coaching.level }}</span>
                      </p>
                    </div>
                    <div v-if="profile.coachings.length < 1">
                      Dieser Lehrer bietet aktuell keine Nachhilfe an
                    </div>
                  </div>
                </li>

                <li class="flex items-center">
                  <ChatBubbleLeftRightIcon class="w-20 text-secondary" />
                  <div>
                    <small class="block pb-3">Lehrer kontaktieren:</small>
                    <div class="flex flex-wrap gap-2">
                      <ButtonRegular
                        class="bg-mainOrange"
                        text="Nachricht"
                        @click="appStore.sendMessage(userId, true)"
                      />
                      <ButtonRegular
                        v-if="userStore.user.userType === 'STUDENT'"
                        class="bg-mainBlue"
                        text="Bewerten"
                        @click="
                          appStore.reviewModalActive =
                            !appStore.reviewModalActive
                        "
                      />
                      <ButtonRegular
                        v-else
                        class="bg-secondary"
                        text="Bewerten"
                        @click="noStudentAlert"
                      />

                      <ButtonRegular
                        text="Bezirke"
                        class="bg-secondary"
                        @click="openDistrictModal(profile.districts)"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!--Student Information-->
            <div
              v-else
              id="studentInformation"
              class="col-span-2 md:col-span-1"
            >
              <h4 class="text-mainOrange">Schüler</h4>
              <div>
                <h2>{{ profile.firstName }} {{ profile.lastName }}</h2>
                <p>{{ profile.description }}</p>
              </div>
              <ButtonRegular
                class="mx-0 my-2 bg-mainOrange"
                text="Nachricht"
                @click="appStore.sendMessage(userId, true)"
              />
            </div>
          </div>

          <!--Comments-->
          <div
            class="col-span-2 my-4"
            v-if="userType === 'TEACHER' && profile.feedbacks.length > 0"
          >
            <table class="text-p w-full text-left">
              <tr>
                <th>Bewertung</th>
                <th>Stern</th>
                <th>von</th>
              </tr>
              <tr v-for="feedback in profile.feedbacks">
                <td>
                  {{ feedback.content }}
                </td>
                <td>
                  {{ feedback.rating }}
                </td>
                <td>
                  {{ feedback.studentFirstName }}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";
import { computed, onBeforeMount, onMounted, ref } from "vue";
import axios from "axios";
import stockPhoto from "@/assets/images/teacherProfile/teacher-stockphoto.jpg";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import { useAppStore } from "@/stores/app";
import FormModal from "@/components/util/modals/FormModal.vue";
import CardLarge from "@/components/util/cards/CardLarge.vue";
import ReviewForm from "@/components/util/forms/ReviewForm.vue";
import AppointmentForm from "@/components/util/forms/AppointmentForm.vue";
import DistrictModalForm from "@/components/util/forms/DistrictModalForm.vue";
import { ChatBubbleLeftRightIcon } from "@heroicons/vue/24/outline";
import { AcademicCapIcon } from "@heroicons/vue/24/outline";
import { UserIcon } from "@heroicons/vue/24/solid";

const route = useRoute();
const userStore = useUserStore();
const appStore = useAppStore();
const loaded = ref(false);
const userId = route.params.userId;
const profile = ref(null);
const userType = ref("");
const reviewModalRef = ref();
const appointmentModalRef = ref();

function openAppointmentModal(coachingId) {
  if (userStore.user.userType !== "STUDENT") {
    console.log("Nur Schüler können Terminanfragen senden.");
    return;
  }
  appStore.selectCoaching(userId, coachingId);
  appStore.appointmentModalActive = !appStore.appointmentModalActive;
}

function openDistrictModal(districts) {
  appStore.selectedDistricts = districts;
  appStore.districtModalActive = !appStore.districtModalActive;
}

// Fetching data from api
async function getUserProfile(id) {
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "get",
      url: `${userStore.url}/user/${id}`,
    });
    profile.value = response.data;
    userType.value = response.data.userType;
    console.log(response.data);
  } catch (e) {
    console.log("Error fetching profile: " + e);
  }
}

function noStudentAlert() {
  alert("Nur Schüler können Bewertungen abgeben");
}

onBeforeMount(async () => {
  await getUserProfile(userId);
  loaded.value = true;
});
</script>

<style lang="scss" scoped>
#teacherPicture {
  border-radius: 0px 0px 0px 200px;

  @apply col-span-2 overflow-hidden bg-mainYellow shadow-xl md:col-span-1 md:mr-20;
}

li {
  @apply mb-12 grid grid-cols-6;

  > :first-child {
    @apply col-span-1;
  }

  > :nth-child(2) {
    @apply col-span-5;
  }
}
</style>
