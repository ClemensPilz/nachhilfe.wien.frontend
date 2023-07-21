<template>
  <a
    @click="
      () => {
        router.push('/settings');
      }
    "
    class="relative h-[200px] w-[200px]"
  >
    <img
      :src="topPictureSource"
      alt="a users profile picture"
      class="h-full rounded-full object-cover"
      :class="{ 'opacity-50': userImage === 'notSet' }"
      @click="
        () => {
          router.push('/settings');
        }
      "
    />
    <div
      v-if="userImage === 'notSet'"
      class="absolute top-1/2 z-[999] w-full text-center text-white"
    >
      <small>Profilbild hochladen</small>
    </div>
  </a>
</template>

<script setup>
import { computed } from "vue";
import image from "@/assets/images/dashboard/default-profile-picture.jpg";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({ userImage: String });

const topPictureSource = computed(() => {
  return props.userImage === "notSet" ? image : props.userImage;
});
</script>

<style lang="scss" scoped></style>
