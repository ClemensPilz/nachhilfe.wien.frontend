<template>
  <!--Container-->
  <div class="mt-10">
    <!--Programmatic-->
    <div v-if="adminStore.foundUser">
      <!--TopSection-Container-->
      <div class="grid-cols-1 items-center gap-4 md:grid md:grid-cols-3">
        <!--Image-->
        <div class="order-1 mx-auto flex flex-col flex-wrap md:order-1">
          <img
            class="w-full shadow-xl md:w-56 md:rounded-full"
            :src="
              adminStore.foundUser.profile.imageBase64
                ? adminStore.foundUser.profile.imageBase64
                : 'https://placehold.co/600x400'
            "
            alt="profile picture of a user"
          />
          <ButtonRegular
            text="Bild löschen"
            class="mx-auto bg-primary md:mt-5"
            @click="deleteImage"
          />
        </div>
        <!--User Information-->
        <div class="md:order2 align-center order-2 flex gap-3">
          <div class="font-bold text-primary">
            <p>UserId:</p>
            <p>E-Mail:</p>
            <p>First name:</p>
            <p>Last name:</p>
            <p>Birthdate:</p>
            <p>UserType:</p>
            <p>Active:</p>
            <p v-if="adminStore.foundUser.userType === 'TEACHER'">
              Beschreibung:
            </p>
          </div>
          <div class="italic text-secondary">
            <p>{{ adminStore.foundUser.userId }}</p>
            <p>{{ adminStore.foundUser.profile.email }}</p>
            <p>{{ adminStore.foundUser.firstName }}</p>
            <p>{{ adminStore.foundUser.lastName }}</p>
            <p>{{ adminStore.foundUser.birthdate }}</p>
            <p>{{ adminStore.foundUser.userType }}</p>
            <p>{{ adminStore.foundUser.profile.active }}</p>
            <p v-if="adminStore.foundUser.userType === 'TEACHER'">
              {{ adminStore.foundUser.profile.description }}
            </p>
          </div>
        </div>

        <!--Stats-->
        <div
          class="order-3 flex flex-col space-y-4 md:order-3 md:flex-row md:justify-center md:space-x-6 md:space-y-0"
        >
          <div class="grid grid-cols-2 items-center gap-3">
            <ButtonRegular
              text="Nachricht senden"
              class="col-span-1 w-full bg-mainOrange"
              @click="appStore.sendMessage(adminStore.foundUser.userId, true)"
            />
            <ButtonRegular
              class="col-span-1 w-full bg-primary"
              text="User aktiv/inaktiv"
              @click="changeActiveStatus"
            />
            <ButtonRegular
              class="w-full bg-primary"
              text="Userinformation ändern"
              @click="openEdit = true"
            />
            <UserEditModal
              title="Informationen verändern"
              :isOpen="openEdit"
              @update:openEdit="(v) => (openEdit = v)"
            />

            <ButtonRegular
              class="w-full bg-primary"
              text="User löschen"
              @click="openDelete = true"
            />
            <DeleteAcceptionModal
              title="User löschen"
              :openDelete="openDelete"
              @update:openDelete="(v) => (openDelete = v)"
            >
              <p class="text-center">User wirklich löschen?</p>
            </DeleteAcceptionModal>
          </div>
        </div>
      </div>

      <!--BodySection-Container-->
      <div
        class="mt-5 block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
      >
        <div class="flex justify-center gap-56">
          <div class="p-6">
            <div v-if="adminStore.foundUser.userType === 'TEACHER'">
              <h2 class="font-bold text-primary">Bezirke:</h2>
              <div
                v-for="district in adminStore.foundUser.districts"
                :key="`district${district}`"
                class="p-0.5 text-left"
              >
                <div>{{ district }}</div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div v-if="adminStore.foundUser.userType === 'TEACHER'">
              <h2 class="font-bold text-primary">Nachhilfe:</h2>
              <div class="flex flex-wrap justify-center gap-2">
                <div
                  v-for="coaching in adminStore.foundUser.coachings"
                  :key="`coaching${coaching.coachingId}`"
                  class="mr-3 flex flex-col p-2 text-left"
                >
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
            <h2
              v-if="adminStore.foundUser.userType === 'TEACHER'"
              class="mb-3 font-bold text-primary"
            >
              Bewertungen / Durchschnittliche Bewertung:
              {{ adminStore.foundUser.profile.averageRatingScore }}:
            </h2>

            <!--If user is Student-->
            <h2 v-else class="mb-3 font-bold text-primary">Bewertungen:</h2>

            <!--Feedbacks-->
            <div
              v-for="feedback in adminStore.foundUser.feedbacks"
              :key="`feedback${feedback.feedbackId}`"
              class="flex text-left"
            >
              <!--A teacher's received feedbacks-->
              <div
                v-if="adminStore.foundUser.userType === 'TEACHER'"
                class="mx-auto mb-12 text-primary"
              >
                <h4>
                  Titel:
                  <span class="italic text-secondary">{{
                    feedback.title
                  }}</span>
                </h4>
                <p>
                  Von:
                  <span class="italic text-secondary"
                    >{{ feedback.studentFirstName }}
                    {{ feedback.studentLastName }}</span
                  >
                </p>
                <p>
                  Schüler ID:
                  <span class="italic text-secondary">{{
                    feedback.studentId
                  }}</span>
                </p>
                <p>
                  Bewertung:
                  <span class="italic text-secondary">{{
                    feedback.rating
                  }}</span>
                </p>
                <p>Inhalt:</p>
                <p class="italic text-secondary">{{ feedback.content }}</p>
                <ButtonRegular
                  text="Delete Feedback"
                  class="bg-mainOrange"
                  @click="deleteFeedback(feedback.feedbackId)"
                />
              </div>

              <!--A student's written feedbacks-->
              <div
                v-if="adminStore.foundUser.userType === 'STUDENT'"
                class="mx-auto mb-12 text-primary"
              >
                <h4>
                  Title:
                  <span class="italic text-secondary">{{
                    feedback.title
                  }}</span>
                </h4>
                <p>
                  An:
                  <span class="italic text-secondary"
                    >{{ feedback.teacherFirstName }}
                    {{ feedback.teacherLastName }}</span
                  >
                </p>
                <p>
                  Lehrer ID:
                  <span class="italic text-secondary">{{
                    feedback.teacherId
                  }}</span>
                </p>
                <p>
                  Bewertung:
                  <span class="italic text-secondary">{{
                    feedback.rating
                  }}</span>
                </p>
                <p>Inhalt:</p>
                <p class="italic text-secondary">{{ feedback.content }}</p>
                <ButtonRegular
                  text="Delete Feedback"
                  class="bg-mainOrange"
                  @click="deleteFeedback(feedback.feedbackId)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>User not found!</h2>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAppStore } from "@/stores/app";
import axios from "axios";
import { useUserStore } from "@/stores/user";
import { useAdminStore } from "@/stores/admin";
import UserEditModal from "@/components/administrator/UserEditModal.vue";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";

const reviewModalOpen = ref(false);
const showModal = ref(false);

const appStore = useAppStore();
const userStore = useUserStore();
const adminStore = useAdminStore();

const openEdit = ref(false);
const openDelete = ref();

const deleteFeedback = async (feedbackId) => {
  await axios({
    method: "delete",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    url: `${userStore.url}/admin/delete-feedback/${feedbackId}`,
  });
  await adminStore.findById(adminStore.foundUser.userId);
};

const changeActiveStatus = async () => {
  const changeStatus = !adminStore.foundUser.profile.active;
  await axios({
    method: "put",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    url: `${userStore.url}/admin/active-inactive/${adminStore.foundUser.userId}?activeStatus=${changeStatus}`,
  });
  await adminStore.findById(adminStore.foundUser.userId);
};

const deleteImage = async () => {
  await axios({
    method: "put",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    url: `${userStore.url}/admin/delete-image/${adminStore.foundUser.userId}`,
  });
  await adminStore.findById(adminStore.foundUser.userId);
  console.log(adminStore.foundUser.profile.imageBase64);
};

const changeFields = async () => {};
</script>

<style lang="scss" scoped></style>
