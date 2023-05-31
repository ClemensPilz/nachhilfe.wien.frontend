<template>
    <div class="w-full min-h-screen p-4 md:w-2/3">
        <div class="flex w-fit space-x-4 items-center">
            <div class="text-4xl text-accent font-bold tracking-tight" v-if="props.profile">{{ props.profile.username }}</div>
            <div class="p-4 bg-secondary text-primary rounded-xl flex items-center" v-if="props.profile">
                {{ props.profile.avgRating }} <StarIcon class="text-accent w-6 h-6" />
            </div>
        </div>
        <div class="text-2xl text-primaryText" v-if="props.profile">{{ props.profile.firstname }} {{
            props.profile.lastname
            }}
        </div>

        <div class="m-4 p-4 bg-gray-700 text-white" v-if="props.profile">{{ props.profile.description }}</div>


    </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    profile: Object
})

</script>

<style lang="scss" scoped>


</style>