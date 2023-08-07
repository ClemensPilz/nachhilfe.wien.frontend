<template>
  <form class="" @submit.prevent>
    <div class="text-center">
      <h3 class="text-mainOrange">Account löschen?</h3>
      <!--Buttons-->
      <div class="mt-5 flex justify-center gap-2">
        <ButtonRegular
          class="bg-secondary"
          text="Zurück"
          @click="appStore.resetModals()"
        />
        <ButtonRegular
          class="bg-mainOrange"
          text="Löschen"
          @click="deleteUser"
        />
      </div>
      <small class="text-mainOrange"
        >Wenn du deinen Account löschst, kann er nicht wieder aktiviert
        werden!</small
      >
    </div>
  </form>
</template>

<script setup>
import axios from "axios";
import { useAdminStore } from "@/stores/admin";
import { useUserStore } from "@/stores/user";
import router from "@/router";
import { useAppStore } from "@/stores/app";
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";

const adminStore = useAdminStore();
const userStore = useUserStore();
const appStore = useAppStore();

const deleteUser = async () => {
  try {
    const response = await axios({
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      url:
        userStore.user.userType === "ADMIN"
          ? `${userStore.url}/admin/delete-user/${adminStore.foundUser.userId}`
          : `${userStore.url}/user/delete/${userStore.userId}`,
    });
    if (response.status === 204 && userStore.user.userType === "ADMIN") {
      adminStore.foundUser = "";
    }
    if (
      response.status === 204 &&
      (userStore.user.userType === "TEACHER" ||
        userStore.user.userType === "STUDENT")
    ) {
      userStore.user = "";
      userStore.storeUserId = "";
      userStore.isAuthenticated = false;
      await router.push("/");
    }
  } catch (e) {
    console.log(e);
  } finally {
    appStore.resetModals();
  }
};
</script>
<style lang="scss" scoped></style>
