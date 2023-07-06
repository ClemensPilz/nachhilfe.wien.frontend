<template>
  <div class="m-2 w-full">


      <div :class="props.senderId == storeId ? 'ownMessage' : 'foreignMessage'">
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
  @apply bg-gray-100 text-right p-2 pr-4 ml-auto
}

.foreignMessage {
  @apply bg-lightPrimary text-left p-2
}

.ownMessage, .foreignMessage {
  @apply rounded-lg w-fit
}


</style>