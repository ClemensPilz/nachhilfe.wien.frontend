import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
const url = "http://localhost:8080";

export const useConversationStore = defineStore("conversation", () => {
  const activeConversationInInbox = ref();

  function setActiveConversationInInbox(id) {
    activeConversationInInbox.value = id;
  }

  function getActiveConversationInInbox() {
    if (activeConversationInInbox.value) {
      return activeConversationInInbox.value;
    } else {
      return -1;
    }
  }

  async function updateAppointment(appointmentId, status) {
    try {
      return await axios({
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        url: `${url}/appointment/update-status/${appointmentId}?action=${status}`,
        method: "PUT",
      });
    } catch (e) {
      throw e;
    }
  }

  return {
    setActiveConversationInInbox,
    getActiveConversationInInbox,
    activeConversationInInbox,
    updateAppointment,
  };
});
