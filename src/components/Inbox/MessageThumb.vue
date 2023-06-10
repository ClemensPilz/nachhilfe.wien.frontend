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
const storeId = computed(() => userStore.user.id);
const props = defineProps(['content', 'title', 'senderId', 'date']);

</script>

<style lang="scss" scoped>

.ownMessage {
  @apply bg-lightPrimary text-right ml-10
}

.foreignMessage {
  @apply bg-accent mr-10
}

.ownMessage, .foreignMessage {
  @apply p-2 rounded-lg
}


</style>