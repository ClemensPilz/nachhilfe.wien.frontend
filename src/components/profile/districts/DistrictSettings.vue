<template>
  <div class="w-full">

    <form id="districtForm">
      <div class="flex flex-col flex-wrap max-w-md mx-auto max-h-24 gap-x-4">
        <div v-for="n in 23">
          <input type="checkbox" :id="`district_${n}`" :name="`district_${n}`"
                 :value="n < 10 ? `DISTRICT_10${n}0` : `DISTRICT_1${n}0`" v-model="districtValue">
          <label>Bezirk {{ n }}</label>
        </div>
      </div>
      <ButtonPrimary text="OK" @click.prevent="postDistricts" />
    </form>

  </div>
</template>

<script setup>

import ButtonPrimary from "@/components/util/elements/ButtonPrimary.vue";
import {nextTick, onMounted, ref, watch} from "vue";
import {useUserStore} from "@/stores/user";
import axios from "axios";

const districtValue = ref();
const userStore = useUserStore();

async function postDistricts() {
  console.log(districtValue.value)
  try {
  const response = await axios({
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    method: 'put',
    url: `${userStore.url}/teacher/update-districts/${userStore.userId}`,
    data: {
      "teacherId": userStore.userId,
      "districts": districtValue.value
    }
  })
  console.log(response.data);
  userStore.user.districts = response.data.districts;
  } catch (e) {
    console.log(e);
  }
}


onMounted( async() => {
      const unwatch = watch(() => userStore.isAuthenticated, async (newVal) => {
        if (newVal) {
          districtValue.value = userStore.user.districts;
          await nextTick();
          console.log(districtValue.value)
          console.log(userStore.user)
          unwatch();
        }
      }, {immediate: true});
    }
);

</script>

<style lang="scss" scoped>


</style>
