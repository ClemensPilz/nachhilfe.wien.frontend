<template>

  <div class="min-h-screen">
    <FormModal ref="reviewModalRef">
      <CardLarge class="m-0">
        <template v-slot:content>
          <ReviewForm @close="closeReviewModal" :teacherId="userId" :studentId="userStore.user.userId"/>
        </template>
      </CardLarge>
    </FormModal>


    <FormModal ref="appointmentModalRef">
      <CardLarge class="m-0">
        <template v-slot:content>
          <AppointmentForm @close="closeAppointmentModal"/>
        </template>
      </CardLarge>
    </FormModal>

    <div v-if="loaded">
      <h3 v-if="!profile" class="text-center">
        User nicht gefunden!
      </h3>

        <section v-else id="userProfile">
      <div v-if="userType === 'STUDENT'">
        Hello Student
      </div>

      <div v-else>

          <!--Container for content-->
          <div class="container min-h-screen max-w-7xl mx-auto px-2 mt-8">

            <!--Grid-Layout-->
            <div class="w-full grid grid-cols-2 gap-4 items-center">

              <!--Picture-->
              <div id="teacherPicture" class="group">

                <div class="w-full h-[500px] pl-16">
                  <img :src="profile.image ? profile.image : stockPhoto" alt="picture of a teacher"
                       class="h-full object-cover object-center group-hover:scale-105 transition-all duration-300">
                </div>

              </div>

              <!--Information-->
              <div id="teacherInformation" class="col-span-2 md:col-span-1">
                <ul>
                  <li>
                    <h1 class="text-mainOrange">?</h1>
                    <div>
                      <h3>{{ profile.firstName }} {{ profile.lastName }}</h3>
                      <p>{{ profile.description }}</p>
                      <small>Durchschnittl. Wertung: {{ profile.averageRatingScore }}</small>

                    </div>
                  </li>
                  <li>
                    <h1> > </h1>
                    <div>
                      <div v-for="coaching in profile.coachings"
                           v-show="coaching.active">
                        <p class="underline underline-offset-4 decoration-secondary"
                           @click="openAppointmentModal(coaching.coachingId)">{{ coaching.subject }}</p>
                      </div>
                      <div v-if="profile.coachings.length < 0">Dieser Lehrer bietet aktuell keine Nachhilfe an</div>
                    </div>
                  </li>
                  <li>
                    <h1>:</h1>
                    <div>
                      <small class="block pb-3">Lehrer kontaktieren:</small>
                      <div class="flex gap-2 flex-wrap">
                        <ButtonRegular class="bg-mainOrange" text="Nachricht"
                                       @click="appStore.sendMessage(userId, true)"/>
                        <ButtonRegular v-if="userStore.user.userType === 'STUDENT'" class="bg-mainBlue" text="Bewerten"
                                       @click="openReviewModal"/>
                        <ButtonRegular v-else class="bg-secondary" text="Bewerten" @click="noStudentAlert"/>
                      </div>
                    </div>

                  </li>
                </ul>

              </div>

            </div>

            <!--Comments-->
            <div class="col-span-2 my-4" v-if="profile.feedbacks.length > 0"> <!--@todo: check if user is teacher-->
              <table class="w-full text-left text-p">
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
      </div>
        </section>
    </div>

  </div>
</template>

<script setup>

import {useRoute} from "vue-router";
import {useUserStore} from "@/stores/user";
import {computed, onBeforeMount, onMounted, ref} from "vue";
import axios from "axios";
import stockPhoto from "@/assets/images/teacherProfile/teacher-stockphoto.jpg"
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import {useAppStore} from "@/stores/app";
import FormModal from "@/components/util/modals/FormModal.vue";
import CardLarge from "@/components/util/cards/CardLarge.vue";
import ReviewForm from "@/components/util/forms/ReviewForm.vue";
import AppointmentForm from "@/components/util/forms/AppointmentForm.vue";

const route = useRoute();
const userStore = useUserStore();
const appStore = useAppStore();
const loaded = ref(false);
const userId = route.params.userId;
const profile = ref(null);
const userType = ref('');

const reviewModalRef = ref();
const appointmentModalRef = ref();


function openReviewModal() {
  reviewModalRef.value.openModal();
}

function closeReviewModal() {
  reviewModalRef.value.closeModal();
}

function openAppointmentModal(coachingId) {
  appointmentModalRef.value.openModal();
  appStore.selectCoaching(userId, coachingId);
}

function closeAppointmentModal() {
  appointmentModalRef.value.closeModal();
}

function noStudentAlert() {
  alert('Nur Schüler können Bewertungen abgeben');
}

async function getUserProfile(id) {
  try {
    const response = await axios({
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      method: 'get',
      url: `${userStore.url}/user/${id}`
    });
    profile.value = response.data;
    userType.value = response.data.userType
    console.log(response.data)
  } catch (e) {
    console.log('Error fetching profile: ' + e);
  }
}

onBeforeMount(async () => {
  await getUserProfile(userId);
  loaded.value = true;
});

</script>


<style lang="scss" scoped>

#teacherPicture {
  border-radius: 0px 0px 0px 200px;

  @apply col-span-2 md:col-span-1 md:mr-20 bg-mainYellow overflow-hidden shadow-xl;
}

li {
  @apply grid grid-cols-6 mb-12;

  > :first-child {
    @apply col-span-1;
  }

  > :nth-child(2) {
    @apply col-span-5
  }
}


</style>