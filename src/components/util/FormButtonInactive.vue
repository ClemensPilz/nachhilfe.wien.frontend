<template>
    <div class="formButton">
        {{props.text}}
    </div>
</template>

<script setup>

const props = defineProps(['text']);

</script>

<style lang="scss" scoped>

.formButton {
    @apply bg-gray-200 text-white py-1 px-2 rounded-lg select-none uppercase
}

</style>