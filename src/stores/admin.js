import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/user";

export const useAdminStore = defineStore("admin", () => {
  const userStore = useUserStore();
  const foundUser = ref();

  async function findUser(findBy, searchValue) {
    //input validation
    const response = ref();

    let key;
    if (findBy === "find by id") {
      key = "id";
      if (isNaN(parseInt(searchValue))) {
        return;
      }
    }

    if (findBy === "find by email") {
      key = "email";
      if (searchValue === "") {
        return;
      }
    }

    try {
      response.value = await axios({
        method: "post",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          [key]: searchValue,
        },
        url: `${userStore.url}/admin/find-user`,
      });
    } catch (e) {
      foundUser.value = null;
    }
    foundUser.value = response.value.data;
    console.log()
    return foundUser.value;
  }

  async function findById(userId) {
    const response = ref();
    try {
      response.value = await axios({
        method: "post",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          id: foundUser.value.userId,
        },
        url: `${userStore.url}/admin/find-user`,
      });
      foundUser.value = response.value.data;
    } catch (e) {
      throw e;
    }
  }

  return { findUser, foundUser, findById };
});
