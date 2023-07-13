import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axios from "axios";
import {useAppStore} from "@/stores/app";

export const useUserStore = defineStore("user", () => {
  const url = "http://localhost:8080";
  const router = useRouter();
  const user = ref({});
  const storeUserId = ref();
  const userId = computed(() => storeUserId.value);
  const isAuthenticated = ref(false);
  const appointments = ref([]);

  const appStore = useAppStore();

  async function tokenAuth(token) {}

  //Saves userId to localStorage, userinfos to store and returns 1 if successful, -1 if not
  async function auth(credentials) {
    let axiosConfig;

    if (credentials.email) {
      axiosConfig = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        url: `${url}/auth`,
        data: {
          email: credentials.email,
          password: credentials.password,
        },
      };
    } else if (credentials.token) {
      axiosConfig = {
        headers: {
          Authorization: "Bearer " + credentials.token,
        },
        method: "post",
        url: `${url}/auth/info`,
      };
    } else {
      return { status: -1, error: "Insufficient credentials" };
    }

    try {
      const response = await axios(axiosConfig);
      if (response.status === 200) {
        console.log(response.data);
        user.value = response.data;
        storeUserId.value = response.data.userId;
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        appStore.subjects = response.data.availableSubjects;
        isAuthenticated.value = true;
        return { status: 1, data: response.data };
      } else {
        return { status: -1, error: "Unexpected response status" };
      }
    } catch (e) {
      console.error(e);
      return { status: -1, error: e };
    }
  }

  async function getAllAppointments() {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      method: "get",
      url: `${url}/appointment/get-appointments/${userId.value}`
    })
    console.log(response.data);
    appointments.value = response.data;
  }

  async function logout() {
    localStorage.removeItem('token');
    isAuthenticated.value = false;
    await router.push('/');
  }


  return { userId, user, url, auth, isAuthenticated, getAllAppointments, appointments, logout };
});
