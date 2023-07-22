<template>
  <DashboardFeedCard
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
  </DashboardFeedCard>

  <DashboardFeedCard
    title="Mein Kalender"
    subtitle="Termine auf einen Blick"
    text="Gutes Zeit-Management ist der Schlüssel zum Erfolg..."
  >
    <ButtonLarge
      class="mt-2 bg-mainBlue"
      @click="
        () => {
          router.push('/calendar');
        }
      "
      text="Kalender"
    />
    <template v-slot:image>
      <img src="@/assets/images/dashboard/calendar.jpg" alt="" />
    </template>
  </DashboardFeedCard>

  <DashboardFeedCard
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
  </DashboardFeedCard>

  <DashboardFeedCard
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
  </DashboardFeedCard>
</template>

<script setup>
import DashboardFeedCard from "@/components/dashboard/DashboardFeedCard.vue";
import ButtonLarge from "@/components/util/buttons/ButtonLarge.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="scss" scoped></style>
