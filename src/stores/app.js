import { ref } from "vue";
import { defineStore } from "pinia";
import { useConversationStore } from "@/stores/conversation";
import { useUserStore } from "@/stores/user";
import axios from "axios";
import router from "@/router";

export const useAppStore = defineStore("app", () => {
  const userStore = useUserStore();
  const subjects = ref({});
  const levels = ["VOLKSSCHULE", "MITTELSCHULE"];
  const selectedCoaching = ref({});
  const selectedDistricts = ref([]);
  const modalStack = ref([]);
  const registrationModalActive = ref(false);
  const loginModalActive = ref(false);
  const reviewModalActive = ref(false);
  const appointmentModalActive = ref(false);
  const districtModalActive = ref(false);
  const conversationStore = useConversationStore();

  function resetModals() {
    registrationModalActive.value = false;
    loginModalActive.value = false;
    reviewModalActive.value = false;
    appointmentModalActive.value = false;
    districtModalActive.value = false;
  }

  //Used to pass information of a selected coaching through multiple layers of components
  function selectCoaching(teacherId, coachingId) {
    selectedCoaching.value = { teacherId, coachingId };
  }

  //Gets conversation from API. If isPushing is true, will push router to InboxView.vue
  async function sendMessage(recipientId, isPushing) {
    try {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "post",
        url: `${userStore.url}/conversation/create-conversation/${userStore.userId}/${recipientId}`,
      });
      const conversationStore = useConversationStore();
      conversationStore.activeConversationInInbox =
        response.data.conversationId;
      if (isPushing) {
        await router.push("/inbox");
      } else {
        return response.data.conversationId;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function postAppointment(
    teacherId,
    coachingId,
    dateTime,
    duration,
    content,
  ) {
    const conversationId = await sendMessage(teacherId, false);
    let startTime = new Date(dateTime);
    let endTime = new Date(dateTime);
    endTime.setHours(startTime.getHours() + duration);
    console.log(endTime);

    try {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "post",
        url: `${userStore.url}/appointment/send-appointment/${conversationId}/${coachingId}`,
        data: {
          title: "neuer Terminvorschlag",
          content: content,
          start: startTime.toISOString(),
          end: endTime.toISOString(),
        },
      });
      console.log(response.data);
      conversationStore.setActiveConversationInInbox(conversationId);
      await router.push("/inbox");
    } catch (e) {
      throw e;
    }
  }

  function encodeImage(file) {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onloadend = () => res(reader.result);
      reader.onerror = rej;
      reader.readAsDataURL(file);
    });
  }

  async function filterTeachers(districts, subject, minRate, maxRate) {
    console.log(districts);
    try {
      const response = axios({
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "POST",
        url: `${userStore.url}/teacher/filter-teachers`,
        data: {
          districts,
          subject,
          minRate,
          maxRate,
        },
      });
      return response;
    } catch (e) {
      throw e;
    }
  }

  return {
    sendMessage,
    encodeImage,
    postAppointment,
    subjects,
    levels,
    selectedCoaching,
    selectedDistricts,
    modalStack,
    selectCoaching,
    filterTeachers,
    registrationModalActive,
    loginModalActive,
    resetModals,
    reviewModalActive,
    appointmentModalActive,
    districtModalActive,
  };
});
