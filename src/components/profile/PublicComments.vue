<template>
    <div class="w-full md:w-1/3 bg-blue-950 p-4">
        <div class="bg-black text-white text-xl p-2 m-2" v-for="feedback in feedbacks">
            <div>{{feedback.comment}}</div>
            <div class="text-sm">{{feedback.user}}</div>

        </div>
    </div>
</template>

<script setup>

import {computed} from "vue";

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