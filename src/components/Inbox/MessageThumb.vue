<template>
<div class="m-2">

  <div :class="props.senderId == storeId ? 'ownMessage' : 'foreignMessage'">
    <div class="headline">
      {{ props.title }}
    </div>
    <div class="paragraph">
      {{ props.content }}
    </div>
    <div class="paragraph font-bold">
      {{ props.date }}
    </div>
  </div>


</div>
</template>

<script setup>
import {useUserStore} from "@/stores/user";
import {computed} from "vue";

const userStore = useUserStore();
const storeId = computed(() => userStore.user.userId);
const props = defineProps(['content', 'title', 'senderId', 'date']);

</script>

<style lang="scss" scoped>

.ownMessage {
  @apply bg-gray-100 text-right ml-10
}

.foreignMessage {
  @apply bg-lightPrimary mr-10
}

.ownMessage, .foreignMessage {
  @apply p-2 rounded-lg
}


</style>