<template>
  <div class="flex justify-between mt-4">
    <div class="w-1/6">
      <ButtonLarge :text="findBy" @click="open = !open" class="bg-mainOrange" />
      <div
        v-show="open"
        class="absolute px-2 py-1 rounded-3xl shadow-lg bg-white ring-1 ring-black ring-opacity-5"
      >
        <div class="">
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            @click="findBy = 'find by id'"
            >Find By Id</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            @click="findBy = 'find by email'"
            >Find By Email</a
          >
        </div>
      </div>
    </div>

    <input
      type="text"
      v-model="searchParameter"
      class="bg-secondary w-1/2 rounded-3xl p-2 mx-2"
    />

    <ButtonLarge @click="findUser" text="Find" class="bg-mainBlue" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useAdminStore } from "@/stores/admin";
import ButtonLarge from "@/components/util/buttons/ButtonLarge.vue";

const emit = defineEmits(["findUser"]);

const findBy = ref("find by id");
const searchParameter = ref();
const userStore = useUserStore();
const adminStore = useAdminStore();

const response = ref();

const findUser = async () => {
  //input validation
  const response = await adminStore.findUser(findBy.value, searchParameter.value);
};

let open = ref(false);
</script>

<style lang="scss" scoped></style>
