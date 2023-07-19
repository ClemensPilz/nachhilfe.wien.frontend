<template>
  <!--@todo:refactor using :class property to programmatically add hidden class if id = storeId-->

  <div>
    <div class="p-4 bg-lightPrimary rounded-lg shadow">
      <p v-for="partner in partners">
        {{ partner.firstName }} {{ partner.lastName }}
        <span
          @click="
            () => {
              openProfile(partner.id);
            }
          "
          >...Profil</span
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { computed } from "vue";
import router from "@/router";

const props = defineProps(["users"]);

const userStore = useUserStore();
const storeId = computed(() => userStore.user.userId);
const partners = computed(() => {
  const partnerArr = [];
  for (const user of props.users) {
    if (user.id != storeId.value) {
      partnerArr.push(user);
    }
  }
  return partnerArr;
});

async function openProfile(id) {
  console.log(id);
  await router.push(`/profile/${id}`);
}
</script>

<style lang="scss" scoped></style>
