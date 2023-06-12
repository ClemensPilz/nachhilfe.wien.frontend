import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from "vue-router";
import axios from "axios";

export const useUserStore = defineStore('user', () => {

  const url = 'http://localhost:8080'
  const router = useRouter();
  const user = ref({});
  const userId = computed(() => {
    return user.value.id;
  })

//Saves userId to localStorage, userinfos to store and returns 1 if successful, -1 if not
  async function auth(email, password) {
    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json"
        },
        method: 'post',
        url: `${url}/auth`,
        data: {
          "email": email,
          "password": password
        }
      });
      if (response.status === 200)  {
      user.value = response.data;
      console.log('---userId---');
      console.log(response.data);
      localStorage.setItem("userId", response.data.id);
      return { status: 1, data: response.data};
      } else {
        return { status: -1, error: 'Unexpected response status'};
      }
    } catch (e) {
      console.error(e);
      return { status: -1, error: e };
    }
  }

  const test = 1;

  return { userId, user, url, test, auth}
})
