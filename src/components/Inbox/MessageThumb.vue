<template>
  <div class="m-2 w-full">


    <div :class="{
        'ownMessage': props.senderId === storeId,
        'foreignMessage': props.senderId !== storeId,
        'appointment': props.type === 'APPOINTMENT'
      }">

      <div v-if="props.type === 'APPOINTMENT'" class="text-sm text-primary italic font-bold uppercase">
        Neuer Terminvorschlag
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
import {computed, onMounted, ref} from "vue";

const userStore = useUserStore();
const storeId = computed(() => userStore.user.userId);
const props = defineProps(['content', 'type', 'senderId', 'date']);

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

.appointment {
  @apply border-b-4 border-accent
}


</style>