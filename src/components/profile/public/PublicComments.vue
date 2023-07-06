<template>
    <div class="w-full md:w-1/3 p-4 space-y-4 border-t-2 md:border-t-0 md:bg-divider">

      <CardNormal v-for="feedback in feedbacks" :title="feedback.user" :content="feedback.comment"
                  button-bg="bg-primary" button-text="* * * *"/>

    </div>
</template>

<script setup>

import {computed} from "vue";
import CardNormal from "@/components/util/elements/CardNormal.vue";
import {StarIcon} from "@heroicons/vue/24/solid";

const props = defineProps({
    profile: Object
})

const feedbacks = computed(() => {
   const arr = [];
   if (props.profile) {
       for (const feedback of props.profile.feedback) {
           arr.push(feedback);
       }
   }
   return arr;
});

</script>

<style lang="scss" scoped>

</style>