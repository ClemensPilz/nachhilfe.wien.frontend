<template>
<div class="p-4">

  <div :class="props.senderId == storeId ? 'bg-lightPrimary' : 'bg-accent'">
    <div class="headline">
      {{ props.title }}
    </div>
    <div class="paragraph">
      {{ props.content }}
    </div>
  </div>


</div>
</template>

<script setup>
import {useUserStore} from "@/stores/user";
import {computed} from "vue";

const userStore = useUserStore();
const storeId = computed(() => userStore.user.id);
const props = defineProps(['content', 'title', 'senderId']);

</script>

<style lang="scss" scoped>



</style>