<template>
  <div class="container mx-auto max-w-7xl px-4">
    <DashboardTop class="pb-10" />

    <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <DashboardFeature
        title="Nachrichten"
        subtitle="Hier geht's zur Inbox"
        text="Nachrichten schreiben und empfangen, Termine vereinbaren!"
      >
        <ButtonLarge
          class="mt-2 bg-mainBlue"
          @click="
            () => {
              router.push('/inbox');
            }
          "
          text="Inbox"
        />
        <template v-slot:image>
          <img src="@/assets/images/dashboard/message.jpg" alt="" />
        </template>
      </DashboardFeature>

      <DashboardFeature
        title="Mein Kalender"
        subtitle="Termine auf einen Blick"
        text="Gutes Zeit-Management ist der Schlüssel zum Erfolg..."
      >
        <ButtonLarge
          class="mt-2 bg-mainBlue"
          @click="
            () => {
              router.push('/');
            }
          "
          text="Kalender"
        />
        <template v-slot:image>
          <img src="@/assets/images/dashboard/calendar.jpg" alt="" />
        </template>
      </DashboardFeature>

      <DashboardFeature
        title="Lehrer suchen"
        subtitle="...und finden!"
        text="Hier findest du garantiert einen Lehrer, der dir weiterhilft!"
      >
        <ButtonLarge
          class="mt-2 bg-mainBlue"
          @click="
            () => {
              router.push('/search');
            }
          "
          text="Suche"
        />
        <template v-slot:image>
          <img src="@/assets/images/dashboard/search.jpg" alt="" />
        </template>
      </DashboardFeature>

      <DashboardFeature
        title="Profil"
        subtitle="Manage dein Profil"
        text="Stelle sicher,dass deine Infos auf dem neuesten Stand sind..."
      >
        <ButtonLarge
          class="mt-2 bg-mainBlue"
          @click="
            () => {
              router.push('/settings');
            }
          "
          text="Settings"
        />
        <template v-slot:image>
          <img src="@/assets/images/dashboard/settings.jpg" alt="" />
        </template>
      </DashboardFeature>
    </div>
  </div>
</template>

<script setup>
import DashboardTop from "@/components/dashboard/DashboardTop.vue";
import DashboardFeature from "@/components/dashboard/DashboardFeature.vue";
import ButtonLarge from "@/components/util/buttons/ButtonLarge.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
const router = useRouter();
const userStore = useUserStore();
</script>

<style lang="scss" scoped>
a {
  @apply text-mainBlue underline underline-offset-4;
}

img {
  @apply object-cover;
}
</style>
