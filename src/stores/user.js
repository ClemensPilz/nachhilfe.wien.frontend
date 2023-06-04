import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  const user = ref({});

  function updateUser(userData) {
    user.value = userData;
    console.log(user.value);
  }

  return { user, updateUser }
})
