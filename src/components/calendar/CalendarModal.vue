<template>
  <div>
    <button-primary @click="openModal" text="ADD" />
    <div
      v-if="showModal"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Add Appointment
                </h3>
                <div class="mt-2">
                  <input
                    v-model="newAppointmentData.name"
                    type="text"
                    placeholder="Name"
                    class="rounded-lg border-gray-300"
                  />
                  <input
                    v-model="newAppointmentData.time"
                    type="time"
                    placeholder="Time"
                    class="rounded-lg border-gray-300"
                  />
                  <input
                    v-model="newAppointmentData.details"
                    type="text"
                    placeholder="Details"
                    class="rounded-lg border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              @click="addAppointment"
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Add
            </button>
            <button
              @click="closeModal"
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonPrimary from "@/components/util/elements/ButtonPrimary.vue";
import axios from "axios";
import { ref } from "vue";

const showModal = ref(false);

async function addAppointment() {
  if (
    newAppointmentData &&
    newAppointmentData.value &&
    newAppointmentData.value.name &&
    newAppointmentData.value.time &&
    newAppointmentData.value.details
  ) {
    try {
      const response = await axios.post(
        `${userStore.url}/add-appointment/${userId}`,
        {
          userId: userId,
          appointment: newAppointmentData.value,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        getAppointments();
        closeModal();
        newAppointmentData.name = "";
        newAppointmentData.time = "";
        newAppointmentData.details = "";
      } else {
        console.log("Error adding appointment");
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log("All fields are required");
  }
}

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>
