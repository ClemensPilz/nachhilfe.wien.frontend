<template>

  <!--Container-->
  <div class="mt-10">
    <!--Programmatic-->
    <div v-if="adminStore.foundUser">
      <!--TopSection-Container-->
      <div class="md:grid md:grid-cols-3 grid-cols-1 gap-4 items-center ">
        <!--Image-->
        <div class="order-1 md:order-1 flex mx-auto flex-wrap flex-col">
          <img
              class="w-full md:w-56 md:rounded-full shadow-xl"
              :src="adminStore.foundUser.profile.imageBase64 ? adminStore.foundUser.profile.imageBase64 : 'https://placehold.co/600x400'"
              alt="profile picture of a user"
          />
          <ButtonRegular text="Bild löschen" class="md:mt-5 mx-auto bg-primary" @click="deleteImage"/>
        </div>
        <!--User Information-->
        <div class="order-2 md:order2 flex gap-3 align-center ">
          <div class="text-primary font-bold">
            <p>UserId:</p>
            <p>E-Mail:</p>
            <p>First name:</p>
            <p>Last name:</p>
            <p>Birthdate:</p>
            <p>UserType:</p>
            <p>Active:</p>
            <p v-if="adminStore.foundUser.userType === 'TEACHER'">Beschreibung:</p>

          </div>
          <div class="text-secondary italic">
            <p>{{ adminStore.foundUser.userId }}</p>
            <p>{{ adminStore.foundUser.profile.email }}</p>
            <p>{{ adminStore.foundUser.firstName }}</p>
            <p>{{ adminStore.foundUser.lastName }}</p>
            <p>{{ adminStore.foundUser.birthdate }}</p>
            <p>{{ adminStore.foundUser.userType }}</p>
            <p> {{ adminStore.foundUser.profile.active }}</p>
            <p v-if="adminStore.foundUser.userType === 'TEACHER'">
              {{ adminStore.foundUser.profile.description }}
            </p>
          </div>
        </div>

        <!--Stats-->
        <div
            class="order-3 md:order-3 flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <div class="flex gap-3 items-center">
            <ButtonRegular text="Nachricht senden" class="bg-mainOrange"
                           @click="appStore.sendMessage(adminStore.foundUser.userId, true)"/>
            <ButtonRegular class="bg-primary" text="User aktiv/inaktiv" @click="changeActiveStatus"/>
            <ButtonRegular class="bg-primary" text="Userinformation ändern" @click="openEdit=true"/>
            <UserEditModal title="Informationen verändern" :isOpen="openEdit" @update:openEdit="v => openEdit=v"/>
          </div>
        </div>
      </div>

      <!--BodySection-Container-->
      <div
          class="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mt-5"
      >
        <div class="flex justify-center gap-56">
          <div class="p-6">
            <div v-if="adminStore.foundUser.userType === 'TEACHER'">
              <h2 class="text-primary font-bold">Bezirke:</h2>
              <div v-for="district in adminStore.foundUser.districts" :key="`district${district}`"
                   class="text-left p-0.5">
                <div>{{ district }}</div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div v-if="adminStore.foundUser.userType === 'TEACHER'">
              <h2 class="text-primary font-bold">Nachhilfe:</h2>
              <div class=" flex flex-wrap justify-center gap-2">
                <div v-for="coaching in adminStore.foundUser.coachings" :key="`coaching${coaching.coachingId}`"
                     class="flex flex-col  p-2  text-left mr-3">
                  <div>{{ coaching.subject }}</div>
                  <div>{{ coaching.level }}</div>
                  <div>{{ coaching.rate }}€ / Stunde</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-5">
          <div class="mx-auto">

            <!--If user is Teacher -->
            <h2 v-if="adminStore.foundUser.userType === 'TEACHER'" class="text-primary font-bold mb-3">Bewertungen /
              Durchschnittliche Bewertung: {{ adminStore.foundUser.profile.averageRatingScore }}:</h2>

            <!--If user is Student-->
            <h2 v-else class="text-primary font-bold mb-3">Bewertungen:</h2>

            <!--Feedbacks-->
            <div v-for="feedback in adminStore.foundUser.feedbacks" :key="`feedback${feedback.feedbackId}`"
                 class="flex text-left">

              <!--A teacher's received feedbacks-->
              <div v-if="adminStore.foundUser.userType === 'TEACHER'" class=" mx-auto mb-12 text-primary">
                <h4>Titel: <span class="text-secondary italic">{{ feedback.title }}</span></h4>
                <p>Von: <span
                    class="text-secondary italic">{{ feedback.studentFirstName }} {{ feedback.studentLastName }}</span>
                </p>
                <p>Schüler ID: <span class="text-secondary italic">{{ feedback.studentId }}</span></p>
                <p>Bewertung: <span class="text-secondary italic">{{ feedback.rating }}</span></p>
                <p>Inhalt:</p>
                <p class="text-secondary italic">{{ feedback.content }}</p>
                <ButtonRegular text="Delete Feedback" class="bg-mainOrange" @click="deleteFeedback(feedback.feedbackId)"/>
              </div>

              <!--A student's written feedbacks-->
              <div v-if="adminStore.foundUser.userType === 'STUDENT'" class="mx-auto mb-12 text-primary ">
                <h4>Title: <span class="text-secondary italic">{{ feedback.title }}</span></h4>
                <p>An: <span
                    class="text-secondary italic">{{ feedback.teacherFirstName }} {{ feedback.teacherLastName }}</span>
                </p>
                <p>Lehrer ID: <span class="text-secondary italic">{{ feedback.teacherId }}</span></p>
                <p>Bewertung: <span class="text-secondary italic">{{ feedback.rating }}</span></p>
                <p>Inhalt:</p>
                <p class="text-secondary italic">{{ feedback.content }}</p>
                <ButtonRegular text="Delete Feedback" class="bg-mainOrange" @click="deleteFeedback(feedback.feedbackId)"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useAppStore} from "@/stores/app";
import axios from "axios";
import {useUserStore} from "@/stores/user";
import {useAdminStore} from "@/stores/admin";
import UserEditModal from "@/components/administrator/UserEditModal.vue";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";


const reviewModalOpen = ref(false);
const showModal = ref(false);

const appStore = useAppStore();
const userStore = useUserStore();
const adminStore = useAdminStore();

const openEdit = ref(false);


const deleteFeedback = async (feedbackId) => {
  await axios({
    method: "delete",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    url: `${userStore.url}/admin/delete-feedback/${feedbackId}`
  });
  await adminStore.findById(adminStore.foundUser.userId);
}

const changeActiveStatus = async () => {
  const changeStatus = !adminStore.foundUser.profile.active;
  await axios({
    method: "put",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    url: `${userStore.url}/admin/active-inactive/${adminStore.foundUser.userId}?activeStatus=${changeStatus}`
  })
  await adminStore.findById(adminStore.foundUser.userId);
}

const deleteImage = async () => {
  await axios({
    method: "put",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    url: `${userStore.url}/admin/delete-image/${adminStore.foundUser.userId}`
  })
  await adminStore.findById(adminStore.foundUser.userId);
  console.log(adminStore.foundUser.profile.imageBase64);
}

const changeFields = async () => {

}


</script>


<style lang="scss" scoped>


</style>