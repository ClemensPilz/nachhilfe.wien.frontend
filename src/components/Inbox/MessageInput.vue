<template>
  <div
    class="block rounded-3xl border-2 border-secondary bg-white p-6 shadow-lg"
  >
    <h5 class="mb-2 text-xl font-medium leading-tight text-primary">
      {{ props.title }}
    </h5>
    <p class="mb-4 text-primary">
      {{ props.content }}
      <slot />
    </p>
    <ButtonRegular
      class="bg-mainBlue"
      text="Senden"
      @click="$emit('send')"
      @keydown.enter.stop=""
    />

    <ButtonRegular
      class="bg-mainOrange"
      text="Profil"
      @click="$emit('goToProfile')"
      @keydown.enter.stop=""
    />
  </div>
</template>

<script setup>
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";

const props = defineProps({
  title: String,
  content: String,
  buttonText: String,
});

const emits = defineEmits(["send", "goToProfile"]);
</script>

<style lang="scss" scoped></style>
