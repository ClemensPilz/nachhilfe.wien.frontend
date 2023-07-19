<template>
  <div class="container mx-auto max-w-7xl px-4">
    <DashboardTop />

    <DashboardFeature
      v-if="userStore.user.userType === 'ADMIN'"
      title="Admin-Funktionen"
      :left="true"
      subtitle="Nachhilfe.wien verwalten"
      text="Zu allen Admin-Funktionen"
      class="bg-mainOrange"
    >
      <ButtonLarge
        class="bg-mainBlue"
        @click="
          () => {
            router.push('/admin');
          }
        "
        text="Admin"
      />
      <template v-slot:image>
        <img src="@/assets/images/dashboard/admin.jpg" alt="" />
      </template>
    </DashboardFeature>

    <DashboardFeature
      title="Nachrichten abrufen"
      :left="false"
      subtitle="Hier geht's zur Inbox"
      text="Nachrichten schreiben und empfangen, Termine vereinbaren!"
      class="bg-mainYellow"
    >
      <ButtonLarge
        class="bg-mainBlue"
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
      :left="true"
      subtitle="Alle Termine auf einen Blick"
      text="Lernzeiten einplanen, Termine vereinbaren: Gutes Zeit-Management ist der Schlüssel zum Erfolg..."
      class="bg-secondary"
    >
      <ButtonLarge
        class="bg-mainBlue"
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
      :left="false"
      subtitle="...und den richtigen finden!"
      text="Alle Fächer, Bezirke, Bezahlmodalitäten: Hier findest du garantiert einen Lehrer, der dir weiterhelfen kann!"
      class="bg-mainYellow"
    >
      <ButtonLarge
        class="bg-mainBlue"
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
      title="Einstellungen ändern"
      :left="true"
      subtitle="Manage hier deinen Account!"
      text="Stelle sicher,dass deine persönlichen Infos auf dem neuesten Stand sind..."
      class="bg-secondary"
    >
      <ButtonLarge
        class="bg-mainBlue"
        @click="
          () => {
            router.push('/settings');
          }
        "
        text="Einstellungen"
      />
      <template v-slot:image>
        <img src="@/assets/images/dashboard/settings.jpg" alt="" />
      </template>
    </DashboardFeature>
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
  @apply hidden max-h-[400px] w-1/3 object-cover md:block;
}
</style>
