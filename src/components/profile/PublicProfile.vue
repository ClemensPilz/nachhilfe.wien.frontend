<template>
    <div class="w-full bg-pink-600">
        Hello Profile {{props.userId}}
        <div class="p-4 bg-white border" @click="getUserProfile">Try get request</div>
    </div>
</template>

<script setup>

import axios from "axios";

const props = defineProps({
    userId: Number
})

async function getUserProfile(){
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:8080/teacher'
        });
        for (const teacher of response.data) {
            console.log(teacher);
        }
    } catch (e) {
        console.log(e);
    }
}

</script>

<style lang="scss" scoped>



</style>