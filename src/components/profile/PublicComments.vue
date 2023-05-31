<template>
    <div class="w-full md:w-1/3 bg-lightPrimary p-4 space-y-4">

        <the-card v-for="feedback in feedbacks" class="bg-white hover:bg-white">
            <h5 class="mb-2 font-bold tracking-tight text-primary">{{feedback.user}}</h5>
            <p class="font-normal text-sm text-primaryText">
                {{feedback.comment}}
            </p>
        </the-card>

    </div>
</template>

<script setup>

import {computed} from "vue";
import {TheCard} from "flowbite-vue";

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