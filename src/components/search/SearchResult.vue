<template>
  <div
    class="my-4 grid h-fit grid-cols-3 grid-rows-1 rounded-xl bg-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl"
  >
    <!--Text-Part-->
    <div class="col-span-2 flex flex-col justify-center p-4 text-primary">
      <h4>{{ teacher.firstName }} {{ teacher.lastName }}</h4>
      <small class="font-thin">{{
        teacher.description === null ? "" : teacher.description
      }}</small>

      <div v-if="teacher.teacherId !== userStore.user.userId">
        <div
          id="divider"
          class="border-b-1 mb-3 mt-2 border border-mainYellow"
        ></div>

        <div class="flex flex-wrap gap-2 text-xs">
          <div
            v-for="coaching in coachings"
            v-show="coaching.active"
            :key="coaching.coachingId"
            class="select-none rounded-lg border border-primary px-2 py-1 hover:cursor-pointer hover:border-accent"
            @click="
              $emit('requestAppointment', {
                coachingId: coaching.coachingId,
                teacherId: teacher.teacherId,
                coachingName: coaching.subject + ' - ' + coaching.rate + ' €/h',
              })
            "
          >
            {{ coaching.subject }}: {{ coaching.rate }}€/h
          </div>
        </div>
        <div class="mt-2 flex gap-2">
          <ButtonRegular
            text="Profil"
            class="bg-mainBlue"
            @click="$emit('profile')"
          />
          <ButtonRegular
            text="Kontakt"
            class="bg-mainOrange"
            @click="$emit('contact')"
          />
        </div>
      </div>
    </div>

    <!--Image-Part-->
    <div class="col-span-1">
      <img
        :src="teacher.image ? teacher.image : 'https://placehold.co/200x250'"
        alt="Image of a teacher"
        class="h-full w-full rounded-bl-2xl rounded-tr-2xl object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const props = defineProps({ teacher: Object, coachings: Array });

const emits = defineEmits(["contact", "profile", "requestAppointment"]);
</script>

<style lang="scss" scoped></style>
