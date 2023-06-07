<template>
  <!--@todo:refactor using :class property to programmatically add hidden class if id = storeId-->

  <div>
    <div class="p-4 bg-lightPrimary rounded-lg shadow">
      <div class="paragraph">Convo mit:</div>
      <div class="headline"
           v-for="partner in partners">{{ partner.firstName }} {{ partner.lastName }}
      </div>
    </div>
  </div>
</template>

<script setup>

import {useUserStore} from "@/stores/user";
import {computed} from "vue";

const props = defineProps(['users']);

const userStore = useUserStore();
const storeId = computed(() => userStore.user.id);
const partners = computed(() => {
  const partnerArr = [];
  for (const user of props.users) {
    if (user.id != storeId.value) {
      partnerArr.push(user);
    }
  }
  return partnerArr;
})
</script>

<style lang="scss" scoped>

</style>