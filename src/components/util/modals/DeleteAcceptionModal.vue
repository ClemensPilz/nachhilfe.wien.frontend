<template>
  <div
      v-if="openDelete"
      @click="closeModal"
      class="fixed inset-0 flex items-center justify-center z-[1001] bg-black bg-opacity-50"
  >
    <div
        @click.stop=""
        class="max-h-screen bg-white py-6 px-10 mx-2 mt-20 rounded-xl"
    >
      <h2 class="text-2xl mb-4">{{ title }}</h2>
      <div>
        <slot />



          <!--Buttons-->
          <div class="flex gap-2 justify-end">
            <button
                type="button"
                class="mt-4 w-fit py-2 px-4 bg-lightPrimary text-white rounded-xl"
                @click="closeModal"
            >
              Schließen
            </button>
            <button
                type="button"
                class="mt-4 w-fit py-2 px-4 bg-accent text-white rounded-xl"
                @click="deleteUser"
            >
              Absenden
            </button>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import axios from "axios";
import {useAdminStore} from "@/stores/admin";
import {useUserStore} from "@/stores/user";
import {ref} from "vue";

const adminStore = useAdminStore();
const userStore = useUserStore();


const props = defineProps(["openDelete", "title"])
const emit = defineEmits(["update:openDelete"]);

const isOpen = ref(props.openDelete);


const deleteUser = async () => {
  try {
    const response =   await axios({
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      url: adminStore.foundUser.userType === 'ADMIN' ?`${userStore.url}/admin/delete-user/${adminStore.foundUser.userId}` : `${userStore.url}/user/delete/${userStore.userId}`,
    })
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

const closeModal = () => {
  emit("update:openDelete", false)
}


</script>



<style scoped>

</style>
