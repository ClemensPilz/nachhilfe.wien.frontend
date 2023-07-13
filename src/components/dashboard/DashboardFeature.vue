<template>
  <div class="w-full border-2 border-primary my-8 rounded-3xl text-center flex justify-between overflow-hidden shadow-xl"
       :class="left ? 'md:text-left' : 'md:text-right flex-row-reverse'">
    <div class="p-8">
      <h4>{{ title }}</h4>
      <p class="font-bold">{{ subtitle }}</p>
      <p>{{ text }}</p>
      <slot/>
    </div>

      <slot name="image" />

  </div>
</template>

<script setup>

const props = defineProps({
  title: String,
  subtitle: String,
  text: String,
  left: Boolean
})

</script>

<style lang="scss" scoped>

</style>