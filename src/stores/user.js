import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  const username = "Hansi";

  const user = computed(() => { return {
    "name": username
  } })

  return { user }
})
